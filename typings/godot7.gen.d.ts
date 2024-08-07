// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
    /** A packed array of 32-bit integers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedint32array.html  
     */
    class PackedInt32Array {
        constructor()
        constructor(from: PackedInt32Array | int32[])
        constructor(from: Array)
        set_indexed(index: number, value: int64)
        get_indexed(index: number): int64
        
        /** Returns the number of elements in the array. */
        size(): int64
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the integer at the given index. */
        set(index: int64, value: int64): void
        
        /** Appends a value to the array. */
        push_back(value: int64): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: int64): boolean
        
        /** Appends a [PackedInt32Array] at the end of this array. */
        append_array(array: PackedInt32Array | int32[]): void
        
        /** Removes an element from the array by index. */
        remove_at(index: int64): void
        
        /** Inserts a new integer at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: int64, value: int64): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: int64): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value]. */
        has(value: int64): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedInt32Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedInt32Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedInt32Array
        
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
        bsearch(value: int64, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedInt32Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: int64, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: int64, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array. */
        count(value: int64): int64
        static EQUAL(left: PackedInt32Array | int32[], right: PackedInt32Array | int32[]): boolean
        static NOT_EQUAL(left: PackedInt32Array | int32[], right: PackedInt32Array | int32[]): boolean
    }
    /** A packed array of 64-bit integers.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedint64array.html  
     */
    class PackedInt64Array {
        constructor()
        constructor(from: PackedInt64Array | int64[])
        constructor(from: Array)
        set_indexed(index: number, value: int64)
        get_indexed(index: number): int64
        
        /** Returns the number of elements in the array. */
        size(): int64
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the integer at the given index. */
        set(index: int64, value: int64): void
        
        /** Appends a value to the array. */
        push_back(value: int64): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: int64): boolean
        
        /** Appends a [PackedInt64Array] at the end of this array. */
        append_array(array: PackedInt64Array | int64[]): void
        
        /** Removes an element from the array by index. */
        remove_at(index: int64): void
        
        /** Inserts a new integer at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: int64, value: int64): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: int64): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value]. */
        has(value: int64): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedInt64Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedInt64Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedInt64Array
        
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
        bsearch(value: int64, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedInt64Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: int64, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: int64, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array. */
        count(value: int64): int64
        static EQUAL(left: PackedInt64Array | int64[], right: PackedInt64Array | int64[]): boolean
        static NOT_EQUAL(left: PackedInt64Array | int64[], right: PackedInt64Array | int64[]): boolean
    }
    /** A packed array of 32-bit floating-point values.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedfloat32array.html  
     */
    class PackedFloat32Array {
        constructor()
        constructor(from: PackedFloat32Array | float32[])
        constructor(from: Array)
        set_indexed(index: number, value: float64)
        get_indexed(index: number): float64
        
        /** Returns the number of elements in the array. */
        size(): int64
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the float at the given index. */
        set(index: int64, value: float64): void
        
        /** Appends an element at the end of the array. */
        push_back(value: float64): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: float64): boolean
        
        /** Appends a [PackedFloat32Array] at the end of this array. */
        append_array(array: PackedFloat32Array | float32[]): void
        
        /** Removes an element from the array by index. */
        remove_at(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: int64, value: float64): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: float64): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value].  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        has(value: float64): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedFloat32Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedFloat32Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedFloat32Array
        
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
        bsearch(value: float64, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedFloat32Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        find(value: float64, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        rfind(value: float64, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        count(value: float64): int64
        static EQUAL(left: PackedFloat32Array | float32[], right: PackedFloat32Array | float32[]): boolean
        static NOT_EQUAL(left: PackedFloat32Array | float32[], right: PackedFloat32Array | float32[]): boolean
    }
    /** A packed array of 64-bit floating-point values.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedfloat64array.html  
     */
    class PackedFloat64Array {
        constructor()
        constructor(from: PackedFloat64Array | float64[])
        constructor(from: Array)
        set_indexed(index: number, value: float64)
        get_indexed(index: number): float64
        
        /** Returns the number of elements in the array. */
        size(): int64
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the float at the given index. */
        set(index: int64, value: float64): void
        
        /** Appends an element at the end of the array. */
        push_back(value: float64): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: float64): boolean
        
        /** Appends a [PackedFloat64Array] at the end of this array. */
        append_array(array: PackedFloat64Array | float64[]): void
        
        /** Removes an element from the array by index. */
        remove_at(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: int64, value: float64): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: float64): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: int64): int64
        
        /** Clears the array. This is equivalent to using [method resize] with a size of `0`. */
        clear(): void
        
        /** Returns `true` if the array contains [param value].  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        has(value: float64): boolean
        
        /** Reverses the order of the elements in the array. */
        reverse(): void
        
        /** Returns the slice of the [PackedFloat64Array], from [param begin] (inclusive) to [param end] (exclusive), as a new [PackedFloat64Array].  
         *  The absolute value of [param begin] and [param end] will be clamped to the array size, so the default value for [param end] makes it slice to the size of the array by default (i.e. `arr.slice(1)` is a shorthand for `arr.slice(1, arr.size())`).  
         *  If either [param begin] or [param end] are negative, they will be relative to the end of the array (i.e. `arr.slice(0, -2)` is a shorthand for `arr.slice(0, arr.size() - 2)`).  
         */
        slice(begin: int64, end: int64 = 2147483647): PackedFloat64Array
        
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
        bsearch(value: float64, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedFloat64Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        find(value: float64, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        rfind(value: float64, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array.  
         *      
         *  **Note:** [constant @GDScript.NAN] doesn't behave the same as other numbers. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        count(value: float64): int64
        static EQUAL(left: PackedFloat64Array | float64[], right: PackedFloat64Array | float64[]): boolean
        static NOT_EQUAL(left: PackedFloat64Array | float64[], right: PackedFloat64Array | float64[]): boolean
    }
    /** A packed array of [String]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedstringarray.html  
     */
    class PackedStringArray {
        constructor()
        constructor(from: PackedStringArray | string[])
        constructor(from: Array)
        set_indexed(index: number, value: string)
        get_indexed(index: number): string
        
        /** Returns the number of elements in the array. */
        size(): int64
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the [String] at the given index. */
        set(index: int64, value: string): void
        
        /** Appends a string element at end of the array. */
        push_back(value: string): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: string): boolean
        
        /** Appends a [PackedStringArray] at the end of this array. */
        append_array(array: PackedStringArray | string[]): void
        
        /** Removes an element from the array by index. */
        remove_at(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: int64, value: string): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: string): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: int64): int64
        
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
        slice(begin: int64, end: int64 = 2147483647): PackedStringArray
        
        /** Returns a [PackedByteArray] with each string encoded as bytes. */
        to_byte_array(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order. */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         */
        bsearch(value: string, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedStringArray
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: string, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: string, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array. */
        count(value: string): int64
        static EQUAL(left: PackedStringArray | string[], right: PackedStringArray | string[]): boolean
        static NOT_EQUAL(left: PackedStringArray | string[], right: PackedStringArray | string[]): boolean
    }
    /** A packed array of [Vector2]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedvector2array.html  
     */
    class PackedVector2Array {
        constructor()
        constructor(from: PackedVector2Array | Vector2[])
        constructor(from: Array)
        set_indexed(index: number, value: Vector2)
        get_indexed(index: number): Vector2
        
        /** Returns the number of elements in the array. */
        size(): int64
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the [Vector2] at the given index. */
        set(index: int64, value: Vector2): void
        
        /** Inserts a [Vector2] at the end. */
        push_back(value: Vector2): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: Vector2): boolean
        
        /** Appends a [PackedVector2Array] at the end of this array. */
        append_array(array: PackedVector2Array | Vector2[]): void
        
        /** Removes an element from the array by index. */
        remove_at(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: int64, value: Vector2): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: Vector2): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: int64): int64
        
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
        slice(begin: int64, end: int64 = 2147483647): PackedVector2Array
        
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
        bsearch(value: Vector2, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedVector2Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        find(value: Vector2, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        rfind(value: Vector2, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        count(value: Vector2): int64
        static EQUAL(left: PackedVector2Array | Vector2[], right: PackedVector2Array | Vector2[]): boolean
        static NOT_EQUAL(left: PackedVector2Array | Vector2[], right: PackedVector2Array | Vector2[]): boolean
    }
    /** A packed array of [Vector3]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedvector3array.html  
     */
    class PackedVector3Array {
        constructor()
        constructor(from: PackedVector3Array | Vector3[])
        constructor(from: Array)
        set_indexed(index: number, value: Vector3)
        get_indexed(index: number): Vector3
        
        /** Returns the number of elements in the array. */
        size(): int64
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the [Vector3] at the given index. */
        set(index: int64, value: Vector3): void
        
        /** Inserts a [Vector3] at the end. */
        push_back(value: Vector3): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: Vector3): boolean
        
        /** Appends a [PackedVector3Array] at the end of this array. */
        append_array(array: PackedVector3Array | Vector3[]): void
        
        /** Removes an element from the array by index. */
        remove_at(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: int64, value: Vector3): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: Vector3): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: int64): int64
        
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
        slice(begin: int64, end: int64 = 2147483647): PackedVector3Array
        
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
        bsearch(value: Vector3, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedVector3Array
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        find(value: Vector3, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        rfind(value: Vector3, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array.  
         *      
         *  **Note:** Vectors with [constant @GDScript.NAN] elements don't behave the same as other vectors. Therefore, the results from this method may not be accurate if NaNs are included.  
         */
        count(value: Vector3): int64
        static EQUAL(left: PackedVector3Array | Vector3[], right: PackedVector3Array | Vector3[]): boolean
        static NOT_EQUAL(left: PackedVector3Array | Vector3[], right: PackedVector3Array | Vector3[]): boolean
    }
    /** A packed array of [Color]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_packedcolorarray.html  
     */
    class PackedColorArray {
        constructor()
        constructor(from: PackedColorArray | Color[])
        constructor(from: Array)
        set_indexed(index: number, value: Color)
        get_indexed(index: number): Color
        
        /** Returns the number of elements in the array. */
        size(): int64
        
        /** Returns `true` if the array is empty. */
        is_empty(): boolean
        
        /** Changes the [Color] at the given index. */
        set(index: int64, value: Color): void
        
        /** Appends a value to the array. */
        push_back(value: Color): boolean
        
        /** Appends an element at the end of the array (alias of [method push_back]). */
        append(value: Color): boolean
        
        /** Appends a [PackedColorArray] at the end of this array. */
        append_array(array: PackedColorArray | Color[]): void
        
        /** Removes an element from the array by index. */
        remove_at(index: int64): void
        
        /** Inserts a new element at a given position in the array. The position must be valid, or at the end of the array (`idx == size()`). */
        insert(at_index: int64, value: Color): int64
        
        /** Assigns the given value to all elements in the array. This can typically be used together with [method resize] to create an array with a given size and initialized elements. */
        fill(value: Color): void
        
        /** Sets the size of the array. If the array is grown, reserves elements at the end of the array. If the array is shrunk, truncates the array to the new size. Calling [method resize] once and assigning the new values is faster than adding new elements one by one. */
        resize(new_size: int64): int64
        
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
        slice(begin: int64, end: int64 = 2147483647): PackedColorArray
        
        /** Returns a [PackedByteArray] with each color encoded as bytes. */
        to_byte_array(): PackedByteArray
        
        /** Sorts the elements of the array in ascending order. */
        sort(): void
        
        /** Finds the index of an existing value (or the insertion index that maintains sorting order, if the value is not yet present in the array) using binary search. Optionally, a [param before] specifier can be passed. If `false`, the returned index comes after all existing entries of the value in the array.  
         *      
         *  **Note:** Calling [method bsearch] on an unsorted array results in unexpected behavior.  
         */
        bsearch(value: Color, before: boolean = true): int64
        
        /** Creates a copy of the array, and returns it. */
        duplicate(): PackedColorArray
        
        /** Searches the array for a value and returns its index or `-1` if not found. Optionally, the initial search index can be passed. */
        find(value: Color, from: int64 = 0): int64
        
        /** Searches the array in reverse order. Optionally, a start search index can be passed. If negative, the start index is considered relative to the end of the array. */
        rfind(value: Color, from: int64 = -1): int64
        
        /** Returns the number of times an element is in the array. */
        count(value: Color): int64
        static EQUAL(left: PackedColorArray | Color[], right: PackedColorArray | Color[]): boolean
        static NOT_EQUAL(left: PackedColorArray | Color[], right: PackedColorArray | Color[]): boolean
    }
    enum Side {
        /** Left side, usually used for [Control] or [StyleBox]-derived classes. */
        SIDE_LEFT = 0,
        
        /** Top side, usually used for [Control] or [StyleBox]-derived classes. */
        SIDE_TOP = 1,
        
        /** Right side, usually used for [Control] or [StyleBox]-derived classes. */
        SIDE_RIGHT = 2,
        
        /** Bottom side, usually used for [Control] or [StyleBox]-derived classes. */
        SIDE_BOTTOM = 3,
    }
    enum Corner {
        /** Top-left corner. */
        CORNER_TOP_LEFT = 0,
        
        /** Top-right corner. */
        CORNER_TOP_RIGHT = 1,
        
        /** Bottom-right corner. */
        CORNER_BOTTOM_RIGHT = 2,
        
        /** Bottom-left corner. */
        CORNER_BOTTOM_LEFT = 3,
    }
    enum Orientation {
        /** General vertical alignment, usually used for [Separator], [ScrollBar], [Slider], etc. */
        VERTICAL = 1,
        
        /** General horizontal alignment, usually used for [Separator], [ScrollBar], [Slider], etc. */
        HORIZONTAL = 0,
    }
    enum ClockDirection {
        /** Clockwise rotation. Used by some methods (e.g. [method Image.rotate_90]). */
        CLOCKWISE = 0,
        
        /** Counter-clockwise rotation. Used by some methods (e.g. [method Image.rotate_90]). */
        COUNTERCLOCKWISE = 1,
    }
    enum HorizontalAlignment {
        /** Horizontal left alignment, usually for text-derived classes. */
        HORIZONTAL_ALIGNMENT_LEFT = 0,
        
        /** Horizontal center alignment, usually for text-derived classes. */
        HORIZONTAL_ALIGNMENT_CENTER = 1,
        
        /** Horizontal right alignment, usually for text-derived classes. */
        HORIZONTAL_ALIGNMENT_RIGHT = 2,
        
        /** Expand row to fit width, usually for text-derived classes. */
        HORIZONTAL_ALIGNMENT_FILL = 3,
    }
    enum VerticalAlignment {
        /** Vertical top alignment, usually for text-derived classes. */
        VERTICAL_ALIGNMENT_TOP = 0,
        
        /** Vertical center alignment, usually for text-derived classes. */
        VERTICAL_ALIGNMENT_CENTER = 1,
        
        /** Vertical bottom alignment, usually for text-derived classes. */
        VERTICAL_ALIGNMENT_BOTTOM = 2,
        
        /** Expand rows to fit height, usually for text-derived classes. */
        VERTICAL_ALIGNMENT_FILL = 3,
    }
    enum InlineAlignment {
        /** Aligns the top of the inline object (e.g. image, table) to the position of the text specified by `INLINE_ALIGNMENT_TO_*` constant. */
        INLINE_ALIGNMENT_TOP_TO = 0,
        
        /** Aligns the center of the inline object (e.g. image, table) to the position of the text specified by `INLINE_ALIGNMENT_TO_*` constant. */
        INLINE_ALIGNMENT_CENTER_TO = 1,
        
        /** Aligns the baseline (user defined) of the inline object (e.g. image, table) to the position of the text specified by `INLINE_ALIGNMENT_TO_*` constant. */
        INLINE_ALIGNMENT_BASELINE_TO = 3,
        
        /** Aligns the bottom of the inline object (e.g. image, table) to the position of the text specified by `INLINE_ALIGNMENT_TO_*` constant. */
        INLINE_ALIGNMENT_BOTTOM_TO = 2,
        
        /** Aligns the position of the inline object (e.g. image, table) specified by `INLINE_ALIGNMENT_*_TO` constant to the top of the text. */
        INLINE_ALIGNMENT_TO_TOP = 0,
        
        /** Aligns the position of the inline object (e.g. image, table) specified by `INLINE_ALIGNMENT_*_TO` constant to the center of the text. */
        INLINE_ALIGNMENT_TO_CENTER = 4,
        
        /** Aligns the position of the inline object (e.g. image, table) specified by `INLINE_ALIGNMENT_*_TO` constant to the baseline of the text. */
        INLINE_ALIGNMENT_TO_BASELINE = 8,
        
        /** Aligns inline object (e.g. image, table) to the bottom of the text. */
        INLINE_ALIGNMENT_TO_BOTTOM = 12,
        
        /** Aligns top of the inline object (e.g. image, table) to the top of the text. Equivalent to `INLINE_ALIGNMENT_TOP_TO | INLINE_ALIGNMENT_TO_TOP`. */
        INLINE_ALIGNMENT_TOP = 0,
        
        /** Aligns center of the inline object (e.g. image, table) to the center of the text. Equivalent to `INLINE_ALIGNMENT_CENTER_TO | INLINE_ALIGNMENT_TO_CENTER`. */
        INLINE_ALIGNMENT_CENTER = 5,
        
        /** Aligns bottom of the inline object (e.g. image, table) to the bottom of the text. Equivalent to `INLINE_ALIGNMENT_BOTTOM_TO | INLINE_ALIGNMENT_TO_BOTTOM`. */
        INLINE_ALIGNMENT_BOTTOM = 14,
        
        /** A bit mask for `INLINE_ALIGNMENT_*_TO` alignment constants. */
        INLINE_ALIGNMENT_IMAGE_MASK = 3,
        
        /** A bit mask for `INLINE_ALIGNMENT_TO_*` alignment constants. */
        INLINE_ALIGNMENT_TEXT_MASK = 12,
    }
    enum EulerOrder {
        /** Specifies that Euler angles should be in XYZ order. When composing, the order is X, Y, Z. When decomposing, the order is reversed, first Z, then Y, and X last. */
        EULER_ORDER_XYZ = 0,
        
        /** Specifies that Euler angles should be in XZY order. When composing, the order is X, Z, Y. When decomposing, the order is reversed, first Y, then Z, and X last. */
        EULER_ORDER_XZY = 1,
        
        /** Specifies that Euler angles should be in YXZ order. When composing, the order is Y, X, Z. When decomposing, the order is reversed, first Z, then X, and Y last. */
        EULER_ORDER_YXZ = 2,
        
        /** Specifies that Euler angles should be in YZX order. When composing, the order is Y, Z, X. When decomposing, the order is reversed, first X, then Z, and Y last. */
        EULER_ORDER_YZX = 3,
        
        /** Specifies that Euler angles should be in ZXY order. When composing, the order is Z, X, Y. When decomposing, the order is reversed, first Y, then X, and Z last. */
        EULER_ORDER_ZXY = 4,
        
        /** Specifies that Euler angles should be in ZYX order. When composing, the order is Z, Y, X. When decomposing, the order is reversed, first X, then Y, and Z last. */
        EULER_ORDER_ZYX = 5,
    }
    enum Key {
        /** Enum value which doesn't correspond to any key. This is used to initialize [enum Key] properties with a generic state. */
        KEY_NONE = 0,
        
        /** Keycodes with this bit applied are non-printable. */
        KEY_SPECIAL = 4194304,
        
        /** Escape key. */
        KEY_ESCAPE = 4194305,
        
        /** Tab key. */
        KEY_TAB = 4194306,
        
        /** Shift + Tab key. */
        KEY_BACKTAB = 4194307,
        
        /** Backspace key. */
        KEY_BACKSPACE = 4194308,
        
        /** Return key (on the main keyboard). */
        KEY_ENTER = 4194309,
        
        /** Enter key on the numeric keypad. */
        KEY_KP_ENTER = 4194310,
        
        /** Insert key. */
        KEY_INSERT = 4194311,
        
        /** Delete key. */
        KEY_DELETE = 4194312,
        
        /** Pause key. */
        KEY_PAUSE = 4194313,
        
        /** Print Screen key. */
        KEY_PRINT = 4194314,
        
        /** System Request key. */
        KEY_SYSREQ = 4194315,
        
        /** Clear key. */
        KEY_CLEAR = 4194316,
        
        /** Home key. */
        KEY_HOME = 4194317,
        
        /** End key. */
        KEY_END = 4194318,
        
        /** Left arrow key. */
        KEY_LEFT = 4194319,
        
        /** Up arrow key. */
        KEY_UP = 4194320,
        
        /** Right arrow key. */
        KEY_RIGHT = 4194321,
        
        /** Down arrow key. */
        KEY_DOWN = 4194322,
        
        /** Page Up key. */
        KEY_PAGEUP = 4194323,
        
        /** Page Down key. */
        KEY_PAGEDOWN = 4194324,
        
        /** Shift key. */
        KEY_SHIFT = 4194325,
        
        /** Control key. */
        KEY_CTRL = 4194326,
        
        /** Meta key. */
        KEY_META = 4194327,
        
        /** Alt key. */
        KEY_ALT = 4194328,
        
        /** Caps Lock key. */
        KEY_CAPSLOCK = 4194329,
        
        /** Num Lock key. */
        KEY_NUMLOCK = 4194330,
        
        /** Scroll Lock key. */
        KEY_SCROLLLOCK = 4194331,
        
        /** F1 key. */
        KEY_F1 = 4194332,
        
        /** F2 key. */
        KEY_F2 = 4194333,
        
        /** F3 key. */
        KEY_F3 = 4194334,
        
        /** F4 key. */
        KEY_F4 = 4194335,
        
        /** F5 key. */
        KEY_F5 = 4194336,
        
        /** F6 key. */
        KEY_F6 = 4194337,
        
        /** F7 key. */
        KEY_F7 = 4194338,
        
        /** F8 key. */
        KEY_F8 = 4194339,
        
        /** F9 key. */
        KEY_F9 = 4194340,
        
        /** F10 key. */
        KEY_F10 = 4194341,
        
        /** F11 key. */
        KEY_F11 = 4194342,
        
        /** F12 key. */
        KEY_F12 = 4194343,
        
        /** F13 key. */
        KEY_F13 = 4194344,
        
        /** F14 key. */
        KEY_F14 = 4194345,
        
        /** F15 key. */
        KEY_F15 = 4194346,
        
        /** F16 key. */
        KEY_F16 = 4194347,
        
        /** F17 key. */
        KEY_F17 = 4194348,
        
        /** F18 key. */
        KEY_F18 = 4194349,
        
        /** F19 key. */
        KEY_F19 = 4194350,
        
        /** F20 key. */
        KEY_F20 = 4194351,
        
        /** F21 key. */
        KEY_F21 = 4194352,
        
        /** F22 key. */
        KEY_F22 = 4194353,
        
        /** F23 key. */
        KEY_F23 = 4194354,
        
        /** F24 key. */
        KEY_F24 = 4194355,
        
        /** F25 key. Only supported on macOS and Linux due to a Windows limitation. */
        KEY_F25 = 4194356,
        
        /** F26 key. Only supported on macOS and Linux due to a Windows limitation. */
        KEY_F26 = 4194357,
        
        /** F27 key. Only supported on macOS and Linux due to a Windows limitation. */
        KEY_F27 = 4194358,
        
        /** F28 key. Only supported on macOS and Linux due to a Windows limitation. */
        KEY_F28 = 4194359,
        
        /** F29 key. Only supported on macOS and Linux due to a Windows limitation. */
        KEY_F29 = 4194360,
        
        /** F30 key. Only supported on macOS and Linux due to a Windows limitation. */
        KEY_F30 = 4194361,
        
        /** F31 key. Only supported on macOS and Linux due to a Windows limitation. */
        KEY_F31 = 4194362,
        
        /** F32 key. Only supported on macOS and Linux due to a Windows limitation. */
        KEY_F32 = 4194363,
        
        /** F33 key. Only supported on macOS and Linux due to a Windows limitation. */
        KEY_F33 = 4194364,
        
        /** F34 key. Only supported on macOS and Linux due to a Windows limitation. */
        KEY_F34 = 4194365,
        
        /** F35 key. Only supported on macOS and Linux due to a Windows limitation. */
        KEY_F35 = 4194366,
        
        /** Multiply (*) key on the numeric keypad. */
        KEY_KP_MULTIPLY = 4194433,
        
        /** Divide (/) key on the numeric keypad. */
        KEY_KP_DIVIDE = 4194434,
        
        /** Subtract (-) key on the numeric keypad. */
        KEY_KP_SUBTRACT = 4194435,
        
        /** Period (.) key on the numeric keypad. */
        KEY_KP_PERIOD = 4194436,
        
        /** Add (+) key on the numeric keypad. */
        KEY_KP_ADD = 4194437,
        
        /** Number 0 on the numeric keypad. */
        KEY_KP_0 = 4194438,
        
        /** Number 1 on the numeric keypad. */
        KEY_KP_1 = 4194439,
        
        /** Number 2 on the numeric keypad. */
        KEY_KP_2 = 4194440,
        
        /** Number 3 on the numeric keypad. */
        KEY_KP_3 = 4194441,
        
        /** Number 4 on the numeric keypad. */
        KEY_KP_4 = 4194442,
        
        /** Number 5 on the numeric keypad. */
        KEY_KP_5 = 4194443,
        
        /** Number 6 on the numeric keypad. */
        KEY_KP_6 = 4194444,
        
        /** Number 7 on the numeric keypad. */
        KEY_KP_7 = 4194445,
        
        /** Number 8 on the numeric keypad. */
        KEY_KP_8 = 4194446,
        
        /** Number 9 on the numeric keypad. */
        KEY_KP_9 = 4194447,
        
        /** Context menu key. */
        KEY_MENU = 4194370,
        
        /** Hyper key. (On Linux/X11 only). */
        KEY_HYPER = 4194371,
        
        /** Help key. */
        KEY_HELP = 4194373,
        
        /** Media back key. Not to be confused with the Back button on an Android device. */
        KEY_BACK = 4194376,
        
        /** Media forward key. */
        KEY_FORWARD = 4194377,
        
        /** Media stop key. */
        KEY_STOP = 4194378,
        
        /** Media refresh key. */
        KEY_REFRESH = 4194379,
        
        /** Volume down key. */
        KEY_VOLUMEDOWN = 4194380,
        
        /** Mute volume key. */
        KEY_VOLUMEMUTE = 4194381,
        
        /** Volume up key. */
        KEY_VOLUMEUP = 4194382,
        
        /** Media play key. */
        KEY_MEDIAPLAY = 4194388,
        
        /** Media stop key. */
        KEY_MEDIASTOP = 4194389,
        
        /** Previous song key. */
        KEY_MEDIAPREVIOUS = 4194390,
        
        /** Next song key. */
        KEY_MEDIANEXT = 4194391,
        
        /** Media record key. */
        KEY_MEDIARECORD = 4194392,
        
        /** Home page key. */
        KEY_HOMEPAGE = 4194393,
        
        /** Favorites key. */
        KEY_FAVORITES = 4194394,
        
        /** Search key. */
        KEY_SEARCH = 4194395,
        
        /** Standby key. */
        KEY_STANDBY = 4194396,
        
        /** Open URL / Launch Browser key. */
        KEY_OPENURL = 4194397,
        
        /** Launch Mail key. */
        KEY_LAUNCHMAIL = 4194398,
        
        /** Launch Media key. */
        KEY_LAUNCHMEDIA = 4194399,
        
        /** Launch Shortcut 0 key. */
        KEY_LAUNCH0 = 4194400,
        
        /** Launch Shortcut 1 key. */
        KEY_LAUNCH1 = 4194401,
        
        /** Launch Shortcut 2 key. */
        KEY_LAUNCH2 = 4194402,
        
        /** Launch Shortcut 3 key. */
        KEY_LAUNCH3 = 4194403,
        
        /** Launch Shortcut 4 key. */
        KEY_LAUNCH4 = 4194404,
        
        /** Launch Shortcut 5 key. */
        KEY_LAUNCH5 = 4194405,
        
        /** Launch Shortcut 6 key. */
        KEY_LAUNCH6 = 4194406,
        
        /** Launch Shortcut 7 key. */
        KEY_LAUNCH7 = 4194407,
        
        /** Launch Shortcut 8 key. */
        KEY_LAUNCH8 = 4194408,
        
        /** Launch Shortcut 9 key. */
        KEY_LAUNCH9 = 4194409,
        
        /** Launch Shortcut A key. */
        KEY_LAUNCHA = 4194410,
        
        /** Launch Shortcut B key. */
        KEY_LAUNCHB = 4194411,
        
        /** Launch Shortcut C key. */
        KEY_LAUNCHC = 4194412,
        
        /** Launch Shortcut D key. */
        KEY_LAUNCHD = 4194413,
        
        /** Launch Shortcut E key. */
        KEY_LAUNCHE = 4194414,
        
        /** Launch Shortcut F key. */
        KEY_LAUNCHF = 4194415,
        
        /** "Globe" key on Mac / iPad keyboard. */
        KEY_GLOBE = 4194416,
        
        /** "On-screen keyboard" key on iPad keyboard. */
        KEY_KEYBOARD = 4194417,
        
        /** 英数 key on Mac keyboard. */
        KEY_JIS_EISU = 4194418,
        
        /** かな key on Mac keyboard. */
        KEY_JIS_KANA = 4194419,
        
        /** Unknown key. */
        KEY_UNKNOWN = 8388607,
        
        /** Space key. */
        KEY_SPACE = 32,
        
        /** ! key. */
        KEY_EXCLAM = 33,
        
        /** " key. */
        KEY_QUOTEDBL = 34,
        
        /** # key. */
        KEY_NUMBERSIGN = 35,
        
        /** $ key. */
        KEY_DOLLAR = 36,
        
        /** % key. */
        KEY_PERCENT = 37,
        
        /** & key. */
        KEY_AMPERSAND = 38,
        
        /** ' key. */
        KEY_APOSTROPHE = 39,
        
        /** ( key. */
        KEY_PARENLEFT = 40,
        
        /** ) key. */
        KEY_PARENRIGHT = 41,
        
        /** * key. */
        KEY_ASTERISK = 42,
        
        /** + key. */
        KEY_PLUS = 43,
        
        /** , key. */
        KEY_COMMA = 44,
        
        /** - key. */
        KEY_MINUS = 45,
        
        /** . key. */
        KEY_PERIOD = 46,
        
        /** / key. */
        KEY_SLASH = 47,
        
        /** Number 0 key. */
        KEY_0 = 48,
        
        /** Number 1 key. */
        KEY_1 = 49,
        
        /** Number 2 key. */
        KEY_2 = 50,
        
        /** Number 3 key. */
        KEY_3 = 51,
        
        /** Number 4 key. */
        KEY_4 = 52,
        
        /** Number 5 key. */
        KEY_5 = 53,
        
        /** Number 6 key. */
        KEY_6 = 54,
        
        /** Number 7 key. */
        KEY_7 = 55,
        
        /** Number 8 key. */
        KEY_8 = 56,
        
        /** Number 9 key. */
        KEY_9 = 57,
        
        /** : key. */
        KEY_COLON = 58,
        
        /** ; key. */
        KEY_SEMICOLON = 59,
        
        /** < key. */
        KEY_LESS = 60,
        
        /** = key. */
        KEY_EQUAL = 61,
        
        /** > key. */
        KEY_GREATER = 62,
        
        /** ? key. */
        KEY_QUESTION = 63,
        
        /** @ key. */
        KEY_AT = 64,
        
        /** A key. */
        KEY_A = 65,
        
        /** B key. */
        KEY_B = 66,
        
        /** C key. */
        KEY_C = 67,
        
        /** D key. */
        KEY_D = 68,
        
        /** E key. */
        KEY_E = 69,
        
        /** F key. */
        KEY_F = 70,
        
        /** G key. */
        KEY_G = 71,
        
        /** H key. */
        KEY_H = 72,
        
        /** I key. */
        KEY_I = 73,
        
        /** J key. */
        KEY_J = 74,
        
        /** K key. */
        KEY_K = 75,
        
        /** L key. */
        KEY_L = 76,
        
        /** M key. */
        KEY_M = 77,
        
        /** N key. */
        KEY_N = 78,
        
        /** O key. */
        KEY_O = 79,
        
        /** P key. */
        KEY_P = 80,
        
        /** Q key. */
        KEY_Q = 81,
        
        /** R key. */
        KEY_R = 82,
        
        /** S key. */
        KEY_S = 83,
        
        /** T key. */
        KEY_T = 84,
        
        /** U key. */
        KEY_U = 85,
        
        /** V key. */
        KEY_V = 86,
        
        /** W key. */
        KEY_W = 87,
        
        /** X key. */
        KEY_X = 88,
        
        /** Y key. */
        KEY_Y = 89,
        
        /** Z key. */
        KEY_Z = 90,
        
        /** [ key. */
        KEY_BRACKETLEFT = 91,
        
        /** \ key. */
        KEY_BACKSLASH = 92,
        
        /** ] key. */
        KEY_BRACKETRIGHT = 93,
        
        /** ^ key. */
        KEY_ASCIICIRCUM = 94,
        
        /** _ key. */
        KEY_UNDERSCORE = 95,
        
        /** ` key. */
        KEY_QUOTELEFT = 96,
        
        /** { key. */
        KEY_BRACELEFT = 123,
        
        /** | key. */
        KEY_BAR = 124,
        
        /** } key. */
        KEY_BRACERIGHT = 125,
        
        /** ~ key. */
        KEY_ASCIITILDE = 126,
        
        /** ¥ key. */
        KEY_YEN = 165,
        
        /** § key. */
        KEY_SECTION = 167,
    }
    enum KeyModifierMask {
        /** Key Code mask. */
        KEY_CODE_MASK = 8388607,
        
        /** Modifier key mask. */
        KEY_MODIFIER_MASK = 532676608,
        
        /** Automatically remapped to [constant KEY_META] on macOS and [constant KEY_CTRL] on other platforms, this mask is never set in the actual events, and should be used for key mapping only. */
        KEY_MASK_CMD_OR_CTRL = 16777216,
        
        /** Shift key mask. */
        KEY_MASK_SHIFT = 33554432,
        
        /** Alt or Option (on macOS) key mask. */
        KEY_MASK_ALT = 67108864,
        
        /** Command (on macOS) or Meta/Windows key mask. */
        KEY_MASK_META = 134217728,
        
        /** Control key mask. */
        KEY_MASK_CTRL = 268435456,
        
        /** Keypad key mask. */
        KEY_MASK_KPAD = 536870912,
        
        /** Group Switch key mask. */
        KEY_MASK_GROUP_SWITCH = 1073741824,
    }
    enum MouseButton {
        /** Enum value which doesn't correspond to any mouse button. This is used to initialize [enum MouseButton] properties with a generic state. */
        MOUSE_BUTTON_NONE = 0,
        
        /** Primary mouse button, usually assigned to the left button. */
        MOUSE_BUTTON_LEFT = 1,
        
        /** Secondary mouse button, usually assigned to the right button. */
        MOUSE_BUTTON_RIGHT = 2,
        
        /** Middle mouse button. */
        MOUSE_BUTTON_MIDDLE = 3,
        
        /** Mouse wheel scrolling up. */
        MOUSE_BUTTON_WHEEL_UP = 4,
        
        /** Mouse wheel scrolling down. */
        MOUSE_BUTTON_WHEEL_DOWN = 5,
        
        /** Mouse wheel left button (only present on some mice). */
        MOUSE_BUTTON_WHEEL_LEFT = 6,
        
        /** Mouse wheel right button (only present on some mice). */
        MOUSE_BUTTON_WHEEL_RIGHT = 7,
        
        /** Extra mouse button 1. This is sometimes present, usually to the sides of the mouse. */
        MOUSE_BUTTON_XBUTTON1 = 8,
        
        /** Extra mouse button 2. This is sometimes present, usually to the sides of the mouse. */
        MOUSE_BUTTON_XBUTTON2 = 9,
    }
    enum MouseButtonMask {
        /** Primary mouse button mask, usually for the left button. */
        MOUSE_BUTTON_MASK_LEFT = 1,
        
        /** Secondary mouse button mask, usually for the right button. */
        MOUSE_BUTTON_MASK_RIGHT = 2,
        
        /** Middle mouse button mask. */
        MOUSE_BUTTON_MASK_MIDDLE = 4,
        
        /** Extra mouse button 1 mask. */
        MOUSE_BUTTON_MASK_MB_XBUTTON1 = 128,
        
        /** Extra mouse button 2 mask. */
        MOUSE_BUTTON_MASK_MB_XBUTTON2 = 256,
    }
    enum JoyButton {
        /** An invalid game controller button. */
        JOY_BUTTON_INVALID = -1,
        
        /** Game controller SDL button A. Corresponds to the bottom action button: Sony Cross, Xbox A, Nintendo B. */
        JOY_BUTTON_A = 0,
        
        /** Game controller SDL button B. Corresponds to the right action button: Sony Circle, Xbox B, Nintendo A. */
        JOY_BUTTON_B = 1,
        
        /** Game controller SDL button X. Corresponds to the left action button: Sony Square, Xbox X, Nintendo Y. */
        JOY_BUTTON_X = 2,
        
        /** Game controller SDL button Y. Corresponds to the top action button: Sony Triangle, Xbox Y, Nintendo X. */
        JOY_BUTTON_Y = 3,
        
        /** Game controller SDL back button. Corresponds to the Sony Select, Xbox Back, Nintendo - button. */
        JOY_BUTTON_BACK = 4,
        
        /** Game controller SDL guide button. Corresponds to the Sony PS, Xbox Home button. */
        JOY_BUTTON_GUIDE = 5,
        
        /** Game controller SDL start button. Corresponds to the Sony Options, Xbox Menu, Nintendo + button. */
        JOY_BUTTON_START = 6,
        
        /** Game controller SDL left stick button. Corresponds to the Sony L3, Xbox L/LS button. */
        JOY_BUTTON_LEFT_STICK = 7,
        
        /** Game controller SDL right stick button. Corresponds to the Sony R3, Xbox R/RS button. */
        JOY_BUTTON_RIGHT_STICK = 8,
        
        /** Game controller SDL left shoulder button. Corresponds to the Sony L1, Xbox LB button. */
        JOY_BUTTON_LEFT_SHOULDER = 9,
        
        /** Game controller SDL right shoulder button. Corresponds to the Sony R1, Xbox RB button. */
        JOY_BUTTON_RIGHT_SHOULDER = 10,
        
        /** Game controller D-pad up button. */
        JOY_BUTTON_DPAD_UP = 11,
        
        /** Game controller D-pad down button. */
        JOY_BUTTON_DPAD_DOWN = 12,
        
        /** Game controller D-pad left button. */
        JOY_BUTTON_DPAD_LEFT = 13,
        
        /** Game controller D-pad right button. */
        JOY_BUTTON_DPAD_RIGHT = 14,
        
        /** Game controller SDL miscellaneous button. Corresponds to Xbox share button, PS5 microphone button, Nintendo Switch capture button. */
        JOY_BUTTON_MISC1 = 15,
        
        /** Game controller SDL paddle 1 button. */
        JOY_BUTTON_PADDLE1 = 16,
        
        /** Game controller SDL paddle 2 button. */
        JOY_BUTTON_PADDLE2 = 17,
        
        /** Game controller SDL paddle 3 button. */
        JOY_BUTTON_PADDLE3 = 18,
        
        /** Game controller SDL paddle 4 button. */
        JOY_BUTTON_PADDLE4 = 19,
        
        /** Game controller SDL touchpad button. */
        JOY_BUTTON_TOUCHPAD = 20,
        
        /** The number of SDL game controller buttons. */
        JOY_BUTTON_SDL_MAX = 21,
        
        /** The maximum number of game controller buttons supported by the engine. The actual limit may be lower on specific platforms:  
         *  - **Android:** Up to 36 buttons.  
         *  - **Linux:** Up to 80 buttons.  
         *  - **Windows** and **macOS:** Up to 128 buttons.  
         */
        JOY_BUTTON_MAX = 128,
    }
    enum JoyAxis {
        /** An invalid game controller axis. */
        JOY_AXIS_INVALID = -1,
        
        /** Game controller left joystick x-axis. */
        JOY_AXIS_LEFT_X = 0,
        
        /** Game controller left joystick y-axis. */
        JOY_AXIS_LEFT_Y = 1,
        
        /** Game controller right joystick x-axis. */
        JOY_AXIS_RIGHT_X = 2,
        
        /** Game controller right joystick y-axis. */
        JOY_AXIS_RIGHT_Y = 3,
        
        /** Game controller left trigger axis. */
        JOY_AXIS_TRIGGER_LEFT = 4,
        
        /** Game controller right trigger axis. */
        JOY_AXIS_TRIGGER_RIGHT = 5,
        
        /** The number of SDL game controller axes. */
        JOY_AXIS_SDL_MAX = 6,
        
        /** The maximum number of game controller axes: OpenVR supports up to 5 Joysticks making a total of 10 axes. */
        JOY_AXIS_MAX = 10,
    }
    enum MIDIMessage {
        /** Does not correspond to any MIDI message. This is the default value of [member InputEventMIDI.message]. */
        MIDI_MESSAGE_NONE = 0,
        
        /** MIDI message sent when a note is released.  
         *      
         *  **Note:** Not all MIDI devices send this message; some may send [constant MIDI_MESSAGE_NOTE_ON] with [member InputEventMIDI.velocity] set to `0`.  
         */
        MIDI_MESSAGE_NOTE_OFF = 8,
        
        /** MIDI message sent when a note is pressed. */
        MIDI_MESSAGE_NOTE_ON = 9,
        
        /** MIDI message sent to indicate a change in pressure while a note is being pressed down, also called aftertouch. */
        MIDI_MESSAGE_AFTERTOUCH = 10,
        
        /** MIDI message sent when a controller value changes. In a MIDI device, a controller is any input that doesn't play notes. These may include sliders for volume, balance, and panning, as well as switches and pedals. See the [url=https://en.wikipedia.org/wiki/General_MIDI#Controller_events]General MIDI specification[/url] for a small list. */
        MIDI_MESSAGE_CONTROL_CHANGE = 11,
        
        /** MIDI message sent when the MIDI device changes its current instrument (also called  *program*  or  *preset* ). */
        MIDI_MESSAGE_PROGRAM_CHANGE = 12,
        
        /** MIDI message sent to indicate a change in pressure for the whole channel. Some MIDI devices may send this instead of [constant MIDI_MESSAGE_AFTERTOUCH]. */
        MIDI_MESSAGE_CHANNEL_PRESSURE = 13,
        
        /** MIDI message sent when the value of the pitch bender changes, usually a wheel on the MIDI device. */
        MIDI_MESSAGE_PITCH_BEND = 14,
        
        /** MIDI system exclusive (SysEx) message. This type of message is not standardized and it's highly dependent on the MIDI device sending it.  
         *      
         *  **Note:** Getting this message's data from [InputEventMIDI] is not implemented.  
         */
        MIDI_MESSAGE_SYSTEM_EXCLUSIVE = 240,
        
        /** MIDI message sent every quarter frame to keep connected MIDI devices synchronized. Related to [constant MIDI_MESSAGE_TIMING_CLOCK].  
         *      
         *  **Note:** Getting this message's data from [InputEventMIDI] is not implemented.  
         */
        MIDI_MESSAGE_QUARTER_FRAME = 241,
        
        /** MIDI message sent to jump onto a new position in the current sequence or song.  
         *      
         *  **Note:** Getting this message's data from [InputEventMIDI] is not implemented.  
         */
        MIDI_MESSAGE_SONG_POSITION_POINTER = 242,
        
        /** MIDI message sent to select a sequence or song to play.  
         *      
         *  **Note:** Getting this message's data from [InputEventMIDI] is not implemented.  
         */
        MIDI_MESSAGE_SONG_SELECT = 243,
        
        /** MIDI message sent to request a tuning calibration. Used on analog synthesizers. Most modern MIDI devices do not need this message. */
        MIDI_MESSAGE_TUNE_REQUEST = 246,
        
        /** MIDI message sent 24 times after [constant MIDI_MESSAGE_QUARTER_FRAME], to keep connected MIDI devices synchronized. */
        MIDI_MESSAGE_TIMING_CLOCK = 248,
        
        /** MIDI message sent to start the current sequence or song from the beginning. */
        MIDI_MESSAGE_START = 250,
        
        /** MIDI message sent to resume from the point the current sequence or song was paused. */
        MIDI_MESSAGE_CONTINUE = 251,
        
        /** MIDI message sent to pause the current sequence or song. */
        MIDI_MESSAGE_STOP = 252,
        
        /** MIDI message sent repeatedly while the MIDI device is idle, to tell the receiver that the connection is alive. Most MIDI devices do not send this message. */
        MIDI_MESSAGE_ACTIVE_SENSING = 254,
        
        /** MIDI message sent to reset a MIDI device to its default state, as if it was just turned on. It should not be sent when the MIDI device is being turned on. */
        MIDI_MESSAGE_SYSTEM_RESET = 255,
    }
    enum Error {
        /** Methods that return [enum Error] return [constant OK] when no error occurred.  
         *  Since [constant OK] has value 0, and all other error constants are positive integers, it can also be used in boolean checks.  
         *  **Example:**  
         *    
         *      
         *  **Note:** Many functions do not return an error code, but will print error messages to standard output.  
         */
        OK = 0,
        
        /** Generic error. */
        FAILED = 1,
        
        /** Unavailable error. */
        ERR_UNAVAILABLE = 2,
        
        /** Unconfigured error. */
        ERR_UNCONFIGURED = 3,
        
        /** Unauthorized error. */
        ERR_UNAUTHORIZED = 4,
        
        /** Parameter range error. */
        ERR_PARAMETER_RANGE_ERROR = 5,
        
        /** Out of memory (OOM) error. */
        ERR_OUT_OF_MEMORY = 6,
        
        /** File: Not found error. */
        ERR_FILE_NOT_FOUND = 7,
        
        /** File: Bad drive error. */
        ERR_FILE_BAD_DRIVE = 8,
        
        /** File: Bad path error. */
        ERR_FILE_BAD_PATH = 9,
        
        /** File: No permission error. */
        ERR_FILE_NO_PERMISSION = 10,
        
        /** File: Already in use error. */
        ERR_FILE_ALREADY_IN_USE = 11,
        
        /** File: Can't open error. */
        ERR_FILE_CANT_OPEN = 12,
        
        /** File: Can't write error. */
        ERR_FILE_CANT_WRITE = 13,
        
        /** File: Can't read error. */
        ERR_FILE_CANT_READ = 14,
        
        /** File: Unrecognized error. */
        ERR_FILE_UNRECOGNIZED = 15,
        
        /** File: Corrupt error. */
        ERR_FILE_CORRUPT = 16,
        
        /** File: Missing dependencies error. */
        ERR_FILE_MISSING_DEPENDENCIES = 17,
        
        /** File: End of file (EOF) error. */
        ERR_FILE_EOF = 18,
        
        /** Can't open error. */
        ERR_CANT_OPEN = 19,
        
        /** Can't create error. */
        ERR_CANT_CREATE = 20,
        
        /** Query failed error. */
        ERR_QUERY_FAILED = 21,
        
        /** Already in use error. */
        ERR_ALREADY_IN_USE = 22,
        
        /** Locked error. */
        ERR_LOCKED = 23,
        
        /** Timeout error. */
        ERR_TIMEOUT = 24,
        
        /** Can't connect error. */
        ERR_CANT_CONNECT = 25,
        
        /** Can't resolve error. */
        ERR_CANT_RESOLVE = 26,
        
        /** Connection error. */
        ERR_CONNECTION_ERROR = 27,
        
        /** Can't acquire resource error. */
        ERR_CANT_ACQUIRE_RESOURCE = 28,
        
        /** Can't fork process error. */
        ERR_CANT_FORK = 29,
        
        /** Invalid data error. */
        ERR_INVALID_DATA = 30,
        
        /** Invalid parameter error. */
        ERR_INVALID_PARAMETER = 31,
        
        /** Already exists error. */
        ERR_ALREADY_EXISTS = 32,
        
        /** Does not exist error. */
        ERR_DOES_NOT_EXIST = 33,
        
        /** Database: Read error. */
        ERR_DATABASE_CANT_READ = 34,
        
        /** Database: Write error. */
        ERR_DATABASE_CANT_WRITE = 35,
        
        /** Compilation failed error. */
        ERR_COMPILATION_FAILED = 36,
        
        /** Method not found error. */
        ERR_METHOD_NOT_FOUND = 37,
        
        /** Linking failed error. */
        ERR_LINK_FAILED = 38,
        
        /** Script failed error. */
        ERR_SCRIPT_FAILED = 39,
        
        /** Cycling link (import cycle) error. */
        ERR_CYCLIC_LINK = 40,
        
        /** Invalid declaration error. */
        ERR_INVALID_DECLARATION = 41,
        
        /** Duplicate symbol error. */
        ERR_DUPLICATE_SYMBOL = 42,
        
        /** Parse error. */
        ERR_PARSE_ERROR = 43,
        
        /** Busy error. */
        ERR_BUSY = 44,
        
        /** Skip error. */
        ERR_SKIP = 45,
        
        /** Help error. Used internally when passing `--version` or `--help` as executable options. */
        ERR_HELP = 46,
        
        /** Bug error, caused by an implementation issue in the method.  
         *      
         *  **Note:** If a built-in method returns this code, please open an issue on [url=https://github.com/godotengine/godot/issues]the GitHub Issue Tracker[/url].  
         */
        ERR_BUG = 47,
        
        /** Printer on fire error (This is an easter egg, no built-in methods return this error code). */
        ERR_PRINTER_ON_FIRE = 48,
    }
    enum PropertyHint {
        /** The property has no hint for the editor. */
        PROPERTY_HINT_NONE = 0,
        
        /** Hints that an [int] or [float] property should be within a range specified via the hint string `"min,max"` or `"min,max,step"`. The hint string can optionally include `"or_greater"` and/or `"or_less"` to allow manual input going respectively above the max or below the min values.  
         *  **Example:** `"-360,360,1,or_greater,or_less"`.  
         *  Additionally, other keywords can be included: `"exp"` for exponential range editing, `"radians_as_degrees"` for editing radian angles in degrees (the range values are also in degrees), `"degrees"` to hint at an angle and `"hide_slider"` to hide the slider.  
         */
        PROPERTY_HINT_RANGE = 1,
        
        /** Hints that an [int] or [String] property is an enumerated value to pick in a list specified via a hint string.  
         *  The hint string is a comma separated list of names such as `"Hello,Something,Else"`. Whitespaces are **not** removed from either end of a name. For integer properties, the first name in the list has value 0, the next 1, and so on. Explicit values can also be specified by appending `:integer` to the name, e.g. `"Zero,One,Three:3,Four,Six:6"`.  
         */
        PROPERTY_HINT_ENUM = 2,
        
        /** Hints that a [String] property can be an enumerated value to pick in a list specified via a hint string such as `"Hello,Something,Else"`.  
         *  Unlike [constant PROPERTY_HINT_ENUM], a property with this hint still accepts arbitrary values and can be empty. The list of values serves to suggest possible values.  
         */
        PROPERTY_HINT_ENUM_SUGGESTION = 3,
        
        /** Hints that a [float] property should be edited via an exponential easing function. The hint string can include `"attenuation"` to flip the curve horizontally and/or `"positive_only"` to exclude in/out easing and limit values to be greater than or equal to zero. */
        PROPERTY_HINT_EXP_EASING = 4,
        
        /** Hints that a vector property should allow its components to be linked. For example, this allows [member Vector2.x] and [member Vector2.y] to be edited together. */
        PROPERTY_HINT_LINK = 5,
        
        /** Hints that an [int] property is a bitmask with named bit flags.  
         *  The hint string is a comma separated list of names such as `"Bit0,Bit1,Bit2,Bit3"`. Whitespaces are **not** removed from either end of a name. The first name in the list has value 1, the next 2, then 4, 8, 16 and so on. Explicit values can also be specified by appending `:integer` to the name, e.g. `"A:4,B:8,C:16"`. You can also combine several flags (`"A:4,B:8,AB:12,C:16"`).  
         *      
         *  **Note:** A flag value must be at least `1` and at most `2 ** 32 - 1`.  
         *      
         *  **Note:** Unlike [constant PROPERTY_HINT_ENUM], the previous explicit value is not taken into account. For the hint `"A:16,B,C"`, A is 16, B is 2, C is 4.  
         */
        PROPERTY_HINT_FLAGS = 6,
        
        /** Hints that an [int] property is a bitmask using the optionally named 2D render layers. */
        PROPERTY_HINT_LAYERS_2D_RENDER = 7,
        
        /** Hints that an [int] property is a bitmask using the optionally named 2D physics layers. */
        PROPERTY_HINT_LAYERS_2D_PHYSICS = 8,
        
        /** Hints that an [int] property is a bitmask using the optionally named 2D navigation layers. */
        PROPERTY_HINT_LAYERS_2D_NAVIGATION = 9,
        
        /** Hints that an [int] property is a bitmask using the optionally named 3D render layers. */
        PROPERTY_HINT_LAYERS_3D_RENDER = 10,
        
        /** Hints that an [int] property is a bitmask using the optionally named 3D physics layers. */
        PROPERTY_HINT_LAYERS_3D_PHYSICS = 11,
        
        /** Hints that an [int] property is a bitmask using the optionally named 3D navigation layers. */
        PROPERTY_HINT_LAYERS_3D_NAVIGATION = 12,
        
        /** Hints that an integer property is a bitmask using the optionally named avoidance layers. */
        PROPERTY_HINT_LAYERS_AVOIDANCE = 37,
        
        /** Hints that a [String] property is a path to a file. Editing it will show a file dialog for picking the path. The hint string can be a set of filters with wildcards like `"*.png,*.jpg"`. */
        PROPERTY_HINT_FILE = 13,
        
        /** Hints that a [String] property is a path to a directory. Editing it will show a file dialog for picking the path. */
        PROPERTY_HINT_DIR = 14,
        
        /** Hints that a [String] property is an absolute path to a file outside the project folder. Editing it will show a file dialog for picking the path. The hint string can be a set of filters with wildcards, like `"*.png,*.jpg"`. */
        PROPERTY_HINT_GLOBAL_FILE = 15,
        
        /** Hints that a [String] property is an absolute path to a directory outside the project folder. Editing it will show a file dialog for picking the path. */
        PROPERTY_HINT_GLOBAL_DIR = 16,
        
        /** Hints that a property is an instance of a [Resource]-derived type, optionally specified via the hint string (e.g. `"Texture2D"`). Editing it will show a popup menu of valid resource types to instantiate. */
        PROPERTY_HINT_RESOURCE_TYPE = 17,
        
        /** Hints that a [String] property is text with line breaks. Editing it will show a text input field where line breaks can be typed. */
        PROPERTY_HINT_MULTILINE_TEXT = 18,
        
        /** Hints that a [String] property is an [Expression]. */
        PROPERTY_HINT_EXPRESSION = 19,
        
        /** Hints that a [String] property should show a placeholder text on its input field, if empty. The hint string is the placeholder text to use. */
        PROPERTY_HINT_PLACEHOLDER_TEXT = 20,
        
        /** Hints that a [Color] property should be edited without affecting its transparency ([member Color.a] is not editable). */
        PROPERTY_HINT_COLOR_NO_ALPHA = 21,
        
        /** Hints that the property's value is an object encoded as object ID, with its type specified in the hint string. Used by the debugger. */
        PROPERTY_HINT_OBJECT_ID = 22,
        
        /** If a property is [String], hints that the property represents a particular type (class). This allows to select a type from the create dialog. The property will store the selected type as a string.  
         *  If a property is [Array], hints the editor how to show elements. The `hint_string` must encode nested types using `":"` and `"/"`.  
         *    
         *  Examples:  
         *    
         *      
         *  **Note:** The trailing colon is required for properly detecting built-in types.  
         */
        PROPERTY_HINT_TYPE_STRING = 23,
        
        /**  *Deprecated.*  This hint is not used anywhere and will be removed in the future. */
        PROPERTY_HINT_NODE_PATH_TO_EDITED_NODE = 24,
        
        /** Hints that an object is too big to be sent via the debugger. */
        PROPERTY_HINT_OBJECT_TOO_BIG = 25,
        
        /** Hints that the hint string specifies valid node types for property of type [NodePath]. */
        PROPERTY_HINT_NODE_PATH_VALID_TYPES = 26,
        
        /** Hints that a [String] property is a path to a file. Editing it will show a file dialog for picking the path for the file to be saved at. The dialog has access to the project's directory. The hint string can be a set of filters with wildcards like `"*.png,*.jpg"`. See also [member FileDialog.filters]. */
        PROPERTY_HINT_SAVE_FILE = 27,
        
        /** Hints that a [String] property is a path to a file. Editing it will show a file dialog for picking the path for the file to be saved at. The dialog has access to the entire filesystem. The hint string can be a set of filters with wildcards like `"*.png,*.jpg"`. See also [member FileDialog.filters]. */
        PROPERTY_HINT_GLOBAL_SAVE_FILE = 28,
        
        /** Hints that an [int] property is an object ID.  
         *   *Deprecated.*  This hint is not used anywhere and will be removed in the future.  
         */
        PROPERTY_HINT_INT_IS_OBJECTID = 29,
        
        /** Hints that an [int] property is a pointer. Used by GDExtension. */
        PROPERTY_HINT_INT_IS_POINTER = 30,
        
        /** Hints that a property is an [Array] with the stored type specified in the hint string. */
        PROPERTY_HINT_ARRAY_TYPE = 31,
        
        /** Hints that a string property is a locale code. Editing it will show a locale dialog for picking language and country. */
        PROPERTY_HINT_LOCALE_ID = 32,
        
        /** Hints that a dictionary property is string translation map. Dictionary keys are locale codes and, values are translated strings. */
        PROPERTY_HINT_LOCALIZABLE_STRING = 33,
        
        /** Hints that a property is an instance of a [Node]-derived type, optionally specified via the hint string (e.g. `"Node2D"`). Editing it will show a dialog for picking a node from the scene. */
        PROPERTY_HINT_NODE_TYPE = 34,
        
        /** Hints that a quaternion property should disable the temporary euler editor. */
        PROPERTY_HINT_HIDE_QUATERNION_EDIT = 35,
        
        /** Hints that a string property is a password, and every character is replaced with the secret character. */
        PROPERTY_HINT_PASSWORD = 36,
        
        /** Represents the size of the [enum PropertyHint] enum. */
        PROPERTY_HINT_MAX = 38,
    }
    enum PropertyUsageFlags {
        /** The property is not stored, and does not display in the editor. This is the default for non-exported properties. */
        PROPERTY_USAGE_NONE = 0,
        
        /** The property is serialized and saved in the scene file (default). */
        PROPERTY_USAGE_STORAGE = 2,
        
        /** The property is shown in the [EditorInspector] (default). */
        PROPERTY_USAGE_EDITOR = 4,
        
        /** The property is excluded from the class reference. */
        PROPERTY_USAGE_INTERNAL = 8,
        
        /** The property can be checked in the [EditorInspector]. */
        PROPERTY_USAGE_CHECKABLE = 16,
        
        /** The property is checked in the [EditorInspector]. */
        PROPERTY_USAGE_CHECKED = 32,
        
        /** Used to group properties together in the editor. See [EditorInspector]. */
        PROPERTY_USAGE_GROUP = 64,
        
        /** Used to categorize properties together in the editor. */
        PROPERTY_USAGE_CATEGORY = 128,
        
        /** Used to group properties together in the editor in a subgroup (under a group). See [EditorInspector]. */
        PROPERTY_USAGE_SUBGROUP = 256,
        
        /** The property is a bitfield, i.e. it contains multiple flags represented as bits. */
        PROPERTY_USAGE_CLASS_IS_BITFIELD = 512,
        
        /** The property does not save its state in [PackedScene]. */
        PROPERTY_USAGE_NO_INSTANCE_STATE = 1024,
        
        /** Editing the property prompts the user for restarting the editor. */
        PROPERTY_USAGE_RESTART_IF_CHANGED = 2048,
        
        /** The property is a script variable which should be serialized and saved in the scene file. */
        PROPERTY_USAGE_SCRIPT_VARIABLE = 4096,
        
        /** The property value of type [Object] will be stored even if its value is `null`. */
        PROPERTY_USAGE_STORE_IF_NULL = 8192,
        
        /** If this property is modified, all inspector fields will be refreshed. */
        PROPERTY_USAGE_UPDATE_ALL_IF_MODIFIED = 16384,
        
        /** Signifies a default value from a placeholder script instance.  
         *   *Deprecated.*  This hint is not used anywhere and will be removed in the future.  
         */
        PROPERTY_USAGE_SCRIPT_DEFAULT_VALUE = 32768,
        
        /** The property is an enum, i.e. it only takes named integer constants from its associated enumeration. */
        PROPERTY_USAGE_CLASS_IS_ENUM = 65536,
        
        /** If property has `nil` as default value, its type will be [Variant]. */
        PROPERTY_USAGE_NIL_IS_VARIANT = 131072,
        
        /** The property is an array. */
        PROPERTY_USAGE_ARRAY = 262144,
        
        /** When duplicating a resource with [method Resource.duplicate], and this flag is set on a property of that resource, the property should always be duplicated, regardless of the `subresources` bool parameter. */
        PROPERTY_USAGE_ALWAYS_DUPLICATE = 524288,
        
        /** When duplicating a resource with [method Resource.duplicate], and this flag is set on a property of that resource, the property should never be duplicated, regardless of the `subresources` bool parameter. */
        PROPERTY_USAGE_NEVER_DUPLICATE = 1048576,
        
        /** The property is only shown in the editor if modern renderers are supported (the Compatibility rendering method is excluded). */
        PROPERTY_USAGE_HIGH_END_GFX = 2097152,
        
        /** The [NodePath] property will always be relative to the scene's root. Mostly useful for local resources. */
        PROPERTY_USAGE_NODE_PATH_FROM_SCENE_ROOT = 4194304,
        
        /** Use when a resource is created on the fly, i.e. the getter will always return a different instance. [ResourceSaver] needs this information to properly save such resources. */
        PROPERTY_USAGE_RESOURCE_NOT_PERSISTENT = 8388608,
        
        /** Inserting an animation key frame of this property will automatically increment the value, allowing to easily keyframe multiple values in a row. */
        PROPERTY_USAGE_KEYING_INCREMENTS = 16777216,
        
        /** When loading, the resource for this property can be set at the end of loading.  
         *   *Deprecated.*  This hint is not used anywhere and will be removed in the future.  
         */
        PROPERTY_USAGE_DEFERRED_SET_RESOURCE = 33554432,
        
        /** When this property is a [Resource] and base object is a [Node], a resource instance will be automatically created whenever the node is created in the editor. */
        PROPERTY_USAGE_EDITOR_INSTANTIATE_OBJECT = 67108864,
        
        /** The property is considered a basic setting and will appear even when advanced mode is disabled. Used for project settings. */
        PROPERTY_USAGE_EDITOR_BASIC_SETTING = 134217728,
        
        /** The property is read-only in the [EditorInspector]. */
        PROPERTY_USAGE_READ_ONLY = 268435456,
        
        /** An export preset property with this flag contains confidential information and is stored separately from the rest of the export preset configuration. */
        PROPERTY_USAGE_SECRET = 536870912,
        
        /** Default usage (storage and editor). */
        PROPERTY_USAGE_DEFAULT = 6,
        
        /** Default usage but without showing the property in the editor (storage). */
        PROPERTY_USAGE_NO_EDITOR = 2,
    }
    enum MethodFlags {
        /** Flag for a normal method. */
        METHOD_FLAG_NORMAL = 1,
        
        /** Flag for an editor method. */
        METHOD_FLAG_EDITOR = 2,
        
        /** Flag for a constant method. */
        METHOD_FLAG_CONST = 4,
        
        /** Flag for a virtual method. */
        METHOD_FLAG_VIRTUAL = 8,
        
        /** Flag for a method with a variable number of arguments. */
        METHOD_FLAG_VARARG = 16,
        
        /** Flag for a static method. */
        METHOD_FLAG_STATIC = 32,
        
        /** Used internally. Allows to not dump core virtual methods (such as [method Object._notification]) to the JSON API. */
        METHOD_FLAG_OBJECT_CORE = 64,
        
        /** Default method flags (normal). */
        METHOD_FLAGS_DEFAULT = 1,
    }
    namespace Variant {
        enum Type {
            /** Variable is `null`. */
            TYPE_NIL = 0,
            
            /** Variable is of type [bool]. */
            TYPE_BOOL = 1,
            
            /** Variable is of type [int]. */
            TYPE_INT = 2,
            
            /** Variable is of type [float]. */
            TYPE_FLOAT = 3,
            
            /** Variable is of type [String]. */
            TYPE_STRING = 4,
            
            /** Variable is of type [Vector2]. */
            TYPE_VECTOR2 = 5,
            
            /** Variable is of type [Vector2i]. */
            TYPE_VECTOR2I = 6,
            
            /** Variable is of type [Rect2]. */
            TYPE_RECT2 = 7,
            
            /** Variable is of type [Rect2i]. */
            TYPE_RECT2I = 8,
            
            /** Variable is of type [Vector3]. */
            TYPE_VECTOR3 = 9,
            
            /** Variable is of type [Vector3i]. */
            TYPE_VECTOR3I = 10,
            
            /** Variable is of type [Transform2D]. */
            TYPE_TRANSFORM2D = 11,
            
            /** Variable is of type [Vector4]. */
            TYPE_VECTOR4 = 12,
            
            /** Variable is of type [Vector4i]. */
            TYPE_VECTOR4I = 13,
            
            /** Variable is of type [Plane]. */
            TYPE_PLANE = 14,
            
            /** Variable is of type [Quaternion]. */
            TYPE_QUATERNION = 15,
            
            /** Variable is of type [AABB]. */
            TYPE_AABB = 16,
            
            /** Variable is of type [Basis]. */
            TYPE_BASIS = 17,
            
            /** Variable is of type [Transform3D]. */
            TYPE_TRANSFORM3D = 18,
            
            /** Variable is of type [Projection]. */
            TYPE_PROJECTION = 19,
            
            /** Variable is of type [Color]. */
            TYPE_COLOR = 20,
            
            /** Variable is of type [StringName]. */
            TYPE_STRING_NAME = 21,
            
            /** Variable is of type [NodePath]. */
            TYPE_NODE_PATH = 22,
            
            /** Variable is of type [RID]. */
            TYPE_RID = 23,
            
            /** Variable is of type [Object]. */
            TYPE_OBJECT = 24,
            
            /** Variable is of type [Callable]. */
            TYPE_CALLABLE = 25,
            
            /** Variable is of type [Signal]. */
            TYPE_SIGNAL = 26,
            
            /** Variable is of type [Dictionary]. */
            TYPE_DICTIONARY = 27,
            
            /** Variable is of type [Array]. */
            TYPE_ARRAY = 28,
            
            /** Variable is of type [PackedByteArray]. */
            TYPE_PACKED_BYTE_ARRAY = 29,
            
            /** Variable is of type [PackedInt32Array]. */
            TYPE_PACKED_INT32_ARRAY = 30,
            
            /** Variable is of type [PackedInt64Array]. */
            TYPE_PACKED_INT64_ARRAY = 31,
            
            /** Variable is of type [PackedFloat32Array]. */
            TYPE_PACKED_FLOAT32_ARRAY = 32,
            
            /** Variable is of type [PackedFloat64Array]. */
            TYPE_PACKED_FLOAT64_ARRAY = 33,
            
            /** Variable is of type [PackedStringArray]. */
            TYPE_PACKED_STRING_ARRAY = 34,
            
            /** Variable is of type [PackedVector2Array]. */
            TYPE_PACKED_VECTOR2_ARRAY = 35,
            
            /** Variable is of type [PackedVector3Array]. */
            TYPE_PACKED_VECTOR3_ARRAY = 36,
            
            /** Variable is of type [PackedColorArray]. */
            TYPE_PACKED_COLOR_ARRAY = 37,
            
            /** Represents the size of the [enum Variant.Type] enum. */
            TYPE_MAX = 38,
        }
    }
    namespace Variant {
        enum Operator {
            /** Equality operator (`==`). */
            OP_EQUAL = 0,
            
            /** Inequality operator (`!=`). */
            OP_NOT_EQUAL = 1,
            
            /** Less than operator (`<`). */
            OP_LESS = 2,
            
            /** Less than or equal operator (`<=`). */
            OP_LESS_EQUAL = 3,
            
            /** Greater than operator (`>`). */
            OP_GREATER = 4,
            
            /** Greater than or equal operator (`>=`). */
            OP_GREATER_EQUAL = 5,
            
            /** Addition operator (`+`). */
            OP_ADD = 6,
            
            /** Subtraction operator (`-`). */
            OP_SUBTRACT = 7,
            
            /** Multiplication operator (`*`). */
            OP_MULTIPLY = 8,
            
            /** Division operator (`/`). */
            OP_DIVIDE = 9,
            
            /** Unary negation operator (`-`). */
            OP_NEGATE = 10,
            
            /** Unary plus operator (`+`). */
            OP_POSITIVE = 11,
            
            /** Remainder/modulo operator (`%`). */
            OP_MODULE = 12,
            
            /** Power operator (`**`). */
            OP_POWER = 13,
            
            /** Left shift operator (`<<`). */
            OP_SHIFT_LEFT = 14,
            
            /** Right shift operator (`>>`). */
            OP_SHIFT_RIGHT = 15,
            
            /** Bitwise AND operator (`&`). */
            OP_BIT_AND = 16,
            
            /** Bitwise OR operator (`|`). */
            OP_BIT_OR = 17,
            
            /** Bitwise XOR operator (`^`). */
            OP_BIT_XOR = 18,
            
            /** Bitwise NOT operator (`~`). */
            OP_BIT_NEGATE = 19,
            
            /** Logical AND operator (`and` or `&&`). */
            OP_AND = 20,
            
            /** Logical OR operator (`or` or `||`). */
            OP_OR = 21,
            
            /** Logical XOR operator (not implemented in GDScript). */
            OP_XOR = 22,
            
            /** Logical NOT operator (`not` or `!`). */
            OP_NOT = 23,
            
            /** Logical IN operator (`in`). */
            OP_IN = 24,
            
            /** Represents the size of the [enum Variant.Operator] enum. */
            OP_MAX = 25,
        }
    }
    /** Returns the sine of angle [param angle_rad] in radians.  
     *    
     */
    static function sin(angle_rad: float64): float64
    
    /** Returns the cosine of angle [param angle_rad] in radians.  
     *    
     */
    static function cos(angle_rad: float64): float64
    
    /** Returns the tangent of angle [param angle_rad] in radians.  
     *    
     */
    static function tan(angle_rad: float64): float64
    
    /** Returns the hyperbolic sine of [param x].  
     *    
     */
    static function sinh(x: float64): float64
    
    /** Returns the hyperbolic cosine of [param x] in radians.  
     *    
     */
    static function cosh(x: float64): float64
    
    /** Returns the hyperbolic tangent of [param x].  
     *    
     */
    static function tanh(x: float64): float64
    
    /** Returns the arc sine of [param x] in radians. Use to get the angle of sine [param x]. [param x] will be clamped between `-1.0` and `1.0` (inclusive), in order to prevent [method asin] from returning [constant @GDScript.NAN].  
     *    
     */
    static function asin(x: float64): float64
    
    /** Returns the arc cosine of [param x] in radians. Use to get the angle of cosine [param x]. [param x] will be clamped between `-1.0` and `1.0` (inclusive), in order to prevent [method acos] from returning [constant @GDScript.NAN].  
     *    
     */
    static function acos(x: float64): float64
    
    /** Returns the arc tangent of [param x] in radians. Use it to get the angle from an angle's tangent in trigonometry.  
     *  The method cannot know in which quadrant the angle should fall. See [method atan2] if you have both `y` and [code skip-lint]x`.  
     *    
     *  If [param x] is between `-PI / 2` and `PI / 2` (inclusive), `atan(tan(x))` is equal to [param x].  
     */
    static function atan(x: float64): float64
    
    /** Returns the arc tangent of `y/x` in radians. Use to get the angle of tangent `y/x`. To compute the value, the method takes into account the sign of both arguments in order to determine the quadrant.  
     *  Important note: The Y coordinate comes first, by convention.  
     *    
     */
    static function atan2(y: float64, x: float64): float64
    
    /** Returns the hyperbolic arc (also called inverse) sine of [param x], returning a value in radians. Use it to get the angle from an angle's sine in hyperbolic space.  
     *    
     */
    static function asinh(x: float64): float64
    
    /** Returns the hyperbolic arc (also called inverse) cosine of [param x], returning a value in radians. Use it to get the angle from an angle's cosine in hyperbolic space if [param x] is larger or equal to 1. For values of [param x] lower than 1, it will return 0, in order to prevent [method acosh] from returning [constant @GDScript.NAN].  
     *    
     */
    static function acosh(x: float64): float64
    
    /** Returns the hyperbolic arc (also called inverse) tangent of [param x], returning a value in radians. Use it to get the angle from an angle's tangent in hyperbolic space if [param x] is between -1 and 1 (non-inclusive).  
     *  In mathematics, the inverse hyperbolic tangent is only defined for -1 < [param x] < 1 in the real set, so values equal or lower to -1 for [param x] return negative [constant @GDScript.INF] and values equal or higher than 1 return positive [constant @GDScript.INF] in order to prevent [method atanh] from returning [constant @GDScript.NAN].  
     *    
     */
    static function atanh(x: float64): float64
    
    /** Returns the square root of [param x], where [param x] is a non-negative number.  
     *    
     *      
     *  **Note:** Negative values of [param x] return NaN ("Not a Number"). in C#, if you need negative inputs, use `System.Numerics.Complex`.  
     */
    static function sqrt(x: float64): float64
    
    /** Returns the floating-point remainder of [param x] divided by [param y], keeping the sign of [param x].  
     *    
     *  For the integer remainder operation, use the `%` operator.  
     */
    static function fmod(x: float64, y: float64): float64
    
    /** Returns the floating-point modulus of [param x] divided by [param y], wrapping equally in positive and negative.  
     *    
     *  Produces:  
     *    
     */
    static function fposmod(x: float64, y: float64): float64
    
    /** Returns the integer modulus of [param x] divided by [param y] that wraps equally in positive and negative.  
     *    
     *  Produces:  
     *    
     */
    static function posmod(x: int64, y: int64): int64
    
    /** Rounds [param x] downward (towards negative infinity), returning the largest whole number that is not more than [param x]. Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *  See also [method ceil], [method round], and [method snapped].  
     *      
     *  **Note:** For better type safety, use [method floorf], [method floori], [method Vector2.floor], [method Vector3.floor], or [method Vector4.floor].  
     */
    static function floor(x: any): void
    
    /** Rounds [param x] downward (towards negative infinity), returning the largest whole number that is not more than [param x].  
     *  A type-safe version of [method floor], returning a [float].  
     */
    static function floorf(x: float64): float64
    
    /** Rounds [param x] downward (towards negative infinity), returning the largest whole number that is not more than [param x].  
     *  A type-safe version of [method floor], returning an [int].  
     *      
     *  **Note:** This function is  *not*  the same as `int(x)`, which rounds towards 0.  
     */
    static function floori(x: float64): int64
    
    /** Rounds [param x] upward (towards positive infinity), returning the smallest whole number that is not less than [param x]. Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *  See also [method floor], [method round], and [method snapped].  
     *      
     *  **Note:** For better type safety, use [method ceilf], [method ceili], [method Vector2.ceil], [method Vector3.ceil], or [method Vector4.ceil].  
     */
    static function ceil(x: any): void
    
    /** Rounds [param x] upward (towards positive infinity), returning the smallest whole number that is not less than [param x].  
     *  A type-safe version of [method ceil], returning a [float].  
     */
    static function ceilf(x: float64): float64
    
    /** Rounds [param x] upward (towards positive infinity), returning the smallest whole number that is not less than [param x].  
     *  A type-safe version of [method ceil], returning an [int].  
     */
    static function ceili(x: float64): int64
    
    /** Rounds [param x] to the nearest whole number, with halfway cases rounded away from 0. Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *  See also [method floor], [method ceil], and [method snapped].  
     *      
     *  **Note:** For better type safety, use [method roundf], [method roundi], [method Vector2.round], [method Vector3.round], or [method Vector4.round].  
     */
    static function round(x: any): void
    
    /** Rounds [param x] to the nearest whole number, with halfway cases rounded away from 0.  
     *  A type-safe version of [method round], returning a [float].  
     */
    static function roundf(x: float64): float64
    
    /** Rounds [param x] to the nearest whole number, with halfway cases rounded away from 0.  
     *  A type-safe version of [method round], returning an [int].  
     */
    static function roundi(x: float64): int64
    
    /** Returns the absolute value of a [Variant] parameter [param x] (i.e. non-negative value). Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *      
     *  **Note:** For better type safety, use [method absf], [method absi], [method Vector2.abs], [method Vector2i.abs], [method Vector3.abs], [method Vector3i.abs], [method Vector4.abs], or [method Vector4i.abs].  
     */
    static function abs(x: any): void
    
    /** Returns the absolute value of float parameter [param x] (i.e. positive value).  
     *    
     */
    static function absf(x: float64): float64
    
    /** Returns the absolute value of int parameter [param x] (i.e. positive value).  
     *    
     */
    static function absi(x: int64): int64
    
    /** Returns the same type of [Variant] as [param x], with `-1` for negative values, `1` for positive values, and `0` for zeros. For `nan` values it returns 0.  
     *  Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *      
     *  **Note:** For better type safety, use [method signf], [method signi], [method Vector2.sign], [method Vector2i.sign], [method Vector3.sign], [method Vector3i.sign], [method Vector4.sign], or [method Vector4i.sign].  
     */
    static function sign(x: any): void
    
    /** Returns `-1.0` if [param x] is negative, `1.0` if [param x] is positive, and `0.0` if [param x] is zero. For `nan` values of [param x] it returns 0.0.  
     *    
     */
    static function signf(x: float64): float64
    
    /** Returns `-1` if [param x] is negative, `1` if [param x] is positive, and `0` if if [param x] is zero.  
     *    
     */
    static function signi(x: int64): int64
    
    /** Returns the multiple of [param step] that is the closest to [param x]. This can also be used to round a floating point number to an arbitrary number of decimals.  
     *  The returned value is the same type of [Variant] as [param step]. Supported types: [int], [float], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i].  
     *    
     *  See also [method ceil], [method floor], and [method round].  
     *      
     *  **Note:** For better type safety, use [method snappedf], [method snappedi], [method Vector2.snapped], [method Vector2i.snapped], [method Vector3.snapped], [method Vector3i.snapped], [method Vector4.snapped], or [method Vector4i.snapped].  
     */
    static function snapped(x: any, step: any): void
    
    /** Returns the multiple of [param step] that is the closest to [param x]. This can also be used to round a floating point number to an arbitrary number of decimals.  
     *  A type-safe version of [method snapped], returning a [float].  
     *    
     */
    static function snappedf(x: float64, step: float64): float64
    
    /** Returns the multiple of [param step] that is the closest to [param x].  
     *  A type-safe version of [method snapped], returning an [int].  
     *    
     */
    static function snappedi(x: float64, step: int64): int64
    
    /** Returns the result of [param base] raised to the power of [param exp].  
     *  In GDScript, this is the equivalent of the `**` operator.  
     *    
     */
    static function pow(base: float64, exp: float64): float64
    
    /** Returns the [url=https://en.wikipedia.org/wiki/Natural_logarithm]natural logarithm[/url] of [param x] (base [url=https://en.wikipedia.org/wiki/E_(mathematical_constant)] *e* [/url], with  *e*  being approximately 2.71828). This is the amount of time needed to reach a certain level of continuous growth.  
     *      
     *  **Note:** This is not the same as the "log" function on most calculators, which uses a base 10 logarithm. To use base 10 logarithm, use `log(x) / log(10)`.  
     *    
     *      
     *  **Note:** The logarithm of `0` returns `-inf`, while negative values return `-nan`.  
     */
    static function log(x: float64): float64
    
    /** The natural exponential function. It raises the mathematical constant  *e*  to the power of [param x] and returns it.  
     *   *e*  has an approximate value of 2.71828, and can be obtained with `exp(1)`.  
     *  For exponents to other bases use the method [method pow].  
     *    
     */
    static function exp(x: float64): float64
    
    /** Returns `true` if [param x] is a NaN ("Not a Number" or invalid) value. */
    static function is_nan(x: float64): boolean
    
    /** Returns `true` if [param x] is either positive infinity or negative infinity. */
    static function is_inf(x: float64): boolean
    
    /** Returns `true` if [param a] and [param b] are approximately equal to each other.  
     *  Here, "approximately equal" means that [param a] and [param b] are within a small internal epsilon of each other, which scales with the magnitude of the numbers.  
     *  Infinity values of the same sign are considered equal.  
     */
    static function is_equal_approx(a: float64, b: float64): boolean
    
    /** Returns `true` if [param x] is zero or almost zero. The comparison is done using a tolerance calculation with a small internal epsilon.  
     *  This function is faster than using [method is_equal_approx] with one value as zero.  
     */
    static function is_zero_approx(x: float64): boolean
    
    /** Returns whether [param x] is a finite value, i.e. it is not [constant @GDScript.NAN], positive infinity, or negative infinity. */
    static function is_finite(x: float64): boolean
    
    /** Returns an "eased" value of [param x] based on an easing function defined with [param curve]. This easing function is based on an exponent. The [param curve] can be any floating-point number, with specific values leading to the following behaviors:  
     *    
     *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/4.1/img/ease_cheatsheet.png]ease() curve values cheatsheet[/url]  
     *  See also [method smoothstep]. If you need to perform more advanced transitions, use [method Tween.interpolate_value].  
     */
    static function ease(x: float64, curve: float64): float64
    
    /** Returns the position of the first non-zero digit, after the decimal point. Note that the maximum return value is 10, which is a design decision in the implementation.  
     *    
     */
    static function step_decimals(x: float64): int64
    
    /** Linearly interpolates between two values by the factor defined in [param weight]. To perform interpolation, [param weight] should be between `0.0` and `1.0` (inclusive). However, values outside this range are allowed and can be used to perform  *extrapolation* . If this is not desired, use [method clamp] on the result of this function.  
     *  Both [param from] and [param to] must be the same type. Supported types: [int], [float], [Vector2], [Vector3], [Vector4], [Color], [Quaternion], [Basis].  
     *    
     *  See also [method inverse_lerp] which performs the reverse of this operation. To perform eased interpolation with [method lerp], combine it with [method ease] or [method smoothstep]. See also [method remap] to map a continuous series of values to another.  
     *      
     *  **Note:** For better type safety, use [method lerpf], [method Vector2.lerp], [method Vector3.lerp], [method Vector4.lerp], [method Color.lerp], [method Quaternion.slerp] or [method Basis.slerp].  
     */
    static function lerp(from: any, to: any, weight: any): void
    
    /** Linearly interpolates between two values by the factor defined in [param weight]. To perform interpolation, [param weight] should be between `0.0` and `1.0` (inclusive). However, values outside this range are allowed and can be used to perform  *extrapolation* . If this is not desired, use [method clampf] on the result of this function.  
     *    
     *  See also [method inverse_lerp] which performs the reverse of this operation. To perform eased interpolation with [method lerp], combine it with [method ease] or [method smoothstep].  
     */
    static function lerpf(from: float64, to: float64, weight: float64): float64
    
    /** Cubic interpolates between two values by the factor defined in [param weight] with [param pre] and [param post] values. */
    static function cubic_interpolate(from: float64, to: float64, pre: float64, post: float64, weight: float64): float64
    
    /** Cubic interpolates between two rotation values with shortest path by the factor defined in [param weight] with [param pre] and [param post] values. See also [method lerp_angle]. */
    static function cubic_interpolate_angle(from: float64, to: float64, pre: float64, post: float64, weight: float64): float64
    
    /** Cubic interpolates between two values by the factor defined in [param weight] with [param pre] and [param post] values.  
     *  It can perform smoother interpolation than [method cubic_interpolate] by the time values.  
     */
    static function cubic_interpolate_in_time(from: float64, to: float64, pre: float64, post: float64, weight: float64, to_t: float64, pre_t: float64, post_t: float64): float64
    
    /** Cubic interpolates between two rotation values with shortest path by the factor defined in [param weight] with [param pre] and [param post] values. See also [method lerp_angle].  
     *  It can perform smoother interpolation than [method cubic_interpolate] by the time values.  
     */
    static function cubic_interpolate_angle_in_time(from: float64, to: float64, pre: float64, post: float64, weight: float64, to_t: float64, pre_t: float64, post_t: float64): float64
    
    /** Returns the point at the given [param t] on a one-dimensional [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by the given [param control_1], [param control_2], and [param end] points. */
    static function bezier_interpolate(start: float64, control_1: float64, control_2: float64, end: float64, t: float64): float64
    
    /** Returns the derivative at the given [param t] on a one-dimensional [url=https://en.wikipedia.org/wiki/B%C3%A9zier_curve]Bézier curve[/url] defined by the given [param control_1], [param control_2], and [param end] points. */
    static function bezier_derivative(start: float64, control_1: float64, control_2: float64, end: float64, t: float64): float64
    
    /** Returns the difference between the two angles, in the range of `[-PI, +PI]`. When [param from] and [param to] are opposite, returns `-PI` if [param from] is smaller than [param to], or `PI` otherwise. */
    static function angle_difference(from: float64, to: float64): float64
    
    /** Linearly interpolates between two angles (in radians) by a [param weight] value between 0.0 and 1.0.  
     *  Similar to [method lerp], but interpolates correctly when the angles wrap around [constant @GDScript.TAU]. To perform eased interpolation with [method lerp_angle], combine it with [method ease] or [method smoothstep].  
     *    
     *      
     *  **Note:** This function lerps through the shortest path between [param from] and [param to]. However, when these two angles are approximately `PI + k * TAU` apart for any integer `k`, it's not obvious which way they lerp due to floating-point precision errors. For example, `lerp_angle(0, PI, weight)` lerps counter-clockwise, while `lerp_angle(0, PI + 5 * TAU, weight)` lerps clockwise.  
     */
    static function lerp_angle(from: float64, to: float64, weight: float64): float64
    
    /** Returns an interpolation or extrapolation factor considering the range specified in [param from] and [param to], and the interpolated value specified in [param weight]. The returned value will be between `0.0` and `1.0` if [param weight] is between [param from] and [param to] (inclusive). If [param weight] is located outside this range, then an extrapolation factor will be returned (return value lower than `0.0` or greater than `1.0`). Use [method clamp] on the result of [method inverse_lerp] if this is not desired.  
     *    
     *  See also [method lerp], which performs the reverse of this operation, and [method remap] to map a continuous series of values to another.  
     */
    static function inverse_lerp(from: float64, to: float64, weight: float64): float64
    
    /** Maps a [param value] from range `[istart, istop]` to `[ostart, ostop]`. See also [method lerp] and [method inverse_lerp]. If [param value] is outside `[istart, istop]`, then the resulting value will also be outside `[ostart, ostop]`. If this is not desired, use [method clamp] on the result of this function.  
     *    
     *  For complex use cases where multiple ranges are needed, consider using [Curve] or [Gradient] instead.  
     */
    static function remap(value: float64, istart: float64, istop: float64, ostart: float64, ostop: float64): float64
    
    /** Returns the result of smoothly interpolating the value of [param x] between `0` and `1`, based on the where [param x] lies with respect to the edges [param from] and [param to].  
     *  The return value is `0` if `x <= from`, and `1` if `x >= to`. If [param x] lies between [param from] and [param to], the returned value follows an S-shaped curve that maps [param x] between `0` and `1`.  
     *  This S-shaped curve is the cubic Hermite interpolator, given by `f(y) = 3*y^2 - 2*y^3` where `y = (x-from) / (to-from)`.  
     *    
     *  Compared to [method ease] with a curve value of `-1.6521`, [method smoothstep] returns the smoothest possible curve with no sudden changes in the derivative. If you need to perform more advanced transitions, use [Tween] or [AnimationPlayer].  
     *  [url=https://raw.githubusercontent.com/godotengine/godot-docs/4.1/img/smoothstep_ease_comparison.png]Comparison between smoothstep() and ease(x, -1.6521) return values[/url]  
     */
    static function smoothstep(from: float64, to: float64, x: float64): float64
    
    /** Moves [param from] toward [param to] by the [param delta] amount. Will not go past [param to].  
     *  Use a negative [param delta] value to move away.  
     *    
     */
    static function move_toward(from: float64, to: float64, delta: float64): float64
    
    /** Rotates [param from] toward [param to] by the [param delta] amount. Will not go past [param to].  
     *  Similar to [method move_toward], but interpolates correctly when the angles wrap around [constant @GDScript.TAU].  
     *  If [param delta] is negative, this function will rotate away from [param to], toward the opposite angle, and will not go past the opposite angle.  
     */
    static function rotate_toward(from: float64, to: float64, delta: float64): float64
    
    /** Converts an angle expressed in degrees to radians.  
     *    
     */
    static function deg_to_rad(deg: float64): float64
    
    /** Converts an angle expressed in radians to degrees.  
     *    
     */
    static function rad_to_deg(rad: float64): float64
    
    /** Converts from linear energy to decibels (audio). This can be used to implement volume sliders that behave as expected (since volume isn't linear).  
     *  **Example:**  
     *    
     */
    static function linear_to_db(lin: float64): float64
    
    /** Converts from decibels to linear energy (audio). */
    static function db_to_linear(db: float64): float64
    
    /** Wraps the [Variant] [param value] between [param min] and [param max]. Can be used for creating loop-alike behavior or infinite surfaces.  
     *  Variant types [int] and [float] are supported. If any of the arguments is [float] this function returns a [float], otherwise it returns an [int].  
     *    
     */
    static function wrap(value: any, min: any, max: any): void
    
    /** Wraps the integer [param value] between [param min] and [param max]. Can be used for creating loop-alike behavior or infinite surfaces.  
     *    
     *    
     */
    static function wrapi(value: int64, min: int64, max: int64): int64
    
    /** Wraps the float [param value] between [param min] and [param max]. Can be used for creating loop-alike behavior or infinite surfaces.  
     *    
     *    
     *    
     *      
     *  **Note:** If [param min] is `0`, this is equivalent to [method fposmod], so prefer using that instead.  
     *  [method wrapf] is more flexible than using the [method fposmod] approach by giving the user control over the minimum value.  
     */
    static function wrapf(value: float64, min: float64, max: float64): float64
    
    /** Returns the maximum of the given numeric values. This function can take any number of arguments.  
     *    
     */
    static function max(...vargargs: any[]): void
    
    /** Returns the maximum of two [int] values.  
     *    
     */
    static function maxi(a: int64, b: int64): int64
    
    /** Returns the maximum of two [float] values.  
     *    
     */
    static function maxf(a: float64, b: float64): float64
    
    /** Returns the minimum of the given numeric values. This function can take any number of arguments.  
     *    
     */
    static function min(...vargargs: any[]): void
    
    /** Returns the minimum of two [int] values.  
     *    
     */
    static function mini(a: int64, b: int64): int64
    
    /** Returns the minimum of two [float] values.  
     *    
     */
    static function minf(a: float64, b: float64): float64
    
    /** Clamps the [param value], returning a [Variant] not less than [param min] and not more than [param max]. Any values that can be compared with the less than and greater than operators will work.  
     *    
     *      
     *  **Note:** For better type safety, use [method clampf], [method clampi], [method Vector2.clamp], [method Vector2i.clamp], [method Vector3.clamp], [method Vector3i.clamp], [method Vector4.clamp], [method Vector4i.clamp], or [method Color.clamp] (not currently supported by this method).  
     *      
     *  **Note:** When using this on vectors it will  *not*  perform component-wise clamping, and will pick [param min] if `value < min` or [param max] if `value > max`. To perform component-wise clamping use the methods listed above.  
     */
    static function clamp(value: any, min: any, max: any): void
    
    /** Clamps the [param value], returning an [int] not less than [param min] and not more than [param max].  
     *    
     */
    static function clampi(value: int64, min: int64, max: int64): int64
    
    /** Clamps the [param value], returning a [float] not less than [param min] and not more than [param max].  
     *    
     */
    static function clampf(value: float64, min: float64, max: float64): float64
    
    /** Returns the smallest integer power of 2 that is greater than or equal to [param value].  
     *    
     *  **Warning:** Due to its implementation, this method returns `0` rather than `1` for values less than or equal to `0`, with an exception for [param value] being the smallest negative 64-bit integer (`-9223372036854775808`) in which case the [param value] is returned unchanged.  
     */
    static function nearest_po2(value: int64): int64
    
    /** Wraps [param value] between `0` and the [param length]. If the limit is reached, the next value the function returns is decreased to the `0` side or increased to the [param length] side (like a triangle wave). If [param length] is less than zero, it becomes positive.  
     *    
     */
    static function pingpong(value: float64, length: float64): float64
    
    /** Randomizes the seed (or the internal state) of the random number generator. The current implementation uses a number based on the device's time.  
     *      
     *  **Note:** This function is called automatically when the project is run. If you need to fix the seed to have consistent, reproducible results, use [method seed] to initialize the random number generator.  
     */
    static function randomize(): void
    
    /** Returns a random unsigned 32-bit integer. Use remainder to obtain a random value in the interval `[0, N - 1]` (where N is smaller than 2^32).  
     *    
     */
    static function randi(): int64
    
    /** Returns a random floating point value between `0.0` and `1.0` (inclusive).  
     *    
     */
    static function randf(): float64
    
    /** Returns a random signed 32-bit integer between [param from] and [param to] (inclusive). If [param to] is lesser than [param from], they are swapped.  
     *    
     */
    static function randi_range(from: int64, to: int64): int64
    
    /** Returns a random floating point value between [param from] and [param to] (inclusive).  
     *    
     */
    static function randf_range(from: float64, to: float64): float64
    
    /** Returns a normally-distributed pseudo-random floating point value using Box-Muller transform with the specified [param mean] and a standard [param deviation]. This is also called Gaussian distribution. */
    static function randfn(mean: float64, deviation: float64): float64
    
    /** Sets the seed for the random number generator to [param base]. Setting the seed manually can ensure consistent, repeatable results for most random functions.  
     *    
     */
    static function seed(base: int64): void
    
    /** Given a [param seed], returns a [PackedInt64Array] of size `2`, where its first element is the randomized [int] value, and the second element is the same as [param seed]. Passing the same [param seed] consistently returns the same array.  
     *      
     *  **Note:** "Seed" here refers to the internal state of the pseudo random number generator, currently implemented as a 64 bit integer.  
     *    
     */
    static function rand_from_seed(seed: int64): PackedInt64Array
    
    /** Returns a [WeakRef] instance holding a weak reference to [param obj]. Returns an empty [WeakRef] instance if [param obj] is `null`. Prints an error and returns `null` if [param obj] is neither [Object]-derived nor `null`.  
     *  A weak reference to an object is not enough to keep the object alive: when the only remaining references to a referent are weak references, garbage collection is free to destroy the referent and reuse its memory for something else. However, until the object is actually destroyed the weak reference may return the object even if there are no strong references to it.  
     */
    static function weakref(obj: any): void
    
    /** Returns the internal type of the given [param variable], using the [enum Variant.Type] values.  
     *    
     *  See also [method type_string].  
     */
    // [INVALID_NAME]: static function typeof(variable: any): int64
    
    /** Converts the given [param variant] to the given [param type], using the [enum Variant.Type] values. This method is generous with how it handles types, it can automatically convert between array types, convert numeric [String]s to [int], and converting most things to [String].  
     *  If the type conversion cannot be done, this method will return the default value for that type, for example converting [Rect2] to [Vector2] will always return [constant Vector2.ZERO]. This method will never show error messages as long as [param type] is a valid Variant type.  
     *  The returned value is a [Variant], but the data inside and the [enum Variant.Type] will be the same as the requested type.  
     *    
     */
    static function type_convert(variant: any, type: int64): void
    
    /** Converts one or more arguments of any [Variant] type to a [String] in the best way possible.  
     *    
     */
    static function str(...vargargs: any[]): string
    
    /** Returns a human-readable name for the given [enum Error] code.  
     *    
     */
    static function error_string(error: int64): string
    
    /** Returns a human-readable name of the given [param type], using the [enum Variant.Type] values.  
     *    
     *  See also [method typeof].  
     */
    static function type_string(type: int64): string
    
    /** Converts one or more arguments of any type to string in the best way possible and prints them to the console.  
     *    
     *      
     *  **Note:** Consider using [method push_error] and [method push_warning] to print error and warning messages instead of [method print] or [method print_rich]. This distinguishes them from print messages used for debugging purposes, while also displaying a stack trace when an error or warning is printed.  
     */
    static function print(...vargargs: any[]): void
    
    /** Converts one or more arguments of any type to string in the best way possible and prints them to the console.  
     *  The following BBCode tags are supported: `b`, `i`, `u`, `s`, `indent`, `code`, `url`, `center`, `right`, `color`, `bgcolor`, `fgcolor`.  
     *  Color tags only support the following named colors: `black`, `red`, `green`, `yellow`, `blue`, `magenta`, `pink`, `purple`, `cyan`, `white`, `orange`, `gray`. Hexadecimal color codes are not supported.  
     *  URL tags only support URLs wrapped by a URL tag, not URLs with a different title.  
     *  When printing to standard output, the supported subset of BBCode is converted to ANSI escape codes for the terminal emulator to display. Support for ANSI escape codes varies across terminal emulators, especially for italic and strikethrough. In standard output, `code` is represented with faint text but without any font change. Unsupported tags are left as-is in standard output.  
     *    
     *      
     *  **Note:** Consider using [method push_error] and [method push_warning] to print error and warning messages instead of [method print] or [method print_rich]. This distinguishes them from print messages used for debugging purposes, while also displaying a stack trace when an error or warning is printed.  
     *      
     *  **Note:** On Windows, only Windows 10 and later correctly displays ANSI escape codes in standard output.  
     */
    static function print_rich(...vargargs: any[]): void
    
    /** Prints one or more arguments to strings in the best way possible to standard error line.  
     *    
     */
    static function printerr(...vargargs: any[]): void
    
    /** Prints one or more arguments to the console with a tab between each argument.  
     *    
     */
    static function printt(...vargargs: any[]): void
    
    /** Prints one or more arguments to the console with a space between each argument.  
     *    
     */
    static function prints(...vargargs: any[]): void
    
    /** Prints one or more arguments to strings in the best way possible to the OS terminal. Unlike [method print], no newline is automatically added at the end.  
     *    
     */
    static function printraw(...vargargs: any[]): void
    
    /** If verbose mode is enabled ([method OS.is_stdout_verbose] returning `true`), converts one or more arguments of any type to string in the best way possible and prints them to the console. */
    static function print_verbose(...vargargs: any[]): void
    
    /** Pushes an error message to Godot's built-in debugger and to the OS terminal.  
     *    
     *      
     *  **Note:** This function does not pause project execution. To print an error message and pause project execution in debug builds, use `assert(false, "test error")` instead.  
     */
    static function push_error(...vargargs: any[]): void
    
    /** Pushes a warning message to Godot's built-in debugger and to the OS terminal.  
     *    
     */
    static function push_warning(...vargargs: any[]): void
    
    /** Converts a [Variant] [param variable] to a formatted [String] that can then be parsed using [method str_to_var].  
     *    
     *  Prints:  
     *    
     *      
     *  **Note:** Converting [Signal] or [Callable] is not supported and will result in an empty value for these types, regardless of their data.  
     */
    static function var_to_str(variable: any): string
    
    /** Converts a formatted [param string] that was returned by [method var_to_str] to the original [Variant].  
     *    
     */
    static function str_to_var(string_: string): void
    
    /** Encodes a [Variant] value to a byte array, without encoding objects. Deserialization can be done with [method bytes_to_var].  
     *      
     *  **Note:** If you need object serialization, see [method var_to_bytes_with_objects].  
     *      
     *  **Note:** Encoding [Callable] is not supported and will result in an empty value, regardless of the data.  
     */
    static function var_to_bytes(variable: any): PackedByteArray
    
    /** Decodes a byte array back to a [Variant] value, without decoding objects.  
     *      
     *  **Note:** If you need object deserialization, see [method bytes_to_var_with_objects].  
     */
    static function bytes_to_var(bytes: PackedByteArray | byte[] | ArrayBuffer): void
    
    /** Encodes a [Variant] value to a byte array. Encoding objects is allowed (and can potentially include executable code). Deserialization can be done with [method bytes_to_var_with_objects].  
     *      
     *  **Note:** Encoding [Callable] is not supported and will result in an empty value, regardless of the data.  
     */
    static function var_to_bytes_with_objects(variable: any): PackedByteArray
    
    /** Decodes a byte array back to a [Variant] value. Decoding objects is allowed.  
     *  **Warning:** Deserialized object can contain code which gets executed. Do not use this option if the serialized object comes from untrusted sources to avoid potential security threats (remote code execution).  
     */
    static function bytes_to_var_with_objects(bytes: PackedByteArray | byte[] | ArrayBuffer): void
    
    /** Returns the integer hash of the passed [param variable].  
     *    
     */
    static function hash(variable: any): int64
    
    /** Returns the [Object] that corresponds to [param instance_id]. All Objects have a unique instance ID. See also [method Object.get_instance_id].  
     *    
     */
    static function instance_from_id(instance_id: int64): Object
    
    /** Returns `true` if the Object that corresponds to [param id] is a valid object (e.g. has not been deleted from memory). All Objects have a unique instance ID. */
    static function is_instance_id_valid(id: int64): boolean
    
    /** Returns `true` if [param instance] is a valid Object (e.g. has not been deleted from memory). */
    static function is_instance_valid(instance: any): boolean
    
    /** Allocates a unique ID which can be used by the implementation to construct a RID. This is used mainly from native extensions to implement servers. */
    static function rid_allocate_id(): int64
    
    /** Creates a RID from a [param base]. This is used mainly from native extensions to build servers. */
    static function rid_from_int64(base: int64): RID
    
    /** Returns `true`, for value types, if [param a] and [param b] share the same value. Returns `true`, for reference types, if the references of [param a] and [param b] are the same.  
     *    
     *  These are [Variant] value types: `null`, [bool], [int], [float], [String], [StringName], [Vector2], [Vector2i], [Vector3], [Vector3i], [Vector4], [Vector4i], [Rect2], [Rect2i], [Transform2D], [Transform3D], [Plane], [Quaternion], [AABB], [Basis], [Projection], [Color], [NodePath], [RID], [Callable] and [Signal].  
     *  These are [Variant] reference types: [Object], [Dictionary], [Array], [PackedByteArray], [PackedInt32Array], [PackedInt64Array], [PackedFloat32Array], [PackedFloat64Array], [PackedStringArray], [PackedVector2Array], [PackedVector3Array] and [PackedColorArray].  
     */
    static function is_same(a: any, b: any): boolean
}
