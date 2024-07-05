// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
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
