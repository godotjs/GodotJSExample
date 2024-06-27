// AUTO-GENERATED
/// <reference no-default-lib="true"/>
declare module "godot" {
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
    /** An internal control for a single item inside [Tree].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_treeitem.html  
     */
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
    /** Internal mesh type.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_trianglemesh.html  
     */
    class TriangleMesh extends RefCounted {
    }
    /** Represents a straight tube-shaped [PrimitiveMesh] with variable width.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tubetrailmesh.html  
     */
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
    /** Lightweight object used for general-purpose animation via script, using [Tweener]s.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tween.html  
     */
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
    /** Abstract class for all Tweeners used by [Tween].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_tweener.html  
     */
    class Tweener extends RefCounted {
        /** Emitted when the [Tweener] has just finished its job. */
        readonly finished: Signal //  => void
    }
    /** Helper class to implement a UDP server.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_udpserver.html  
     */
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
    /** Universal Plug and Play (UPnP) functions for network device discovery, querying and port forwarding.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_upnp.html  
     */
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
    /** Universal Plug and Play (UPnP) device.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_upnpdevice.html  
     */
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
    /** Provides a high-level interface for implementing undo and redo operations.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_undoredo.html  
     */
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
    /** A container that arranges its child controls vertically.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vboxcontainer.html  
     */
    class VBoxContainer extends BoxContainer {
    }
    /** A container that arranges its child controls vertically and wraps them around at the borders.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vflowcontainer.html  
     */
    class VFlowContainer extends FlowContainer {
    }
    /** A vertical scrollbar that goes from top (min) to bottom (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vscrollbar.html  
     */
    class VScrollBar extends ScrollBar {
    }
    /** A vertical line used for separating other controls.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vseparator.html  
     */
    class VSeparator extends Separator {
    }
    /** A vertical slider that goes from bottom (min) to top (max).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vslider.html  
     */
    class VSlider extends Slider {
    }
    /** A container that splits two child controls vertically and provides a grabber for adjusting the split ratio.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vsplitcontainer.html  
     */
    class VSplitContainer extends SplitContainer {
    }
    /** A 3D physics body that simulates the behavior of a car.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vehiclebody3d.html  
     */
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
    /** A 3D physics body for a [VehicleBody3D] that simulates the behavior of a wheel.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_vehiclewheel3d.html  
     */
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
    /** @link https://docs.godotengine.org/en/4.2/classes/class_vehiclewheel3dgizmoplugin.html */
    class VehicleWheel3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_versioncontroleditorplugin.html */
    class VersionControlEditorPlugin extends EditorPlugin {
    }
    /** Base resource for video streams.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_videostream.html  
     */
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
    /** Internal class used by [VideoStream] to manage playback state when played from a [VideoStreamPlayer].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_videostreamplayback.html  
     */
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
    /** A control used for video playback.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_videostreamplayer.html  
     */
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
    /** [VideoStream] resource for Ogg Theora videos.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_videostreamtheora.html  
     */
    class VideoStreamTheora extends VideoStream {
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_viewpanner.html */
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
    /** Abstract base class for viewports. Encapsulates drawing and interaction with a game world.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_viewport.html  
     */
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
    /** @link https://docs.godotengine.org/en/4.2/classes/class_viewportnavigationcontrol.html */
    class ViewportNavigationControl extends Control {
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_viewportrotationcontrol.html */
    class ViewportRotationControl extends Control {
    }
    /** Provides the content of a [Viewport] as a dynamic texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_viewporttexture.html  
     */
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
    /** A rectangular region of 2D space that, when visible on screen, enables a target node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visibleonscreenenabler2d.html  
     */
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
    /** A box-shaped region of 3D space that, when visible on screen, enables a target node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visibleonscreenenabler3d.html  
     */
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
    /** A rectangular region of 2D space that detects whether it is visible on screen.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visibleonscreennotifier2d.html  
     */
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
    /** A box-shaped region of 3D space that detects whether it is visible on screen.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visibleonscreennotifier3d.html  
     */
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
    /** @link https://docs.godotengine.org/en/4.2/classes/class_visibleonscreennotifier3dgizmoplugin.html */
    class VisibleOnScreenNotifier3DGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Parent of all visual 3D nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualinstance3d.html  
     */
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
    /** A custom shader program with a visual editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshader.html  
     */
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
    /** @link https://docs.godotengine.org/en/4.2/classes/class_visualshaderconversionplugin.html */
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
    /** Base class for [VisualShader] nodes. Not related to scene nodes.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernode.html  
     */
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
    /** A node that controls how the object faces the camera to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodebillboard.html  
     */
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
    /** A boolean constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodebooleanconstant.html  
     */
    class VisualShaderNodeBooleanConstant extends VisualShaderNodeConstant {
        set_constant(constant: boolean): void
        get_constant(): boolean
        
        /** A boolean constant which represents a state of this node. */
        constant: boolean
    }
    /** A boolean parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodebooleanparameter.html  
     */
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
    /** Clamps a value within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeclamp.html  
     */
    class VisualShaderNodeClamp extends VisualShaderNode {
        set_op_type(op_type: VisualShaderNodeClamp.OpType): void
        get_op_type(): VisualShaderNodeClamp.OpType
        
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    /** A [Color] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecolorconstant.html  
     */
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
    /** A [Color] function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecolorfunc.html  
     */
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
    /** A [Color] operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecolorop.html  
     */
    class VisualShaderNodeColorOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeColorOp.Operator): void
        get_operator(): VisualShaderNodeColorOp.Operator
        
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    /** A [Color] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecolorparameter.html  
     */
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
    /** A comment node to be placed on visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecomment.html  
     */
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
    /** A comparison function for common types within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecompare.html  
     */
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
    /** A base type for the constants within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeconstant.html  
     */
    class VisualShaderNodeConstant extends VisualShaderNode {
    }
    namespace VisualShaderNodeCubemap {
        enum Source {
            /** Use the [Cubemap] set via [member cube_map]. If this is set to [member source], the `samplerCube` port is ignored. */
            SOURCE_TEXTURE = 0,
            
            /** Use the [Cubemap] sampler reference passed via the `samplerCube` port. If this is set to [member source], the [member cube_map] texture is ignored. */
            SOURCE_PORT = 1,
            
            /** Represents the size of the [enum Source] enum. */
            SOURCE_MAX = 2,
        }
        enum TextureType {
            /** No hints are added to the uniform declaration. */
            TYPE_DATA = 0,
            
            /** Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion. */
            TYPE_COLOR = 1,
            
            /** Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map. */
            TYPE_NORMAL_MAP = 2,
            
            /** Represents the size of the [enum TextureType] enum. */
            TYPE_MAX = 3,
        }
    }
    /** A [Cubemap] sampling node to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecubemap.html  
     */
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
    /** A [Cubemap] parameter node to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecubemapparameter.html  
     */
    class VisualShaderNodeCubemapParameter extends VisualShaderNodeTextureParameter {
    }
    /** Performs a [CurveTexture] lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecurvetexture.html  
     */
    class VisualShaderNodeCurveTexture extends VisualShaderNodeResizableBase {
        set_texture(texture: CurveTexture): void
        get_texture(): CurveTexture
        
        /** The source texture. */
        texture: CurveTexture
    }
    /** Performs a [CurveXYZTexture] lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecurvexyztexture.html  
     */
    class VisualShaderNodeCurveXYZTexture extends VisualShaderNodeResizableBase {
        set_texture(texture: CurveXYZTexture): void
        get_texture(): CurveXYZTexture
        
        /** The source texture. */
        texture: CurveXYZTexture
    }
    /** Virtual class to define custom [VisualShaderNode]s for use in the Visual Shader Editor.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodecustom.html  
     */
    class VisualShaderNodeCustom extends VisualShaderNode {
        /** Override this method to define the name of the associated custom node in the Visual Shader Editor's members dialog and graph.  
         *  Defining this method is **optional**, but recommended. If not overridden, the node will be named as "Unnamed".  
         */
        /* gdvirtual */ _get_name(): string
        
        /** Override this method to define the description of the associated custom node in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_description(): string
        
        /** Override this method to define the path to the associated custom node in the Visual Shader Editor's members dialog. The path may look like `"MyGame/MyFunctions/Noise"`.  
         *  Defining this method is **optional**. If not overridden, the node will be filed under the "Addons" category.  
         */
        /* gdvirtual */ _get_category(): string
        
        /** Override this method to define the return icon of the associated custom node in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**. If not overridden, no return icon is shown.  
         */
        /* gdvirtual */ _get_return_icon_type(): VisualShaderNode.PortType
        
        /** Override this method to define the number of input ports of the associated custom node.  
         *  Defining this method is **required**. If not overridden, the node has no input ports.  
         */
        /* gdvirtual */ _get_input_port_count(): number /*i64*/
        
        /** Override this method to define the returned type of each input port of the associated custom node (see [enum VisualShaderNode.PortType] for possible types).  
         *  Defining this method is **optional**, but recommended. If not overridden, input ports will return the [constant VisualShaderNode.PORT_TYPE_SCALAR] type.  
         */
        /* gdvirtual */ _get_input_port_type(port: number /*i64*/): VisualShaderNode.PortType
        
        /** Override this method to define the names of input ports of the associated custom node. The names are used both for the input slots in the editor and as identifiers in the shader code, and are passed in the `input_vars` array in [method _get_code].  
         *  Defining this method is **optional**, but recommended. If not overridden, input ports are named as `"in" + str(port)`.  
         */
        /* gdvirtual */ _get_input_port_name(port: number /*i64*/): string
        
        /** Override this method to define the default value for the specified input port. Prefer use this over [method VisualShaderNode.set_input_port_default_value].  
         *  Defining this method is **required**. If not overridden, the node has no default values for their input ports.  
         */
        /* gdvirtual */ _get_input_port_default_value(port: number /*i64*/): void
        
        /** Override this method to define the input port which should be connected by default when this node is created as a result of dragging a connection from an existing node to the empty space on the graph.  
         *  Defining this method is **optional**. If not overridden, the connection will be created to the first valid port.  
         */
        /* gdvirtual */ _get_default_input_port(type: VisualShaderNode.PortType): number /*i64*/
        
        /** Override this method to define the number of output ports of the associated custom node.  
         *  Defining this method is **required**. If not overridden, the node has no output ports.  
         */
        /* gdvirtual */ _get_output_port_count(): number /*i64*/
        
        /** Override this method to define the returned type of each output port of the associated custom node (see [enum VisualShaderNode.PortType] for possible types).  
         *  Defining this method is **optional**, but recommended. If not overridden, output ports will return the [constant VisualShaderNode.PORT_TYPE_SCALAR] type.  
         */
        /* gdvirtual */ _get_output_port_type(port: number /*i64*/): VisualShaderNode.PortType
        
        /** Override this method to define the names of output ports of the associated custom node. The names are used both for the output slots in the editor and as identifiers in the shader code, and are passed in the `output_vars` array in [method _get_code].  
         *  Defining this method is **optional**, but recommended. If not overridden, output ports are named as `"out" + str(port)`.  
         */
        /* gdvirtual */ _get_output_port_name(port: number /*i64*/): string
        
        /** Override this method to define the number of the properties.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_property_count(): number /*i64*/
        
        /** Override this method to define the names of the property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_property_name(index: number /*i64*/): string
        
        /** Override this method to define the default index of the property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_property_default_index(index: number /*i64*/): number /*i64*/
        
        /** Override this method to define the options inside the drop-down list property of the associated custom node.  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_property_options(index: number /*i64*/): PackedStringArray
        
        /** Override this method to define the actual shader code of the associated custom node. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  The [param input_vars] and [param output_vars] arrays contain the string names of the various input and output variables, as defined by `_get_input_*` and `_get_output_*` virtual methods in this class.  
         *  The output ports can be assigned values in the shader code. For example, `return output_vars[0] + " = " + input_vars[0] + ";"`.  
         *  You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).  
         *  Defining this method is **required**.  
         */
        /* gdvirtual */ _get_code(input_vars: Array, output_vars: Array, mode: Shader.Mode, type: VisualShader.Type): string
        
        /** Override this method to add a shader code to the beginning of each shader function (once). The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  If there are multiple custom nodes of different types which use this feature the order of each insertion is undefined.  
         *  You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_func_code(mode: Shader.Mode, type: VisualShader.Type): string
        
        /** Override this method to add shader code on top of the global shader, to define your own standard library of reusable methods, varyings, constants, uniforms, etc. The shader code should be returned as a string, which can have multiple lines (the `"""` multiline string construct can be used for convenience).  
         *  Be careful with this functionality as it can cause name conflicts with other custom nodes, so be sure to give the defined entities unique names.  
         *  You can customize the generated code based on the shader [param mode] (see [enum Shader.Mode]).  
         *  Defining this method is **optional**.  
         */
        /* gdvirtual */ _get_global_code(mode: Shader.Mode): string
        
        /** Override this method to enable high-end mark in the Visual Shader Editor's members dialog.  
         *  Defining this method is **optional**. If not overridden, it's `false`.  
         */
        /* gdvirtual */ _is_highend(): boolean
        
        /** Override this method to prevent the node to be visible in the member dialog for the certain [param mode] (see [enum Shader.Mode]) and/or [param type] (see [enum VisualShader.Type]).  
         *  Defining this method is **optional**. If not overridden, it's `true`.  
         */
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
            /** A floating-point scalar. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 2,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 3,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 4,
        }
        enum Function {
            /** Sum of absolute derivative in `x` and `y`. */
            FUNC_SUM = 0,
            
            /** Derivative in `x` using local differencing. */
            FUNC_X = 1,
            
            /** Derivative in `y` using local differencing. */
            FUNC_Y = 2,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 3,
        }
        enum Precision {
            /** No precision is specified, the GPU driver is allowed to use whatever level of precision it chooses. This is the default option and is equivalent to using `dFdx()` or `dFdy()` in text shaders. */
            PRECISION_NONE = 0,
            
            /** The derivative will be calculated using the current fragment's neighbors (which may not include the current fragment). This tends to be faster than using [constant PRECISION_FINE], but may not be suitable when more precision is needed. This is equivalent to using `dFdxCoarse()` or `dFdyCoarse()` in text shaders. */
            PRECISION_COARSE = 1,
            
            /** The derivative will be calculated using the current fragment and its immediate neighbors. This tends to be slower than using [constant PRECISION_COARSE], but may be necessary when more precision is needed. This is equivalent to using `dFdxFine()` or `dFdyFine()` in text shaders. */
            PRECISION_FINE = 2,
            
            /** Represents the size of the [enum Precision] enum. */
            PRECISION_MAX = 3,
        }
    }
    /** Calculates a derivative within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodederivativefunc.html  
     */
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
    /** Calculates the determinant of a [Transform3D] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodedeterminant.html  
     */
    class VisualShaderNodeDeterminant extends VisualShaderNode {
    }
    /** A visual shader node representing distance fade effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodedistancefade.html  
     */
    class VisualShaderNodeDistanceFade extends VisualShaderNode {
    }
    /** Calculates a dot product of two vectors within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodedotproduct.html  
     */
    class VisualShaderNodeDotProduct extends VisualShaderNode {
    }
    /** A custom visual shader graph expression written in Godot Shading Language.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeexpression.html  
     */
    class VisualShaderNodeExpression extends VisualShaderNodeGroupBase {
        set_expression(expression: string): void
        get_expression(): string
        
        /** An expression in Godot Shading Language, which will be injected at the start of the graph's matching shader function (`vertex`, `fragment`, or `light`), and thus cannot be used to declare functions, varyings, uniforms, or global constants. */
        expression: string
    }
    /** Returns the vector that points in the same direction as a reference vector within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodefaceforward.html  
     */
    class VisualShaderNodeFaceForward extends VisualShaderNodeVectorBase {
    }
    /** A scalar floating-point constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodefloatconstant.html  
     */
    class VisualShaderNodeFloatConstant extends VisualShaderNodeConstant {
        set_constant(constant: number /*f64*/): void
        get_constant(): number /*f64*/
        
        /** A floating-point constant which represents a state of this node. */
        constant: number /*f64*/
    }
    namespace VisualShaderNodeFloatFunc {
        enum Function {
            /** Returns the sine of the parameter. Translates to `sin(x)` in the Godot Shader Language. */
            FUNC_SIN = 0,
            
            /** Returns the cosine of the parameter. Translates to `cos(x)` in the Godot Shader Language. */
            FUNC_COS = 1,
            
            /** Returns the tangent of the parameter. Translates to `tan(x)` in the Godot Shader Language. */
            FUNC_TAN = 2,
            
            /** Returns the arc-sine of the parameter. Translates to `asin(x)` in the Godot Shader Language. */
            FUNC_ASIN = 3,
            
            /** Returns the arc-cosine of the parameter. Translates to `acos(x)` in the Godot Shader Language. */
            FUNC_ACOS = 4,
            
            /** Returns the arc-tangent of the parameter. Translates to `atan(x)` in the Godot Shader Language. */
            FUNC_ATAN = 5,
            
            /** Returns the hyperbolic sine of the parameter. Translates to `sinh(x)` in the Godot Shader Language. */
            FUNC_SINH = 6,
            
            /** Returns the hyperbolic cosine of the parameter. Translates to `cosh(x)` in the Godot Shader Language. */
            FUNC_COSH = 7,
            
            /** Returns the hyperbolic tangent of the parameter. Translates to `tanh(x)` in the Godot Shader Language. */
            FUNC_TANH = 8,
            
            /** Returns the natural logarithm of the parameter. Translates to `log(x)` in the Godot Shader Language. */
            FUNC_LOG = 9,
            
            /** Returns the natural exponentiation of the parameter. Translates to `exp(x)` in the Godot Shader Language. */
            FUNC_EXP = 10,
            
            /** Returns the square root of the parameter. Translates to `sqrt(x)` in the Godot Shader Language. */
            FUNC_SQRT = 11,
            
            /** Returns the absolute value of the parameter. Translates to `abs(x)` in the Godot Shader Language. */
            FUNC_ABS = 12,
            
            /** Extracts the sign of the parameter. Translates to `sign(x)` in the Godot Shader Language. */
            FUNC_SIGN = 13,
            
            /** Finds the nearest integer less than or equal to the parameter. Translates to `floor(x)` in the Godot Shader Language. */
            FUNC_FLOOR = 14,
            
            /** Finds the nearest integer to the parameter. Translates to `round(x)` in the Godot Shader Language. */
            FUNC_ROUND = 15,
            
            /** Finds the nearest integer that is greater than or equal to the parameter. Translates to `ceil(x)` in the Godot Shader Language. */
            FUNC_CEIL = 16,
            
            /** Computes the fractional part of the argument. Translates to `fract(x)` in the Godot Shader Language. */
            FUNC_FRACT = 17,
            
            /** Clamps the value between `0.0` and `1.0` using `min(max(x, 0.0), 1.0)`. */
            FUNC_SATURATE = 18,
            
            /** Negates the `x` using `-(x)`. */
            FUNC_NEGATE = 19,
            
            /** Returns the arc-hyperbolic-cosine of the parameter. Translates to `acosh(x)` in the Godot Shader Language. */
            FUNC_ACOSH = 20,
            
            /** Returns the arc-hyperbolic-sine of the parameter. Translates to `asinh(x)` in the Godot Shader Language. */
            FUNC_ASINH = 21,
            
            /** Returns the arc-hyperbolic-tangent of the parameter. Translates to `atanh(x)` in the Godot Shader Language. */
            FUNC_ATANH = 22,
            
            /** Convert a quantity in radians to degrees. Translates to `degrees(x)` in the Godot Shader Language. */
            FUNC_DEGREES = 23,
            
            /** Returns 2 raised by the power of the parameter. Translates to `exp2(x)` in the Godot Shader Language. */
            FUNC_EXP2 = 24,
            
            /** Returns the inverse of the square root of the parameter. Translates to `inversesqrt(x)` in the Godot Shader Language. */
            FUNC_INVERSE_SQRT = 25,
            
            /** Returns the base 2 logarithm of the parameter. Translates to `log2(x)` in the Godot Shader Language. */
            FUNC_LOG2 = 26,
            
            /** Convert a quantity in degrees to radians. Translates to `radians(x)` in the Godot Shader Language. */
            FUNC_RADIANS = 27,
            
            /** Finds reciprocal value of dividing 1 by `x` (i.e. `1 / x`). */
            FUNC_RECIPROCAL = 28,
            
            /** Finds the nearest even integer to the parameter. Translates to `roundEven(x)` in the Godot Shader Language. */
            FUNC_ROUNDEVEN = 29,
            
            /** Returns a value equal to the nearest integer to `x` whose absolute value is not larger than the absolute value of `x`. Translates to `trunc(x)` in the Godot Shader Language. */
            FUNC_TRUNC = 30,
            
            /** Subtracts scalar `x` from 1 (i.e. `1 - x`). */
            FUNC_ONEMINUS = 31,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 32,
        }
    }
    /** A scalar floating-point function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodefloatfunc.html  
     */
    class VisualShaderNodeFloatFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeFloatFunc.Function): void
        get_function(): VisualShaderNodeFloatFunc.Function
        
        /** A function to be applied to the scalar. See [enum Function] for options. */
        function: number /*i64*/
    }
    namespace VisualShaderNodeFloatOp {
        enum Operator {
            /** Sums two numbers using `a + b`. */
            OP_ADD = 0,
            
            /** Subtracts two numbers using `a - b`. */
            OP_SUB = 1,
            
            /** Multiplies two numbers using `a * b`. */
            OP_MUL = 2,
            
            /** Divides two numbers using `a / b`. */
            OP_DIV = 3,
            
            /** Calculates the remainder of two numbers. Translates to `mod(a, b)` in the Godot Shader Language. */
            OP_MOD = 4,
            
            /** Raises the `a` to the power of `b`. Translates to `pow(a, b)` in the Godot Shader Language. */
            OP_POW = 5,
            
            /** Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MAX = 6,
            
            /** Returns the lesser of two numbers. Translates to `min(a, b)` in the Godot Shader Language. */
            OP_MIN = 7,
            
            /** Returns the arc-tangent of the parameters. Translates to `atan(a, b)` in the Godot Shader Language. */
            OP_ATAN2 = 8,
            
            /** Generates a step function by comparing `b`(x) to `a`(edge). Returns 0.0 if `x` is smaller than `edge` and otherwise 1.0. Translates to `step(a, b)` in the Godot Shader Language. */
            OP_STEP = 9,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_ENUM_SIZE = 10,
        }
    }
    /** A floating-point scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodefloatop.html  
     */
    class VisualShaderNodeFloatOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeFloatOp.Operator): void
        get_operator(): VisualShaderNodeFloatOp.Operator
        
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    namespace VisualShaderNodeFloatParameter {
        enum Hint {
            /** No hint used. */
            HINT_NONE = 0,
            
            /** A range hint for scalar value, which limits possible input values between [member min] and [member max]. Translated to `hint_range(min, max)` in shader code. */
            HINT_RANGE = 1,
            
            /** A range hint for scalar value with step, which limits possible input values between [member min] and [member max], with a step (increment) of [member step]). Translated to `hint_range(min, max, step)` in shader code. */
            HINT_RANGE_STEP = 2,
            
            /** Represents the size of the [enum Hint] enum. */
            HINT_MAX = 3,
        }
    }
    /** A scalar float parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodefloatparameter.html  
     */
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
    /** A Fresnel effect to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodefresnel.html  
     */
    class VisualShaderNodeFresnel extends VisualShaderNode {
    }
    /** A custom global visual shader graph expression written in Godot Shading Language.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeglobalexpression.html  
     */
    class VisualShaderNodeGlobalExpression extends VisualShaderNodeExpression {
    }
    /** Base class for a family of nodes with variable number of input and output ports within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodegroupbase.html  
     */
    class VisualShaderNodeGroupBase extends VisualShaderNodeResizableBase {
        /** Defines all input ports using a [String] formatted as a colon-separated list: `id,type,name;` (see [method add_input_port]). */
        set_inputs(inputs: string): void
        
        /** Returns a [String] description of the input ports as a colon-separated list using the format `id,type,name;` (see [method add_input_port]). */
        get_inputs(): string
        
        /** Defines all output ports using a [String] formatted as a colon-separated list: `id,type,name;` (see [method add_output_port]). */
        set_outputs(outputs: string): void
        
        /** Returns a [String] description of the output ports as a colon-separated list using the format `id,type,name;` (see [method add_output_port]). */
        get_outputs(): string
        
        /** Returns `true` if the specified port name does not override an existed port name and is valid within the shader. */
        is_valid_port_name(name: string): boolean
        
        /** Adds an input port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
        add_input_port(id: number /*i64*/, type: number /*i64*/, name: string): void
        
        /** Removes the specified input port. */
        remove_input_port(id: number /*i64*/): void
        
        /** Returns the number of input ports in use. Alternative for [method get_free_input_port_id]. */
        get_input_port_count(): number /*i64*/
        
        /** Returns `true` if the specified input port exists. */
        has_input_port(id: number /*i64*/): boolean
        
        /** Removes all previously specified input ports. */
        clear_input_ports(): void
        
        /** Adds an output port with the specified [param type] (see [enum VisualShaderNode.PortType]) and [param name]. */
        add_output_port(id: number /*i64*/, type: number /*i64*/, name: string): void
        
        /** Removes the specified output port. */
        remove_output_port(id: number /*i64*/): void
        
        /** Returns the number of output ports in use. Alternative for [method get_free_output_port_id]. */
        get_output_port_count(): number /*i64*/
        
        /** Returns `true` if the specified output port exists. */
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
    /** Outputs a 3D vector based on the result of a floating point comparison within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeif.html  
     */
    class VisualShaderNodeIf extends VisualShaderNode {
    }
    /** Represents the input shader parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeinput.html  
     */
    class VisualShaderNodeInput extends VisualShaderNode {
        set_input_name(name: string): void
        get_input_name(): string
        
        /** Returns a translated name of the current constant in the Godot Shader Language. E.g. `"ALBEDO"` if the [member input_name] equal to `"albedo"`. */
        get_input_real_name(): string
        
        /** One of the several input constants in lower-case style like: "vertex" (`VERTEX`) or "point_size" (`POINT_SIZE`). */
        input_name: StringName
        
        /** Emitted when input is changed via [member input_name]. */
        readonly input_type_changed: Signal //  => void
    }
    /** A scalar integer constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeintconstant.html  
     */
    class VisualShaderNodeIntConstant extends VisualShaderNodeConstant {
        set_constant(constant: number /*i64*/): void
        get_constant(): number /*i64*/
        
        /** An integer constant which represents a state of this node. */
        constant: number /*i64*/
    }
    namespace VisualShaderNodeIntFunc {
        enum Function {
            /** Returns the absolute value of the parameter. Translates to `abs(x)` in the Godot Shader Language. */
            FUNC_ABS = 0,
            
            /** Negates the `x` using `-(x)`. */
            FUNC_NEGATE = 1,
            
            /** Extracts the sign of the parameter. Translates to `sign(x)` in the Godot Shader Language. */
            FUNC_SIGN = 2,
            
            /** Returns the result of bitwise `NOT` operation on the integer. Translates to `~a` in the Godot Shader Language. */
            FUNC_BITWISE_NOT = 3,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 4,
        }
    }
    /** A scalar integer function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeintfunc.html  
     */
    class VisualShaderNodeIntFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeIntFunc.Function): void
        get_function(): VisualShaderNodeIntFunc.Function
        
        /** A function to be applied to the scalar. See [enum Function] for options. */
        function: number /*i64*/
    }
    namespace VisualShaderNodeIntOp {
        enum Operator {
            /** Sums two numbers using `a + b`. */
            OP_ADD = 0,
            
            /** Subtracts two numbers using `a - b`. */
            OP_SUB = 1,
            
            /** Multiplies two numbers using `a * b`. */
            OP_MUL = 2,
            
            /** Divides two numbers using `a / b`. */
            OP_DIV = 3,
            
            /** Calculates the remainder of two numbers using `a % b`. */
            OP_MOD = 4,
            
            /** Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MAX = 5,
            
            /** Returns the lesser of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MIN = 6,
            
            /** Returns the result of bitwise `AND` operation on the integer. Translates to `a & b` in the Godot Shader Language. */
            OP_BITWISE_AND = 7,
            
            /** Returns the result of bitwise `OR` operation for two integers. Translates to `a | b` in the Godot Shader Language. */
            OP_BITWISE_OR = 8,
            
            /** Returns the result of bitwise `XOR` operation for two integers. Translates to `a ^ b` in the Godot Shader Language. */
            OP_BITWISE_XOR = 9,
            
            /** Returns the result of bitwise left shift operation on the integer. Translates to `a << b` in the Godot Shader Language. */
            OP_BITWISE_LEFT_SHIFT = 10,
            
            /** Returns the result of bitwise right shift operation on the integer. Translates to `a >> b` in the Godot Shader Language. */
            OP_BITWISE_RIGHT_SHIFT = 11,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_ENUM_SIZE = 12,
        }
    }
    /** An integer scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeintop.html  
     */
    class VisualShaderNodeIntOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeIntOp.Operator): void
        get_operator(): VisualShaderNodeIntOp.Operator
        
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    namespace VisualShaderNodeIntParameter {
        enum Hint {
            /** The parameter will not constrain its value. */
            HINT_NONE = 0,
            
            /** The parameter's value must be within the specified [member min]/[member max] range. */
            HINT_RANGE = 1,
            
            /** The parameter's value must be within the specified range, with the given [member step] between values. */
            HINT_RANGE_STEP = 2,
            
            /** Represents the size of the [enum Hint] enum. */
            HINT_MAX = 3,
        }
    }
    /** A visual shader node for shader parameter (uniform) of type [int].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeintparameter.html  
     */
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
        
        /** If `true`, the node will have a custom default value. */
        default_value_enabled: boolean
        
        /** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to `0` otherwise. */
        default_value: number /*i64*/
    }
    namespace VisualShaderNodeIs {
        enum Function {
            /** Comparison with `INF` (Infinity). */
            FUNC_IS_INF = 0,
            
            /** Comparison with `NaN` (Not a Number; denotes invalid numeric results, e.g. division by zero). */
            FUNC_IS_NAN = 1,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 2,
        }
    }
    /** A boolean comparison operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeis.html  
     */
    class VisualShaderNodeIs extends VisualShaderNode {
        set_function(func: VisualShaderNodeIs.Function): void
        get_function(): VisualShaderNodeIs.Function
        
        /** The comparison function. See [enum Function] for options. */
        function: number /*i64*/
    }
    /** A visual shader node that returns the depth value of the DEPTH_TEXTURE node in a linear space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodelinearscenedepth.html  
     */
    class VisualShaderNodeLinearSceneDepth extends VisualShaderNode {
    }
    namespace VisualShaderNodeMix {
        enum OpType {
            /** A floating-point scalar. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** The `a` and `b` ports use a 2D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 3,
            
            /** The `a` and `b` ports use a 3D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 7,
        }
    }
    /** Linearly interpolates between two values within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodemix.html  
     */
    class VisualShaderNodeMix extends VisualShaderNode {
        set_op_type(op_type: VisualShaderNodeMix.OpType): void
        get_op_type(): VisualShaderNodeMix.OpType
        
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    namespace VisualShaderNodeMultiplyAdd {
        enum OpType {
            /** A floating-point scalar type. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 2,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 3,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 4,
        }
    }
    /** Performs a fused multiply-add operation within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodemultiplyadd.html  
     */
    class VisualShaderNodeMultiplyAdd extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeMultiplyAdd.OpType): void
        get_op_type(): VisualShaderNodeMultiplyAdd.OpType
        
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    /** Calculates an outer product of two vectors within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeouterproduct.html  
     */
    class VisualShaderNodeOuterProduct extends VisualShaderNode {
    }
    /** Represents the output shader parameters within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeoutput.html  
     */
    class VisualShaderNodeOutput extends VisualShaderNode {
    }
    namespace VisualShaderNodeParameter {
        enum Qualifier {
            /** The parameter will be tied to the [ShaderMaterial] using this shader. */
            QUAL_NONE = 0,
            
            /** The parameter will use a global value, defined in Project Settings. */
            QUAL_GLOBAL = 1,
            
            /** The parameter will be tied to the node with attached [ShaderMaterial] using this shader. */
            QUAL_INSTANCE = 2,
            
            /** Represents the size of the [enum Qualifier] enum. */
            QUAL_MAX = 3,
        }
    }
    /** A base type for the parameters within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparameter.html  
     */
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
    /** A reference to an existing [VisualShaderNodeParameter].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparameterref.html  
     */
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
            /** The particles will be accelerated based on their velocity. */
            MODE_LINEAR = 0,
            
            /** The particles will be accelerated towards or away from the center. */
            MODE_RADIAL = 1,
            
            /** The particles will be accelerated tangentially to the radius vector from center to their position. */
            MODE_TANGENTIAL = 2,
            
            /** Represents the size of the [enum Mode] enum. */
            MODE_MAX = 3,
        }
    }
    /** A visual shader node that accelerates particles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleaccelerator.html  
     */
    class VisualShaderNodeParticleAccelerator extends VisualShaderNode {
        set_mode(mode: VisualShaderNodeParticleAccelerator.Mode): void
        get_mode(): VisualShaderNodeParticleAccelerator.Mode
        
        /** Defines in what manner the particles will be accelerated. */
        mode: number /*i64*/
    }
    /** A visual shader node that makes particles emitted in a box shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleboxemitter.html  
     */
    class VisualShaderNodeParticleBoxEmitter extends VisualShaderNodeParticleEmitter {
    }
    /** A visual shader node that makes particles move in a cone shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleconevelocity.html  
     */
    class VisualShaderNodeParticleConeVelocity extends VisualShaderNode {
    }
    namespace VisualShaderNodeParticleEmit {
        enum EmitFlags {
            /** If enabled, the particle starts with the position defined by this node. */
            EMIT_FLAG_POSITION = 1,
            
            /** If enabled, the particle starts with the rotation and scale defined by this node. */
            EMIT_FLAG_ROT_SCALE = 2,
            
            /** If enabled,the particle starts with the velocity defined by this node. */
            EMIT_FLAG_VELOCITY = 4,
            
            /** If enabled, the particle starts with the color defined by this node. */
            EMIT_FLAG_COLOR = 8,
            
            /** If enabled, the particle starts with the `CUSTOM` data defined by this node. */
            EMIT_FLAG_CUSTOM = 16,
        }
    }
    /** A visual shader node that forces to emit a particle from a sub-emitter.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleemit.html  
     */
    class VisualShaderNodeParticleEmit extends VisualShaderNode {
        set_flags(flags: VisualShaderNodeParticleEmit.EmitFlags): void
        get_flags(): VisualShaderNodeParticleEmit.EmitFlags
        
        /** Flags used to override the properties defined in the sub-emitter's process material. */
        flags: number /*i64*/
    }
    /** A base class for particle emitters.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleemitter.html  
     */
    class VisualShaderNodeParticleEmitter extends VisualShaderNode {
        set_mode_2d(enabled: boolean): void
        is_mode_2d(): boolean
        
        /** If `true`, the result of this emitter is projected to 2D space. By default it is `false` and meant for use in 3D space. */
        mode_2d: boolean
    }
    /** A visual shader node that makes particles emitted in a shape defined by a [Mesh].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticlemeshemitter.html  
     */
    class VisualShaderNodeParticleMeshEmitter extends VisualShaderNodeParticleEmitter {
        set_mesh(mesh: Mesh): void
        get_mesh(): Mesh
        set_use_all_surfaces(enabled: boolean): void
        is_use_all_surfaces(): boolean
        set_surface_index(surface_index: number /*i64*/): void
        get_surface_index(): number /*i64*/
        
        /** The [Mesh] that defines emission shape. */
        mesh: Mesh
        
        /** If `true`, the particles will emit from all surfaces of the mesh. */
        use_all_surfaces: boolean
        
        /** Index of the surface that emits particles. [member use_all_surfaces] must be `false` for this to take effect. */
        surface_index: number /*i64*/
    }
    /** A visual shader helper node for multiplying position and rotation of particles.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticlemultiplybyaxisangle.html  
     */
    class VisualShaderNodeParticleMultiplyByAxisAngle extends VisualShaderNode {
        set_degrees_mode(enabled: boolean): void
        is_degrees_mode(): boolean
        
        /** If `true`, the angle will be interpreted in degrees instead of radians. */
        degrees_mode: boolean
    }
    /** Visual shader node that defines output values for particle emitting.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleoutput.html  
     */
    class VisualShaderNodeParticleOutput extends VisualShaderNodeOutput {
    }
    namespace VisualShaderNodeParticleRandomness {
        enum OpType {
            /** A floating-point scalar. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 2,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 3,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 4,
        }
    }
    /** Visual shader node for randomizing particle values.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticlerandomness.html  
     */
    class VisualShaderNodeParticleRandomness extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeParticleRandomness.OpType): void
        get_op_type(): VisualShaderNodeParticleRandomness.OpType
        
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    /** A visual shader node that makes particles emitted in a ring shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticleringemitter.html  
     */
    class VisualShaderNodeParticleRingEmitter extends VisualShaderNodeParticleEmitter {
    }
    /** A visual shader node that makes particles emitted in a sphere shape.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeparticlesphereemitter.html  
     */
    class VisualShaderNodeParticleSphereEmitter extends VisualShaderNodeParticleEmitter {
    }
    /** A visual shader node representing proximity fade effect.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeproximityfade.html  
     */
    class VisualShaderNodeProximityFade extends VisualShaderNode {
    }
    /** A visual shader node that generates a pseudo-random scalar.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernoderandomrange.html  
     */
    class VisualShaderNodeRandomRange extends VisualShaderNode {
    }
    /** A visual shader node for remap function.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernoderemap.html  
     */
    class VisualShaderNodeRemap extends VisualShaderNode {
    }
    /** Base class for resizable nodes in a visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernoderesizablebase.html  
     */
    class VisualShaderNodeResizableBase extends VisualShaderNode {
        set_size(size: Vector2): void
        get_size(): Vector2
        
        /** The size of the node in the visual shader graph. */
        size: Vector2
    }
    /** A visual shader node that modifies the rotation of the object using a rotation matrix.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernoderotationbyaxis.html  
     */
    class VisualShaderNodeRotationByAxis extends VisualShaderNode {
    }
    /** SDF raymarching algorithm to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodesdfraymarch.html  
     */
    class VisualShaderNodeSDFRaymarch extends VisualShaderNode {
    }
    /** A function to convert an SDF (signed-distance field) to screen UV, to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodesdftoscreenuv.html  
     */
    class VisualShaderNodeSDFToScreenUV extends VisualShaderNode {
    }
    namespace VisualShaderNodeSample3D {
        enum Source {
            /** Creates internal uniform and provides a way to assign it within node. */
            SOURCE_TEXTURE = 0,
            
            /** Use the uniform texture from sampler port. */
            SOURCE_PORT = 1,
            
            /** Represents the size of the [enum Source] enum. */
            SOURCE_MAX = 2,
        }
    }
    /** A base node for nodes which samples 3D textures in the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodesample3d.html  
     */
    class VisualShaderNodeSample3D extends VisualShaderNode {
        set_source(value: VisualShaderNodeSample3D.Source): void
        get_source(): VisualShaderNodeSample3D.Source
        
        /** An input source type. */
        source: number /*i64*/
    }
    /** A visual shader node that unpacks the screen normal texture in World Space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodescreennormalworldspace.html  
     */
    class VisualShaderNodeScreenNormalWorldSpace extends VisualShaderNode {
    }
    /** A function to convert screen UV to an SDF (signed-distance field), to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodescreenuvtosdf.html  
     */
    class VisualShaderNodeScreenUVToSDF extends VisualShaderNode {
    }
    namespace VisualShaderNodeSmoothStep {
        enum OpType {
            /** A floating-point scalar type. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** The `x` port uses a 2D vector type. The first two ports use a floating-point scalar type. */
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 3,
            
            /** The `x` port uses a 3D vector type. The first two ports use a floating-point scalar type. */
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 7,
        }
    }
    /** Calculates a SmoothStep function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodesmoothstep.html  
     */
    class VisualShaderNodeSmoothStep extends VisualShaderNode {
        set_op_type(op_type: VisualShaderNodeSmoothStep.OpType): void
        get_op_type(): VisualShaderNodeSmoothStep.OpType
        
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    namespace VisualShaderNodeStep {
        enum OpType {
            /** A floating-point scalar type. */
            OP_TYPE_SCALAR = 0,
            
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 1,
            
            /** The `x` port uses a 2D vector type, while the `edge` port uses a floating-point scalar type. */
            OP_TYPE_VECTOR_2D_SCALAR = 2,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 3,
            
            /** The `x` port uses a 3D vector type, while the `edge` port uses a floating-point scalar type. */
            OP_TYPE_VECTOR_3D_SCALAR = 4,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 5,
            
            /** The `a` and `b` ports use a 4D vector type. The `weight` port uses a scalar type. */
            OP_TYPE_VECTOR_4D_SCALAR = 6,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 7,
        }
    }
    /** Calculates a Step function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodestep.html  
     */
    class VisualShaderNodeStep extends VisualShaderNode {
        set_op_type(op_type: VisualShaderNodeStep.OpType): void
        get_op_type(): VisualShaderNodeStep.OpType
        
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    namespace VisualShaderNodeSwitch {
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
            
            /** A boolean type. */
            OP_TYPE_BOOLEAN = 6,
            
            /** A transform type. */
            OP_TYPE_TRANSFORM = 7,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 8,
        }
    }
    /** A selector function for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeswitch.html  
     */
    class VisualShaderNodeSwitch extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeSwitch.OpType): void
        get_op_type(): VisualShaderNodeSwitch.OpType
        
        /** A type of operands and returned value. */
        op_type: number /*i64*/
    }
    namespace VisualShaderNodeTexture {
        enum Source {
            /** Use the texture given as an argument for this function. */
            SOURCE_TEXTURE = 0,
            
            /** Use the current viewport's texture as the source. */
            SOURCE_SCREEN = 1,
            
            /** Use the texture from this shader's texture built-in (e.g. a texture of a [Sprite2D]). */
            SOURCE_2D_TEXTURE = 2,
            
            /** Use the texture from this shader's normal map built-in. */
            SOURCE_2D_NORMAL = 3,
            
            /** Use the depth texture captured during the depth prepass. Only available when the depth prepass is used (i.e. in spatial shaders and in the forward_plus or gl_compatibility renderers). */
            SOURCE_DEPTH = 4,
            
            /** Use the texture provided in the input port for this function. */
            SOURCE_PORT = 5,
            
            /** Use the normal buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer). */
            SOURCE_3D_NORMAL = 6,
            
            /** Use the roughness buffer captured during the depth prepass. Only available when the normal-roughness buffer is available (i.e. in spatial shaders and in the forward_plus renderer). */
            SOURCE_ROUGHNESS = 7,
            
            /** Represents the size of the [enum Source] enum. */
            SOURCE_MAX = 8,
        }
        enum TextureType {
            /** No hints are added to the uniform declaration. */
            TYPE_DATA = 0,
            
            /** Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion. */
            TYPE_COLOR = 1,
            
            /** Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map. */
            TYPE_NORMAL_MAP = 2,
            
            /** Represents the size of the [enum TextureType] enum. */
            TYPE_MAX = 3,
        }
    }
    /** Performs a 2D texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexture.html  
     */
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
    /** A 2D texture uniform array to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexture2darray.html  
     */
    class VisualShaderNodeTexture2DArray extends VisualShaderNodeSample3D {
        set_texture_array(value: Texture2DArray): void
        get_texture_array(): Texture2DArray
        
        /** A source texture array. Used if [member VisualShaderNodeSample3D.source] is set to [constant VisualShaderNodeSample3D.SOURCE_TEXTURE]. */
        texture_array: Texture2DArray
    }
    /** A visual shader node for shader parameter (uniform) of type [Texture2DArray].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexture2darrayparameter.html  
     */
    class VisualShaderNodeTexture2DArrayParameter extends VisualShaderNodeTextureParameter {
    }
    /** Provides a 2D texture parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexture2dparameter.html  
     */
    class VisualShaderNodeTexture2DParameter extends VisualShaderNodeTextureParameter {
    }
    /** Performs a 3D texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexture3d.html  
     */
    class VisualShaderNodeTexture3D extends VisualShaderNodeSample3D {
        set_texture(value: Texture3D): void
        get_texture(): Texture3D
        
        /** A source texture. Used if [member VisualShaderNodeSample3D.source] is set to [constant VisualShaderNodeSample3D.SOURCE_TEXTURE]. */
        texture: Texture3D
    }
    /** Provides a 3D texture parameter within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexture3dparameter.html  
     */
    class VisualShaderNodeTexture3DParameter extends VisualShaderNodeTextureParameter {
    }
    namespace VisualShaderNodeTextureParameter {
        enum TextureType {
            /** No hints are added to the uniform declaration. */
            TYPE_DATA = 0,
            
            /** Adds `source_color` as hint to the uniform declaration for proper sRGB to linear conversion. */
            TYPE_COLOR = 1,
            
            /** Adds `hint_normal` as hint to the uniform declaration, which internally converts the texture for proper usage as normal map. */
            TYPE_NORMAL_MAP = 2,
            
            /** Adds `hint_anisotropy` as hint to the uniform declaration to use for a flowmap. */
            TYPE_ANISOTROPY = 3,
            
            /** Represents the size of the [enum TextureType] enum. */
            TYPE_MAX = 4,
        }
        enum ColorDefault {
            /** Defaults to fully opaque white color. */
            COLOR_DEFAULT_WHITE = 0,
            
            /** Defaults to fully opaque black color. */
            COLOR_DEFAULT_BLACK = 1,
            
            /** Defaults to fully transparent black color. */
            COLOR_DEFAULT_TRANSPARENT = 2,
            
            /** Represents the size of the [enum ColorDefault] enum. */
            COLOR_DEFAULT_MAX = 3,
        }
        enum TextureFilter {
            /** Sample the texture using the filter determined by the node this shader is attached to. */
            FILTER_DEFAULT = 0,
            
            /** The texture filter reads from the nearest pixel only. This makes the texture look pixelated from up close, and grainy from a distance (due to mipmaps not being sampled). */
            FILTER_NEAREST = 1,
            
            /** The texture filter blends between the nearest 4 pixels. This makes the texture look smooth from up close, and grainy from a distance (due to mipmaps not being sampled). */
            FILTER_LINEAR = 2,
            
            /** The texture filter reads from the nearest pixel and blends between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look pixelated from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            FILTER_NEAREST_MIPMAP = 3,
            
            /** The texture filter blends between the nearest 4 pixels and between the nearest 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`). This makes the texture look smooth from up close, and smooth from a distance.  
             *  Use this for non-pixel art textures that may be viewed at a low scale (e.g. due to [Camera2D] zoom or sprite scaling), as mipmaps are important to smooth out pixels that are smaller than on-screen pixels.  
             */
            FILTER_LINEAR_MIPMAP = 4,
            
            /** The texture filter reads from the nearest pixel and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look pixelated from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
             *      
             *  **Note:** This texture filter is rarely useful in 2D projects. [constant FILTER_NEAREST_MIPMAP] is usually more appropriate in this case.  
             */
            FILTER_NEAREST_MIPMAP_ANISOTROPIC = 5,
            
            /** The texture filter blends between the nearest 4 pixels and blends between 2 mipmaps (or uses the nearest mipmap if [member ProjectSettings.rendering/textures/default_filters/use_nearest_mipmap_filter] is `true`) based on the angle between the surface and the camera view. This makes the texture look smooth from up close, and smooth from a distance. Anisotropic filtering improves texture quality on surfaces that are almost in line with the camera, but is slightly slower. The anisotropic filtering level can be changed by adjusting [member ProjectSettings.rendering/textures/default_filters/anisotropic_filtering_level].  
             *      
             *  **Note:** This texture filter is rarely useful in 2D projects. [constant FILTER_LINEAR_MIPMAP] is usually more appropriate in this case.  
             */
            FILTER_LINEAR_MIPMAP_ANISOTROPIC = 6,
            
            /** Represents the size of the [enum TextureFilter] enum. */
            FILTER_MAX = 7,
        }
        enum TextureRepeat {
            /** Sample the texture using the repeat mode determined by the node this shader is attached to. */
            REPEAT_DEFAULT = 0,
            
            /** Texture will repeat normally. */
            REPEAT_ENABLED = 1,
            
            /** Texture will not repeat. */
            REPEAT_DISABLED = 2,
            
            /** Represents the size of the [enum TextureRepeat] enum. */
            REPEAT_MAX = 3,
        }
        enum TextureSource {
            /** The texture source is not specified in the shader. */
            SOURCE_NONE = 0,
            
            /** The texture source is the screen texture which captures all opaque objects drawn this frame. */
            SOURCE_SCREEN = 1,
            
            /** The texture source is the depth texture from the depth prepass. */
            SOURCE_DEPTH = 2,
            
            /** The texture source is the normal-roughness buffer from the depth prepass. */
            SOURCE_NORMAL_ROUGHNESS = 3,
            
            /** Represents the size of the [enum TextureSource] enum. */
            SOURCE_MAX = 4,
        }
    }
    /** Performs a uniform texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetextureparameter.html  
     */
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
    /** Performs a uniform texture lookup with triplanar within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetextureparametertriplanar.html  
     */
    class VisualShaderNodeTextureParameterTriplanar extends VisualShaderNodeTextureParameter {
    }
    /** Performs an SDF (signed-distance field) texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexturesdf.html  
     */
    class VisualShaderNodeTextureSDF extends VisualShaderNode {
    }
    /** Performs an SDF (signed-distance field) normal texture lookup within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetexturesdfnormal.html  
     */
    class VisualShaderNodeTextureSDFNormal extends VisualShaderNode {
    }
    /** Composes a [Transform3D] from four [Vector3]s within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformcompose.html  
     */
    class VisualShaderNodeTransformCompose extends VisualShaderNode {
    }
    /** A [Transform3D] constant for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformconstant.html  
     */
    class VisualShaderNodeTransformConstant extends VisualShaderNodeConstant {
        set_constant(constant: Transform3D): void
        get_constant(): Transform3D
        
        /** A [Transform3D] constant which represents the state of this node. */
        constant: Transform3D
    }
    /** Decomposes a [Transform3D] into four [Vector3]s within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformdecompose.html  
     */
    class VisualShaderNodeTransformDecompose extends VisualShaderNode {
    }
    namespace VisualShaderNodeTransformFunc {
        enum Function {
            /** Perform the inverse operation on the [Transform3D] matrix. */
            FUNC_INVERSE = 0,
            
            /** Perform the transpose operation on the [Transform3D] matrix. */
            FUNC_TRANSPOSE = 1,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 2,
        }
    }
    /** Computes a [Transform3D] function within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformfunc.html  
     */
    class VisualShaderNodeTransformFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeTransformFunc.Function): void
        get_function(): VisualShaderNodeTransformFunc.Function
        
        /** The function to be computed. See [enum Function] for options. */
        function: number /*i64*/
    }
    namespace VisualShaderNodeTransformOp {
        enum Operator {
            /** Multiplies transform `a` by the transform `b`. */
            OP_AxB = 0,
            
            /** Multiplies transform `b` by the transform `a`. */
            OP_BxA = 1,
            
            /** Performs a component-wise multiplication of transform `a` by the transform `b`. */
            OP_AxB_COMP = 2,
            
            /** Performs a component-wise multiplication of transform `b` by the transform `a`. */
            OP_BxA_COMP = 3,
            
            /** Adds two transforms. */
            OP_ADD = 4,
            
            /** Subtracts the transform `a` from the transform `b`. */
            OP_A_MINUS_B = 5,
            
            /** Subtracts the transform `b` from the transform `a`. */
            OP_B_MINUS_A = 6,
            
            /** Divides the transform `a` by the transform `b`. */
            OP_A_DIV_B = 7,
            
            /** Divides the transform `b` by the transform `a`. */
            OP_B_DIV_A = 8,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_MAX = 9,
        }
    }
    /** A [Transform3D] operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformop.html  
     */
    class VisualShaderNodeTransformOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeTransformOp.Operator): void
        get_operator(): VisualShaderNodeTransformOp.Operator
        
        /** The type of the operation to be performed on the transforms. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    /** A [Transform3D] parameter for use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformparameter.html  
     */
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
            /** Multiplies transform `a` by the vector `b`. */
            OP_AxB = 0,
            
            /** Multiplies vector `b` by the transform `a`. */
            OP_BxA = 1,
            
            /** Multiplies transform `a` by the vector `b`, skipping the last row and column of the transform. */
            OP_3x3_AxB = 2,
            
            /** Multiplies vector `b` by the transform `a`, skipping the last row and column of the transform. */
            OP_3x3_BxA = 3,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_MAX = 4,
        }
    }
    /** Multiplies a [Transform3D] and a [Vector3] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodetransformvecmult.html  
     */
    class VisualShaderNodeTransformVecMult extends VisualShaderNode {
        set_operator(op: VisualShaderNodeTransformVecMult.Operator): void
        get_operator(): VisualShaderNodeTransformVecMult.Operator
        
        /** The multiplication type to be performed. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    /** An unsigned scalar integer constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeuintconstant.html  
     */
    class VisualShaderNodeUIntConstant extends VisualShaderNodeConstant {
        set_constant(constant: number /*i64*/): void
        get_constant(): number /*i64*/
        
        /** An unsigned integer constant which represents a state of this node. */
        constant: number /*i64*/
    }
    namespace VisualShaderNodeUIntFunc {
        enum Function {
            /** Negates the `x` using `-(x)`. */
            FUNC_NEGATE = 0,
            
            /** Returns the result of bitwise `NOT` operation on the integer. Translates to `~a` in the Godot Shader Language. */
            FUNC_BITWISE_NOT = 1,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 2,
        }
    }
    /** An unsigned scalar integer function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeuintfunc.html  
     */
    class VisualShaderNodeUIntFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeUIntFunc.Function): void
        get_function(): VisualShaderNodeUIntFunc.Function
        
        /** A function to be applied to the scalar. See [enum Function] for options. */
        function: number /*i64*/
    }
    namespace VisualShaderNodeUIntOp {
        enum Operator {
            /** Sums two numbers using `a + b`. */
            OP_ADD = 0,
            
            /** Subtracts two numbers using `a - b`. */
            OP_SUB = 1,
            
            /** Multiplies two numbers using `a * b`. */
            OP_MUL = 2,
            
            /** Divides two numbers using `a / b`. */
            OP_DIV = 3,
            
            /** Calculates the remainder of two numbers using `a % b`. */
            OP_MOD = 4,
            
            /** Returns the greater of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MAX = 5,
            
            /** Returns the lesser of two numbers. Translates to `max(a, b)` in the Godot Shader Language. */
            OP_MIN = 6,
            
            /** Returns the result of bitwise `AND` operation on the integer. Translates to `a & b` in the Godot Shader Language. */
            OP_BITWISE_AND = 7,
            
            /** Returns the result of bitwise `OR` operation for two integers. Translates to `a | b` in the Godot Shader Language. */
            OP_BITWISE_OR = 8,
            
            /** Returns the result of bitwise `XOR` operation for two integers. Translates to `a ^ b` in the Godot Shader Language. */
            OP_BITWISE_XOR = 9,
            
            /** Returns the result of bitwise left shift operation on the integer. Translates to `a << b` in the Godot Shader Language. */
            OP_BITWISE_LEFT_SHIFT = 10,
            
            /** Returns the result of bitwise right shift operation on the integer. Translates to `a >> b` in the Godot Shader Language. */
            OP_BITWISE_RIGHT_SHIFT = 11,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_ENUM_SIZE = 12,
        }
    }
    /** An unsigned integer scalar operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeuintop.html  
     */
    class VisualShaderNodeUIntOp extends VisualShaderNode {
        set_operator(op: VisualShaderNodeUIntOp.Operator): void
        get_operator(): VisualShaderNodeUIntOp.Operator
        
        /** An operator to be applied to the inputs. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    /** A visual shader node for shader parameter (uniform) of type unsigned [int].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeuintparameter.html  
     */
    class VisualShaderNodeUIntParameter extends VisualShaderNodeParameter {
        set_default_value_enabled(enabled: boolean): void
        is_default_value_enabled(): boolean
        set_default_value(value: number /*i64*/): void
        get_default_value(): number /*i64*/
        
        /** If `true`, the node will have a custom default value. */
        default_value_enabled: boolean
        
        /** Default value of this parameter, which will be used if not set externally. [member default_value_enabled] must be enabled; defaults to `0` otherwise. */
        default_value: number /*i64*/
    }
    namespace VisualShaderNodeUVFunc {
        enum Function {
            /** Translates `uv` by using `scale` and `offset` values using the following formula: `uv = uv + offset * scale`. `uv` port is connected to `UV` built-in by default. */
            FUNC_PANNING = 0,
            
            /** Scales `uv` by using `scale` and `pivot` values using the following formula: `uv = (uv - pivot) * scale + pivot`. `uv` port is connected to `UV` built-in by default. */
            FUNC_SCALING = 1,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 2,
        }
    }
    /** Contains functions to modify texture coordinates (`uv`) to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeuvfunc.html  
     */
    class VisualShaderNodeUVFunc extends VisualShaderNode {
        set_function(func: VisualShaderNodeUVFunc.Function): void
        get_function(): VisualShaderNodeUVFunc.Function
        
        /** A function to be applied to the texture coordinates. See [enum Function] for options. */
        function: number /*i64*/
    }
    /** A visual shader node that modifies the texture UV using polar coordinates.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeuvpolarcoord.html  
     */
    class VisualShaderNodeUVPolarCoord extends VisualShaderNode {
    }
    /** A visual shader node that represents a "varying" shader value.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevarying.html  
     */
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
    /** A visual shader node that gets a value of a varying.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevaryinggetter.html  
     */
    class VisualShaderNodeVaryingGetter extends VisualShaderNodeVarying {
    }
    /** A visual shader node that sets a value of a varying.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevaryingsetter.html  
     */
    class VisualShaderNodeVaryingSetter extends VisualShaderNodeVarying {
    }
    /** A [Vector2] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevec2constant.html  
     */
    class VisualShaderNodeVec2Constant extends VisualShaderNodeConstant {
        set_constant(constant: Vector2): void
        get_constant(): Vector2
        
        /** A [Vector2] constant which represents the state of this node. */
        constant: Vector2
    }
    /** A [Vector2] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevec2parameter.html  
     */
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
    /** A [Vector3] constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevec3constant.html  
     */
    class VisualShaderNodeVec3Constant extends VisualShaderNodeConstant {
        set_constant(constant: Vector3): void
        get_constant(): Vector3
        
        /** A [Vector3] constant which represents the state of this node. */
        constant: Vector3
    }
    /** A [Vector3] parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevec3parameter.html  
     */
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
    /** A 4D vector constant to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevec4constant.html  
     */
    class VisualShaderNodeVec4Constant extends VisualShaderNodeConstant {
        set_constant(constant: Quaternion): void
        get_constant(): Quaternion
        
        /** A 4D vector (represented as a [Quaternion]) constant which represents the state of this node. */
        constant: Quaternion
    }
    /** A 4D vector parameter to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevec4parameter.html  
     */
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
            /** A 2D vector type. */
            OP_TYPE_VECTOR_2D = 0,
            
            /** A 3D vector type. */
            OP_TYPE_VECTOR_3D = 1,
            
            /** A 4D vector type. */
            OP_TYPE_VECTOR_4D = 2,
            
            /** Represents the size of the [enum OpType] enum. */
            OP_TYPE_MAX = 3,
        }
    }
    /** A base type for the nodes that perform vector operations within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectorbase.html  
     */
    class VisualShaderNodeVectorBase extends VisualShaderNode {
        set_op_type(type: VisualShaderNodeVectorBase.OpType): void
        get_op_type(): VisualShaderNodeVectorBase.OpType
        
        /** A vector type that this operation is performed on. */
        op_type: number /*i64*/
    }
    /** Composes a [Vector2], [Vector3] or 4D vector (represented as a [Quaternion]) from scalars within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectorcompose.html  
     */
    class VisualShaderNodeVectorCompose extends VisualShaderNodeVectorBase {
    }
    /** Decomposes a [Vector2], [Vector3] or 4D vector (represented as a [Quaternion]) into scalars within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectordecompose.html  
     */
    class VisualShaderNodeVectorDecompose extends VisualShaderNodeVectorBase {
    }
    /** Returns the distance between two points. To be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectordistance.html  
     */
    class VisualShaderNodeVectorDistance extends VisualShaderNodeVectorBase {
    }
    namespace VisualShaderNodeVectorFunc {
        enum Function {
            /** Normalizes the vector so that it has a length of `1` but points in the same direction. */
            FUNC_NORMALIZE = 0,
            
            /** Clamps the value between `0.0` and `1.0`. */
            FUNC_SATURATE = 1,
            
            /** Returns the opposite value of the parameter. */
            FUNC_NEGATE = 2,
            
            /** Returns `1/vector`. */
            FUNC_RECIPROCAL = 3,
            
            /** Returns the absolute value of the parameter. */
            FUNC_ABS = 4,
            
            /** Returns the arc-cosine of the parameter. */
            FUNC_ACOS = 5,
            
            /** Returns the inverse hyperbolic cosine of the parameter. */
            FUNC_ACOSH = 6,
            
            /** Returns the arc-sine of the parameter. */
            FUNC_ASIN = 7,
            
            /** Returns the inverse hyperbolic sine of the parameter. */
            FUNC_ASINH = 8,
            
            /** Returns the arc-tangent of the parameter. */
            FUNC_ATAN = 9,
            
            /** Returns the inverse hyperbolic tangent of the parameter. */
            FUNC_ATANH = 10,
            
            /** Finds the nearest integer that is greater than or equal to the parameter. */
            FUNC_CEIL = 11,
            
            /** Returns the cosine of the parameter. */
            FUNC_COS = 12,
            
            /** Returns the hyperbolic cosine of the parameter. */
            FUNC_COSH = 13,
            
            /** Converts a quantity in radians to degrees. */
            FUNC_DEGREES = 14,
            
            /** Base-e Exponential. */
            FUNC_EXP = 15,
            
            /** Base-2 Exponential. */
            FUNC_EXP2 = 16,
            
            /** Finds the nearest integer less than or equal to the parameter. */
            FUNC_FLOOR = 17,
            
            /** Computes the fractional part of the argument. */
            FUNC_FRACT = 18,
            
            /** Returns the inverse of the square root of the parameter. */
            FUNC_INVERSE_SQRT = 19,
            
            /** Natural logarithm. */
            FUNC_LOG = 20,
            
            /** Base-2 logarithm. */
            FUNC_LOG2 = 21,
            
            /** Converts a quantity in degrees to radians. */
            FUNC_RADIANS = 22,
            
            /** Finds the nearest integer to the parameter. */
            FUNC_ROUND = 23,
            
            /** Finds the nearest even integer to the parameter. */
            FUNC_ROUNDEVEN = 24,
            
            /** Extracts the sign of the parameter, i.e. returns `-1` if the parameter is negative, `1` if it's positive and `0` otherwise. */
            FUNC_SIGN = 25,
            
            /** Returns the sine of the parameter. */
            FUNC_SIN = 26,
            
            /** Returns the hyperbolic sine of the parameter. */
            FUNC_SINH = 27,
            
            /** Returns the square root of the parameter. */
            FUNC_SQRT = 28,
            
            /** Returns the tangent of the parameter. */
            FUNC_TAN = 29,
            
            /** Returns the hyperbolic tangent of the parameter. */
            FUNC_TANH = 30,
            
            /** Returns a value equal to the nearest integer to the parameter whose absolute value is not larger than the absolute value of the parameter. */
            FUNC_TRUNC = 31,
            
            /** Returns `1.0 - vector`. */
            FUNC_ONEMINUS = 32,
            
            /** Represents the size of the [enum Function] enum. */
            FUNC_MAX = 33,
        }
    }
    /** A vector function to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectorfunc.html  
     */
    class VisualShaderNodeVectorFunc extends VisualShaderNodeVectorBase {
        set_function(func: VisualShaderNodeVectorFunc.Function): void
        get_function(): VisualShaderNodeVectorFunc.Function
        
        /** The function to be performed. See [enum Function] for options. */
        function: number /*i64*/
    }
    /** Returns the length of a [Vector3] within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectorlen.html  
     */
    class VisualShaderNodeVectorLen extends VisualShaderNodeVectorBase {
    }
    namespace VisualShaderNodeVectorOp {
        enum Operator {
            /** Adds two vectors. */
            OP_ADD = 0,
            
            /** Subtracts a vector from a vector. */
            OP_SUB = 1,
            
            /** Multiplies two vectors. */
            OP_MUL = 2,
            
            /** Divides vector by vector. */
            OP_DIV = 3,
            
            /** Returns the remainder of the two vectors. */
            OP_MOD = 4,
            
            /** Returns the value of the first parameter raised to the power of the second, for each component of the vectors. */
            OP_POW = 5,
            
            /** Returns the greater of two values, for each component of the vectors. */
            OP_MAX = 6,
            
            /** Returns the lesser of two values, for each component of the vectors. */
            OP_MIN = 7,
            
            /** Calculates the cross product of two vectors. */
            OP_CROSS = 8,
            
            /** Returns the arc-tangent of the parameters. */
            OP_ATAN2 = 9,
            
            /** Returns the vector that points in the direction of reflection. `a` is incident vector and `b` is the normal vector. */
            OP_REFLECT = 10,
            
            /** Vector step operator. Returns `0.0` if `a` is smaller than `b` and `1.0` otherwise. */
            OP_STEP = 11,
            
            /** Represents the size of the [enum Operator] enum. */
            OP_ENUM_SIZE = 12,
        }
    }
    /** A vector operator to be used within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectorop.html  
     */
    class VisualShaderNodeVectorOp extends VisualShaderNodeVectorBase {
        set_operator(op: VisualShaderNodeVectorOp.Operator): void
        get_operator(): VisualShaderNodeVectorOp.Operator
        
        /** The operator to be used. See [enum Operator] for options. */
        operator: number /*i64*/
    }
    /** Returns the vector that points in the direction of refraction. For use within the visual shader graph.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodevectorrefract.html  
     */
    class VisualShaderNodeVectorRefract extends VisualShaderNodeVectorBase {
    }
    /** A visual shader node that calculates the position of the pixel in world space using the depth texture.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_visualshadernodeworldpositionfromdepth.html  
     */
    class VisualShaderNodeWorldPositionFromDepth extends VisualShaderNode {
    }
    namespace VoxelGI {
        enum Subdiv {
            /** Use 64 subdivisions. This is the lowest quality setting, but the fastest. Use it if you can, but especially use it on lower-end hardware. */
            SUBDIV_64 = 0,
            
            /** Use 128 subdivisions. This is the default quality setting. */
            SUBDIV_128 = 1,
            
            /** Use 256 subdivisions. */
            SUBDIV_256 = 2,
            
            /** Use 512 subdivisions. This is the highest quality setting, but the slowest. On lower-end hardware, this could cause the GPU to stall. */
            SUBDIV_512 = 3,
            
            /** Represents the size of the [enum Subdiv] enum. */
            SUBDIV_MAX = 4,
        }
    }
    /** Real-time global illumination (GI) probe.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_voxelgi.html  
     */
    class VoxelGI extends VisualInstance3D {
        set_probe_data(data: VoxelGIData): void
        get_probe_data(): VoxelGIData
        set_subdiv(subdiv: VoxelGI.Subdiv): void
        get_subdiv(): VoxelGI.Subdiv
        set_size(size: Vector3): void
        get_size(): Vector3
        set_camera_attributes(camera_attributes: CameraAttributes): void
        get_camera_attributes(): CameraAttributes
        
        /** Bakes the effect from all [GeometryInstance3D]s marked with [constant GeometryInstance3D.GI_MODE_STATIC] and [Light3D]s marked with either [constant Light3D.BAKE_STATIC] or [constant Light3D.BAKE_DYNAMIC]. If [param create_visual_debug] is `true`, after baking the light, this will generate a [MultiMesh] that has a cube representing each solid cell with each cube colored to the cell's albedo color. This can be used to visualize the [VoxelGI]'s data and debug any issues that may be occurring.  
         *      
         *  **Note:** [method bake] works from the editor and in exported projects. This makes it suitable for procedurally generated or user-built levels. Baking a [VoxelGI] node generally takes from 5 to 20 seconds in most scenes. Reducing [member subdiv] can speed up baking.  
         *      
         *  **Note:** [GeometryInstance3D]s and [Light3D]s must be fully ready before [method bake] is called. If you are procedurally creating those and some meshes or lights are missing from your baked [VoxelGI], use `call_deferred("bake")` instead of calling [method bake] directly.  
         */
        bake(from_node: Node = <any> {} /*compound.type from nil*/, create_visual_debug: boolean = false): void
        
        /** Calls [method bake] with `create_visual_debug` enabled. */
        debug_bake(): void
        
        /** Number of times to subdivide the grid that the [VoxelGI] operates on. A higher number results in finer detail and thus higher visual quality, while lower numbers result in better performance. */
        subdiv: number /*i64*/
        
        /** The size of the area covered by the [VoxelGI]. If you make the size larger without increasing the subdivisions with [member subdiv], the size of each cell will increase and result in lower detailed lighting.  
         *      
         *  **Note:** Size is clamped to 1.0 unit or more on each axis.  
         */
        size: Vector3
        
        /** The [CameraAttributes] resource that specifies exposure levels to bake at. Auto-exposure and non exposure properties will be ignored. Exposure settings should be used to reduce the dynamic range present when baking. If exposure is too high, the [VoxelGI] will have banding artifacts or may have over-exposure artifacts. */
        camera_attributes: CameraAttributesPractical | CameraAttributesPhysical
        
        /** The [VoxelGIData] resource that holds the data for this [VoxelGI]. */
        data: VoxelGIData
    }
    /** Contains baked voxel global illumination data for use in a [VoxelGI] node.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_voxelgidata.html  
     */
    class VoxelGIData extends Resource {
        allocate(to_cell_xform: Transform3D, aabb: AABB, octree_size: Vector3, octree_cells: PackedByteArray, data_cells: PackedByteArray, distance_field: PackedByteArray, level_counts: PackedInt32Array): void
        
        /** Returns the bounds of the baked voxel data as an [AABB], which should match [member VoxelGI.size] after being baked (which only contains the size as a [Vector3]).  
         *      
         *  **Note:** If the size was modified without baking the VoxelGI data, then the value of [method get_bounds] and [member VoxelGI.size] will not match.  
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
        
        /** The dynamic range to use (`1.0` represents a low dynamic range scene brightness). Higher values can be used to provide brighter indirect lighting, at the cost of more visible color banding in dark areas (both in indirect lighting and reflections). To avoid color banding, it's recommended to use the lowest value that does not result in visible light clipping. */
        dynamic_range: number /*f64*/
        
        /** The energy of the indirect lighting and reflections produced by the [VoxelGI] node. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        energy: number /*f64*/
        
        /** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. To prioritize hiding self-reflections over lighting quality, set [member bias] to `0.0` and [member normal_bias] to a value between `1.0` and `2.0`. */
        bias: number /*f64*/
        
        /** The normal bias to use for indirect lighting and reflections. Higher values reduce self-reflections visible in non-rough materials, at the cost of more visible light leaking and flatter-looking indirect lighting. See also [member bias]. To prioritize hiding self-reflections over lighting quality, set [member bias] to `0.0` and [member normal_bias] to a value between `1.0` and `2.0`. */
        normal_bias: number /*f64*/
        
        /** The multiplier to use when light bounces off a surface. Higher values result in brighter indirect lighting. If indirect lighting looks too flat, try decreasing [member propagation] while increasing [member energy] at the same time. See also [member use_two_bounces] which influences the indirect lighting's effective brightness. */
        propagation: number /*f64*/
        
        /** If `true`, performs two bounces of indirect lighting instead of one. This makes indirect lighting look more natural and brighter at a small performance cost. The second bounce is also visible in reflections. If the scene appears too bright after enabling [member use_two_bounces], adjust [member propagation] and [member energy]. */
        use_two_bounces: boolean
        
        /** If `true`, [Environment] lighting is ignored by the [VoxelGI] node. If `false`, [Environment] lighting is taken into account by the [VoxelGI] node. [Environment] lighting updates in real-time, which means it can be changed without having to bake the [VoxelGI] node again. */
        interior: boolean
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_voxelgieditorplugin.html */
    class VoxelGIEditorPlugin extends EditorPlugin {
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_voxelgigizmoplugin.html */
    class VoxelGIGizmoPlugin extends EditorNode3DGizmoPlugin {
    }
    /** Holds an [Object]. If the object is [RefCounted], it doesn't update the reference count.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_weakref.html  
     */
    class WeakRef extends RefCounted {
        /** Returns the [Object] this weakref is referring to. Returns `null` if that object no longer exists. */
        get_ref(): any
    }
    namespace WebRTCDataChannel {
        enum WriteMode {
            /** Tells the channel to send data over this channel as text. An external peer (non-Godot) would receive this as a string. */
            WRITE_MODE_TEXT = 0,
            
            /** Tells the channel to send data over this channel as binary. An external peer (non-Godot) would receive this as array buffer or blob. */
            WRITE_MODE_BINARY = 1,
        }
        enum ChannelState {
            /** The channel was created, but it's still trying to connect. */
            STATE_CONNECTING = 0,
            
            /** The channel is currently open, and data can flow over it. */
            STATE_OPEN = 1,
            
            /** The channel is being closed, no new messages will be accepted, but those already in queue will be flushed. */
            STATE_CLOSING = 2,
            
            /** The channel was closed, or connection failed. */
            STATE_CLOSED = 3,
        }
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_webrtcdatachannel.html */
    class WebRTCDataChannel extends PacketPeer {
        /** Reserved, but not used for now. */
        poll(): GodotError
        
        /** Closes this data channel, notifying the other peer. */
        close(): void
        
        /** Returns `true` if the last received packet was transferred as text. See [member write_mode]. */
        was_string_packet(): boolean
        set_write_mode(write_mode: WebRTCDataChannel.WriteMode): void
        get_write_mode(): WebRTCDataChannel.WriteMode
        
        /** Returns the current state of this channel, see [enum ChannelState]. */
        get_ready_state(): WebRTCDataChannel.ChannelState
        
        /** Returns the label assigned to this channel during creation. */
        get_label(): string
        
        /** Returns `true` if this channel was created with ordering enabled (default). */
        is_ordered(): boolean
        
        /** Returns the ID assigned to this channel during creation (or auto-assigned during negotiation).  
         *  If the channel is not negotiated out-of-band the ID will only be available after the connection is established (will return `65535` until then).  
         */
        get_id(): number /*i64*/
        
        /** Returns the `maxPacketLifeTime` value assigned to this channel during creation.  
         *  Will be `65535` if not specified.  
         */
        get_max_packet_life_time(): number /*i64*/
        
        /** Returns the `maxRetransmits` value assigned to this channel during creation.  
         *  Will be `65535` if not specified.  
         */
        get_max_retransmits(): number /*i64*/
        
        /** Returns the sub-protocol assigned to this channel during creation. An empty string if not specified. */
        get_protocol(): string
        
        /** Returns `true` if this channel was created with out-of-band configuration. */
        is_negotiated(): boolean
        
        /** Returns the number of bytes currently queued to be sent over this channel. */
        get_buffered_amount(): number /*i64*/
        
        /** The transfer mode to use when sending outgoing packet. Either text or binary. */
        write_mode: number /*i64*/
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_webrtcdatachannelextension.html */
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
    /** A simple interface to create a peer-to-peer mesh network composed of [WebRTCPeerConnection] that is compatible with the [MultiplayerAPI].  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_webrtcmultiplayerpeer.html  
     */
    class WebRTCMultiplayerPeer extends MultiplayerPeer {
        /** Initialize the multiplayer peer as a server (with unique ID of `1`). This mode enables [method MultiplayerPeer.is_server_relay_supported], allowing the upper [MultiplayerAPI] layer to perform peer exchange and packet relaying.  
         *  You can optionally specify a [param channels_config] array of [enum MultiplayerPeer.TransferMode] which will be used to create extra channels (WebRTC only supports one transfer mode per channel).  
         */
        create_server(channels_config: Array = <any> {} /*compound.type from 28([object Object])*/): GodotError
        
        /** Initialize the multiplayer peer as a client with the given [param peer_id] (must be between 2 and 2147483647). In this mode, you should only call [method add_peer] once and with [param peer_id] of `1`. This mode enables [method MultiplayerPeer.is_server_relay_supported], allowing the upper [MultiplayerAPI] layer to perform peer exchange and packet relaying.  
         *  You can optionally specify a [param channels_config] array of [enum MultiplayerPeer.TransferMode] which will be used to create extra channels (WebRTC only supports one transfer mode per channel).  
         */
        create_client(peer_id: number /*i64*/, channels_config: Array = <any> {} /*compound.type from 28([object Object])*/): GodotError
        
        /** Initialize the multiplayer peer as a mesh (i.e. all peers connect to each other) with the given [param peer_id] (must be between 1 and 2147483647). */
        create_mesh(peer_id: number /*i64*/, channels_config: Array = <any> {} /*compound.type from 28([object Object])*/): GodotError
        
        /** Add a new peer to the mesh with the given [param peer_id]. The [WebRTCPeerConnection] must be in state [constant WebRTCPeerConnection.STATE_NEW].  
         *  Three channels will be created for reliable, unreliable, and ordered transport. The value of [param unreliable_lifetime] will be passed to the `"maxPacketLifetime"` option when creating unreliable and ordered channels (see [method WebRTCPeerConnection.create_data_channel]).  
         */
        add_peer(peer: WebRTCPeerConnection, peer_id: number /*i64*/, unreliable_lifetime: number /*i64*/ = 1): GodotError
        
        /** Remove the peer with given [param peer_id] from the mesh. If the peer was connected, and [signal MultiplayerPeer.peer_connected] was emitted for it, then [signal MultiplayerPeer.peer_disconnected] will be emitted. */
        remove_peer(peer_id: number /*i64*/): void
        
        /** Returns `true` if the given [param peer_id] is in the peers map (it might not be connected though). */
        has_peer(peer_id: number /*i64*/): boolean
        
        /** Returns a dictionary representation of the peer with given [param peer_id] with three keys. `"connection"` containing the [WebRTCPeerConnection] to this peer, `"channels"` an array of three [WebRTCDataChannel], and `"connected"` a boolean representing if the peer connection is currently connected (all three channels are open). */
        get_peer(peer_id: number /*i64*/): Dictionary
        
        /** Returns a dictionary which keys are the peer ids and values the peer representation as in [method get_peer]. */
        get_peers(): Dictionary
    }
    namespace WebRTCPeerConnection {
        enum ConnectionState {
            /** The connection is new, data channels and an offer can be created in this state. */
            STATE_NEW = 0,
            
            /** The peer is connecting, ICE is in progress, none of the transports has failed. */
            STATE_CONNECTING = 1,
            
            /** The peer is connected, all ICE transports are connected. */
            STATE_CONNECTED = 2,
            
            /** At least one ICE transport is disconnected. */
            STATE_DISCONNECTED = 3,
            
            /** One or more of the ICE transports failed. */
            STATE_FAILED = 4,
            
            /** The peer connection is closed (after calling [method close] for example). */
            STATE_CLOSED = 5,
        }
        enum GatheringState {
            /** The peer connection was just created and hasn't done any networking yet. */
            GATHERING_STATE_NEW = 0,
            
            /** The ICE agent is in the process of gathering candidates for the connection. */
            GATHERING_STATE_GATHERING = 1,
            
            /** The ICE agent has finished gathering candidates. If something happens that requires collecting new candidates, such as a new interface being added or the addition of a new ICE server, the state will revert to gathering to gather those candidates. */
            GATHERING_STATE_COMPLETE = 2,
        }
        enum SignalingState {
            /** There is no ongoing exchange of offer and answer underway. This may mean that the [WebRTCPeerConnection] is new ([constant STATE_NEW]) or that negotiation is complete and a connection has been established ([constant STATE_CONNECTED]). */
            SIGNALING_STATE_STABLE = 0,
            
            /** The local peer has called [method set_local_description], passing in SDP representing an offer (usually created by calling [method create_offer]), and the offer has been applied successfully. */
            SIGNALING_STATE_HAVE_LOCAL_OFFER = 1,
            
            /** The remote peer has created an offer and used the signaling server to deliver it to the local peer, which has set the offer as the remote description by calling [method set_remote_description]. */
            SIGNALING_STATE_HAVE_REMOTE_OFFER = 2,
            
            /** The offer sent by the remote peer has been applied and an answer has been created and applied by calling [method set_local_description]. This provisional answer describes the supported media formats and so forth, but may not have a complete set of ICE candidates included. Further candidates will be delivered separately later. */
            SIGNALING_STATE_HAVE_LOCAL_PRANSWER = 3,
            
            /** A provisional answer has been received and successfully applied in response to an offer previously sent and established by calling [method set_local_description]. */
            SIGNALING_STATE_HAVE_REMOTE_PRANSWER = 4,
            
            /** The [WebRTCPeerConnection] has been closed. */
            SIGNALING_STATE_CLOSED = 5,
        }
    }
    /** Interface to a WebRTC peer connection.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_webrtcpeerconnection.html  
     */
    class WebRTCPeerConnection extends RefCounted {
        /** Sets the [param extension_class] as the default [WebRTCPeerConnectionExtension] returned when creating a new [WebRTCPeerConnection]. */
        static set_default_extension(extension_class: StringName): void
        
        /** Re-initialize this peer connection, closing any previously active connection, and going back to state [constant STATE_NEW]. A dictionary of [param configuration] options can be passed to configure the peer connection.  
         *  Valid [param configuration] options are:  
         *    
         */
        initialize(configuration: Dictionary = <any> {} /*compound.type from 27([object Object])*/): GodotError
        
        /** Returns a new [WebRTCDataChannel] (or `null` on failure) with given [param label] and optionally configured via the [param options] dictionary. This method can only be called when the connection is in state [constant STATE_NEW].  
         *  There are two ways to create a working data channel: either call [method create_data_channel] on only one of the peer and listen to [signal data_channel_received] on the other, or call [method create_data_channel] on both peers, with the same values, and the `"negotiated"` option set to `true`.  
         *  Valid [param options] are:  
         *    
         *      
         *  **Note:** You must keep a reference to channels created this way, or it will be closed.  
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
         *  If [param type] is `"offer"` the peer will emit [signal session_description_created] with the appropriate answer.  
         *  If [param type] is `"answer"` the peer will start emitting [signal ice_candidate_created].  
         */
        set_remote_description(type: string, sdp: string): GodotError
        
        /** Add an ice candidate generated by a remote peer (and received over the signaling server). See [signal ice_candidate_created]. */
        add_ice_candidate(media: string, index: number /*i64*/, name: string): GodotError
        
        /** Call this method frequently (e.g. in [method Node._process] or [method Node._physics_process]) to properly receive signals. */
        poll(): GodotError
        
        /** Close the peer connection and all data channels associated with it.  
         *      
         *  **Note:** You cannot reuse this object for a new connection unless you call [method initialize].  
         */
        close(): void
        
        /** Returns the connection state. See [enum ConnectionState]. */
        get_connection_state(): WebRTCPeerConnection.ConnectionState
        
        /** Returns the ICE [enum GatheringState] of the connection. This lets you detect, for example, when collection of ICE candidates has finished. */
        get_gathering_state(): WebRTCPeerConnection.GatheringState
        
        /** Returns the [enum SignalingState] on the local end of the connection while connecting or reconnecting to another peer. */
        get_signaling_state(): WebRTCPeerConnection.SignalingState
        
        /** Emitted after a successful call to [method create_offer] or [method set_remote_description] (when it generates an answer). The parameters are meant to be passed to [method set_local_description] on this object, and sent to the remote peer over the signaling server. */
        readonly session_description_created: Signal // type: string, sdp: string => void
        
        /** Emitted when a new ICE candidate has been created. The three parameters are meant to be passed to the remote peer over the signaling server. */
        readonly ice_candidate_created: Signal // media: string, index: number /*i64*/, name: string => void
        
        /** Emitted when a new in-band channel is received, i.e. when the channel was created with `negotiated: false` (default).  
         *  The object will be an instance of [WebRTCDataChannel]. You must keep a reference of it or it will be closed automatically. See [method create_data_channel].  
         */
        readonly data_channel_received: Signal // channel: WebRTCDataChannel => void
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_webrtcpeerconnectionextension.html */
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
            /** We don't know the the target ray mode. */
            TARGET_RAY_MODE_UNKNOWN = 0,
            
            /** Target ray originates at the viewer's eyes and points in the direction they are looking. */
            TARGET_RAY_MODE_GAZE = 1,
            
            /** Target ray from a handheld pointer, most likely a VR touch controller. */
            TARGET_RAY_MODE_TRACKED_POINTER = 2,
            
            /** Target ray from touch screen, mouse or other tactile input device. */
            TARGET_RAY_MODE_SCREEN = 3,
        }
    }
    /** XR interface using WebXR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_webxrinterface.html  
     */
    class WebXRInterface extends XRInterface {
        /** Checks if the given [param session_mode] is supported by the user's browser.  
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSessionMode]WebXR's XRSessionMode[/url], including: `"immersive-vr"`, `"immersive-ar"`, and `"inline"`.  
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
        
        /** Returns `true` if there is an active input source with the given [param input_source_id]. */
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
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRSessionMode]WebXR's XRSessionMode[/url], including: `"immersive-vr"`, `"immersive-ar"`, and `"inline"`.  
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
         *  Possible values come from [url=https://developer.mozilla.org/en-US/docs/Web/API/XRVisibilityState]WebXR's XRVisibilityState[/url], including `"hidden"`, `"visible"`, and `"visible-blurred"`.  
         */
        readonly visibility_state: string
        
        /** Emitted by [method is_session_supported] to indicate if the given [param session_mode] is supported or not. */
        readonly session_supported: Signal // session_mode: string, supported: boolean => void
        
        /** Emitted by [method XRInterface.initialize] if the session is successfully started.  
         *  At this point, it's safe to do `get_viewport().use_xr = true` to instruct Godot to start rendering to the XR device.  
         */
        readonly session_started: Signal //  => void
        
        /** Emitted when the user ends the WebXR session (which can be done using UI from the browser or device).  
         *  At this point, you should do `get_viewport().use_xr = false` to instruct Godot to resume rendering to the screen.  
         */
        readonly session_ended: Signal //  => void
        
        /** Emitted by [method XRInterface.initialize] if the session fails to start.  
         *  [param message] may optionally contain an error message from WebXR, or an empty string if no message is available.  
         */
        readonly session_failed: Signal // message: string => void
        
        /** Emitted when one of the input source has started its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly selectstart: Signal // input_source_id: number /*i64*/ => void
        
        /** Emitted after one of the input sources has finished its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly select: Signal // input_source_id: number /*i64*/ => void
        
        /** Emitted when one of the input sources has finished its "primary action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly selectend: Signal // input_source_id: number /*i64*/ => void
        
        /** Emitted when one of the input sources has started its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeezestart: Signal // input_source_id: number /*i64*/ => void
        
        /** Emitted after one of the input sources has finished its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeeze: Signal // input_source_id: number /*i64*/ => void
        
        /** Emitted when one of the input sources has finished its "primary squeeze action".  
         *  Use [method get_input_source_tracker] and [method get_input_source_target_ray_mode] to get more information about the input source.  
         */
        readonly squeezeend: Signal // input_source_id: number /*i64*/ => void
        
        /** Emitted when [member visibility_state] has changed. */
        readonly visibility_state_changed: Signal //  => void
        
        /** Emitted to indicate that the reference space has been reset or reconfigured.  
         *  When (or whether) this is emitted depends on the user's browser or device, but may include when the user has changed the dimensions of their play space (which you may be able to access via [method XRInterface.get_play_area]) or pressed/held a button to recenter their position.  
         *  See [url=https://developer.mozilla.org/en-US/docs/Web/API/XRReferenceSpace/reset_event]WebXR's XRReferenceSpace reset event[/url] for more information.  
         */
        readonly reference_space_reset: Signal //  => void
        
        /** Emitted after the display's refresh rate has changed. */
        readonly display_refresh_rate_changed: Signal //  => void
    }
    namespace Window {
        enum Mode {
            /** Windowed mode, i.e. [Window] doesn't occupy the whole screen (unless set to the size of the screen). */
            MODE_WINDOWED = 0,
            
            /** Minimized window mode, i.e. [Window] is not visible and available on window manager's window list. Normally happens when the minimize button is pressed. */
            MODE_MINIMIZED = 1,
            
            /** Maximized window mode, i.e. [Window] will occupy whole screen area except task bar and still display its borders. Normally happens when the maximize button is pressed. */
            MODE_MAXIMIZED = 2,
            
            /** Full screen mode with full multi-window support.  
             *  Full screen window covers the entire display area of a screen and has no decorations. The display's video mode is not changed.  
             *  **On Windows:** Multi-window full-screen mode has a 1px border of the [member ProjectSettings.rendering/environment/defaults/default_clear_color] color.  
             *  **On macOS:** A new desktop is used to display the running project.  
             *      
             *  **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=$DOCS_URL/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.  
             */
            MODE_FULLSCREEN = 3,
            
            /** A single window full screen mode. This mode has less overhead, but only one window can be open on a given screen at a time (opening a child window or application switching will trigger a full screen transition).  
             *  Full screen window covers the entire display area of a screen and has no border or decorations. The display's video mode is not changed.  
             *  **On Windows:** Depending on video driver, full screen transition might cause screens to go black for a moment.  
             *  **On macOS:** A new desktop is used to display the running project. Exclusive full screen mode prevents Dock and Menu from showing up when the mouse pointer is hovering the edge of the screen.  
             *  **On Linux (X11):** Exclusive full screen mode bypasses compositor.  
             *      
             *  **Note:** Regardless of the platform, enabling full screen will change the window size to match the monitor's size. Therefore, make sure your project supports [url=$DOCS_URL/tutorials/rendering/multiple_resolutions.html]multiple resolutions[/url] when enabling full screen mode.  
             */
            MODE_EXCLUSIVE_FULLSCREEN = 4,
        }
        enum Flags {
            /** The window can't be resized by dragging its resize grip. It's still possible to resize the window using [member size]. This flag is ignored for full screen windows. Set with [member unresizable]. */
            FLAG_RESIZE_DISABLED = 0,
            
            /** The window do not have native title bar and other decorations. This flag is ignored for full-screen windows. Set with [member borderless]. */
            FLAG_BORDERLESS = 1,
            
            /** The window is floating on top of all other windows. This flag is ignored for full-screen windows. Set with [member always_on_top]. */
            FLAG_ALWAYS_ON_TOP = 2,
            
            /** The window background can be transparent. Set with [member transparent].  
             *      
             *  **Note:** This flag has no effect if either [member ProjectSettings.display/window/per_pixel_transparency/allowed], or the window's [member Viewport.transparent_bg] is set to `false`.  
             */
            FLAG_TRANSPARENT = 3,
            
            /** The window can't be focused. No-focus window will ignore all input, except mouse clicks. Set with [member unfocusable]. */
            FLAG_NO_FOCUS = 4,
            
            /** Window is part of menu or [OptionButton] dropdown. This flag can't be changed when the window is visible. An active popup window will exclusively receive all input, without stealing focus from its parent. Popup windows are automatically closed when uses click outside it, or when an application is switched. Popup window must have transient parent set (see [member transient]).  
             *      
             *  **Note:** This flag has no effect in embedded windows (unless said window is a [Popup]).  
             */
            FLAG_POPUP = 5,
            
            /** Window content is expanded to the full size of the window. Unlike borderless window, the frame is left intact and can be used to resize the window, title bar is transparent, but have minimize/maximize/close buttons. Set with [member extend_to_title].  
             *      
             *  **Note:** This flag is implemented only on macOS.  
             *      
             *  **Note:** This flag has no effect in embedded windows.  
             */
            FLAG_EXTEND_TO_TITLE = 6,
            
            /** All mouse events are passed to the underlying window of the same application.  
             *      
             *  **Note:** This flag has no effect in embedded windows.  
             */
            FLAG_MOUSE_PASSTHROUGH = 7,
            
            /** Max value of the [enum Flags]. */
            FLAG_MAX = 8,
        }
        enum ContentScaleMode {
            /** The content will not be scaled to match the [Window]'s size. */
            CONTENT_SCALE_MODE_DISABLED = 0,
            
            /** The content will be rendered at the target size. This is more performance-expensive than [constant CONTENT_SCALE_MODE_VIEWPORT], but provides better results. */
            CONTENT_SCALE_MODE_CANVAS_ITEMS = 1,
            
            /** The content will be rendered at the base size and then scaled to the target size. More performant than [constant CONTENT_SCALE_MODE_CANVAS_ITEMS], but results in pixelated image. */
            CONTENT_SCALE_MODE_VIEWPORT = 2,
        }
        enum ContentScaleAspect {
            /** The aspect will be ignored. Scaling will simply stretch the content to fit the target size. */
            CONTENT_SCALE_ASPECT_IGNORE = 0,
            
            /** The content's aspect will be preserved. If the target size has different aspect from the base one, the image will be centered and black bars will appear on left and right sides. */
            CONTENT_SCALE_ASPECT_KEEP = 1,
            
            /** The content can be expanded vertically. Scaling horizontally will result in keeping the width ratio and then black bars on left and right sides. */
            CONTENT_SCALE_ASPECT_KEEP_WIDTH = 2,
            
            /** The content can be expanded horizontally. Scaling vertically will result in keeping the height ratio and then black bars on top and bottom sides. */
            CONTENT_SCALE_ASPECT_KEEP_HEIGHT = 3,
            
            /** The content's aspect will be preserved. If the target size has different aspect from the base one, the content will stay in the top-left corner and add an extra visible area in the stretched space. */
            CONTENT_SCALE_ASPECT_EXPAND = 4,
        }
        enum ContentScaleStretch {
            /** The content will be stretched according to a fractional factor. This fills all the space available in the window, but allows "pixel wobble" to occur due to uneven pixel scaling. */
            CONTENT_SCALE_STRETCH_FRACTIONAL = 0,
            
            /** The content will be stretched only according to an integer factor, preserving sharp pixels. This may leave a black background visible on the window's edges depending on the window size. */
            CONTENT_SCALE_STRETCH_INTEGER = 1,
        }
        enum LayoutDirection {
            /** Automatic layout direction, determined from the parent window layout direction. */
            LAYOUT_DIRECTION_INHERITED = 0,
            
            /** Automatic layout direction, determined from the current locale. */
            LAYOUT_DIRECTION_LOCALE = 1,
            
            /** Left-to-right layout direction. */
            LAYOUT_DIRECTION_LTR = 2,
            
            /** Right-to-left layout direction. */
            LAYOUT_DIRECTION_RTL = 3,
        }
        enum WindowInitialPosition {
            /** Initial window position is determined by [member position]. */
            WINDOW_INITIAL_POSITION_ABSOLUTE = 0,
            
            /** Initial window position is the center of the primary screen. */
            WINDOW_INITIAL_POSITION_CENTER_PRIMARY_SCREEN = 1,
            
            /** Initial window position is the center of the main window screen. */
            WINDOW_INITIAL_POSITION_CENTER_MAIN_WINDOW_SCREEN = 2,
            
            /** Initial window position is the center of [member current_screen] screen. */
            WINDOW_INITIAL_POSITION_CENTER_OTHER_SCREEN = 3,
            
            /** Initial window position is the center of the screen containing the mouse pointer. */
            WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_MOUSE_FOCUS = 4,
            
            /** Initial window position is the center of the screen containing the window with the keyboard focus. */
            WINDOW_INITIAL_POSITION_CENTER_SCREEN_WITH_KEYBOARD_FOCUS = 5,
        }
    }
    /** Base class for all windows, dialogs, and popups.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_window.html  
     */
    class Window extends Viewport {
        /** Emitted when [Window]'s visibility changes, right before [signal visibility_changed]. */
        static readonly NOTIFICATION_VISIBILITY_CHANGED = 30
        
        /** Sent when the node needs to refresh its theme items. This happens in one of the following cases:  
         *  - The [member theme] property is changed on this node or any of its ancestors.  
         *  - The [member theme_type_variation] property is changed on this node.  
         *  - The node enters the scene tree.  
         *      
         *  **Note:** As an optimization, this notification won't be sent from changes that occur while this node is outside of the scene tree. Instead, all of the theme item updates can be applied at once when the node enters the scene tree.  
         */
        static readonly NOTIFICATION_THEME_CHANGED = 32
        
        /** Virtual method to be implemented by the user. Overrides the value returned by [method get_contents_minimum_size]. */
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
        
        /** Resets the size to the minimum size, which is the max of [member min_size] and (if [member wrap_controls] is enabled) [method get_contents_minimum_size]. This is equivalent to calling `set_size(Vector2i())` (or any size below the minimum). */
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
        
        /** Returns `true` if the [param flag] is set. */
        get_flag(flag: Window.Flags): boolean
        
        /** Returns `true` if the window can be maximized (the maximize button is enabled). */
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
        
        /** If [param unparent] is `true`, the window is automatically unparented when going invisible.  
         *      
         *  **Note:** Make sure to keep a reference to the node, otherwise it will be orphaned. You also need to manually call [method Node.queue_free] to free the window if it's not parented.  
         */
        set_unparent_when_invisible(unparent: boolean): void
        
        /** Returns whether the window is being drawn to the screen. */
        can_draw(): boolean
        
        /** Returns `true` if the window is focused. */
        has_focus(): boolean
        
        /** Causes the window to grab focus, allowing it to receive user input. */
        grab_focus(): void
        
        /** If [param active] is `true`, enables system's native IME (Input Method Editor). */
        set_ime_active(active: boolean): void
        
        /** Moves IME to the given position. */
        set_ime_position(position: Vector2i): void
        
        /** Returns `true` if the window is currently embedded in another window. */
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
        
        /** Returns `true` if font oversampling is enabled. See [method set_use_font_oversampling]. */
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
        
        /** Prevents `*_theme_*_override` methods from emitting [constant NOTIFICATION_THEME_CHANGED] until [method end_bulk_theme_override] is called. */
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
        
        /** Returns `true` if there is a local override for a theme icon with the specified [param name] in this [Control] node.  
         *  See [method add_theme_icon_override].  
         */
        has_theme_icon_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [StyleBox] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_stylebox_override].  
         */
        has_theme_stylebox_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [Font] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_font_override].  
         */
        has_theme_font_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme font size with the specified [param name] in this [Control] node.  
         *  See [method add_theme_font_size_override].  
         */
        has_theme_font_size_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme [Color] with the specified [param name] in this [Control] node.  
         *  See [method add_theme_color_override].  
         */
        has_theme_color_override(name: StringName): boolean
        
        /** Returns `true` if there is a local override for a theme constant with the specified [param name] in this [Control] node.  
         *  See [method add_theme_constant_override].  
         */
        has_theme_constant_override(name: StringName): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has an icon item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_icon(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a stylebox item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_stylebox(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_font(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a font size item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_font_size(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a color item with the specified [param name] and [param theme_type].  
         *  See [method Control.get_theme_color] for details.  
         */
        has_theme_color(name: StringName, theme_type: StringName = ''): boolean
        
        /** Returns `true` if there is a matching [Theme] in the tree that has a constant item with the specified [param name] and [param theme_type].  
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
        
        /** Returns `true` if layout is right-to-left. */
        is_layout_rtl(): boolean
        set_auto_translate(enable: boolean): void
        is_auto_translating(): boolean
        
        /** Shows the [Window] and makes it transient (see [member transient]). If [param rect] is provided, it will be set as the [Window]'s size. Fails if called on the main window. */
        popup(rect: Rect2i = <any> {} /*compound.type from 8([object Object])*/): void
        
        /** Popups the [Window] with a position shifted by parent [Window]'s position. If the [Window] is embedded, has the same effect as [method popup]. */
        popup_on_parent(parent_rect: Rect2i): void
        
        /** Popups the [Window] at the center of the current screen, with optionally given minimum size. If the [Window] is embedded, it will be centered in the parent [Viewport] instead.  
         *      
         *  **Note:** Calling it with the default value of [param minsize] is equivalent to calling it with [member size].  
         */
        popup_centered(minsize: Vector2i = <any> {} /*compound.type from 6([object Object])*/): void
        
        /** If [Window] is embedded, popups the [Window] centered inside its embedder and sets its size as a [param ratio] of embedder's size.  
         *  If [Window] is a native window, popups the [Window] centered inside the screen of its parent [Window] and sets its size as a [param ratio] of the screen size.  
         */
        popup_centered_ratio(ratio: number /*f64*/ = 0.8): void
        
        /** Popups the [Window] centered inside its parent [Window]. [param fallback_ratio] determines the maximum size of the [Window], in relation to its parent.  
         *      
         *  **Note:** Calling it with the default value of [param minsize] is equivalent to calling it with [member size].  
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
         *      
         *  **Note:** Fullscreen mode is not exclusive full screen on Windows and Linux.  
         *      
         *  **Note:** This method only works with native windows, i.e. the main window and [Window]-derived nodes when [member Viewport.gui_embed_subwindows] is disabled in the main viewport.  
         */
        mode: number /*i64*/
        
        /** The window's title. If the [Window] is native, title styles set in [Theme] will have no effect. */
        title: string
        
        /** Specifies the initial type of position for the [Window]. See [enum WindowInitialPosition] constants. */
        initial_position: number /*i64*/
        
        /** The window's position in pixels.  
         *  If [member ProjectSettings.display/window/subwindows/embed_subwindows] is `false`, the position is in absolute screen coordinates. This typically applies to editor plugins. If the setting is `true`, the window's position is in the coordinates of its parent [Viewport].  
         *      
         *  **Note:** This property only works if [member initial_position] is set to [constant WINDOW_INITIAL_POSITION_ABSOLUTE].  
         */
        position: Vector2i
        
        /** The window's size in pixels. */
        size: Vector2i
        
        /** The screen the window is currently on. */
        current_screen: number /*i64*/
        
        /** Sets a polygonal region of the window which accepts mouse events. Mouse events outside the region will be passed through.  
         *  Passing an empty array will disable passthrough support (all mouse events will be intercepted by the window, which is the default behavior).  
         *    
         *      
         *  **Note:** This property is ignored if [member mouse_passthrough] is set to `true`.  
         *      
         *  **Note:** On Windows, the portion of a window that lies outside the region is not drawn, while on Linux (X11) and macOS it is.  
         *      
         *  **Note:** This property is implemented on Linux (X11), macOS and Windows.  
         */
        mouse_passthrough_polygon: PackedVector2Array
        
        /** If `true`, the window is visible. */
        visible: boolean
        
        /** If `true`, the window's size will automatically update when a child node is added or removed, ignoring [member min_size] if the new size is bigger.  
         *  If `false`, you need to call [method child_controls_changed] manually.  
         */
        wrap_controls: boolean
        
        /** If `true`, the [Window] is transient, i.e. it's considered a child of another [Window]. The transient window will be destroyed with its transient parent and will return focus to their parent when closed. The transient window is displayed on top of a non-exclusive full-screen parent window. Transient windows can't enter full-screen mode.  
         *  Note that behavior might be different depending on the platform.  
         */
        transient: boolean
        
        /** If `true`, the [Window] will be in exclusive mode. Exclusive windows are always on top of their parent and will block all input going to the parent [Window].  
         *  Needs [member transient] enabled to work.  
         */
        exclusive: boolean
        
        /** If non-zero, the [Window] can't be resized to be smaller than this size.  
         *      
         *  **Note:** This property will be ignored in favor of [method get_contents_minimum_size] if [member wrap_controls] is enabled and if its size is bigger.  
         */
        min_size: Vector2i
        
        /** If non-zero, the [Window] can't be resized to be bigger than this size.  
         *      
         *  **Note:** This property will be ignored if the value is lower than [member min_size].  
         */
        max_size: Vector2i
        
        /** If `true`, the [Window] width is expanded to keep the title bar text fully visible. */
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
         *      
         *  **Note:** [Window] styles will have no effect unless the window is embedded.  
         */
        theme: Theme
        
        /** The name of a theme type variation used by this [Window] to look up its own theme items. See [member Control.theme_type_variation] for more details. */
        theme_type_variation: string
        
        /** Emitted when the [Window] is currently focused and receives any input, passing the received event as an argument. The event's position, if present, is in the embedder's coordinate system. */
        readonly window_input: Signal // event: InputEvent => void
        
        /** Emitted when files are dragged from the OS file manager and dropped in the game window. The argument is a list of file paths.  
         *  Note that this method only works with native windows, i.e. the main window and [Window]-derived nodes when [member Viewport.gui_embed_subwindows] is disabled in the main viewport.  
         *  Example usage:  
         *    
         */
        readonly files_dropped: Signal // files: PackedStringArray => void
        
        /** Emitted when the mouse cursor enters the [Window]'s visible area, that is not occluded behind other [Control]s or windows, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        readonly mouse_entered: Signal //  => void
        
        /** Emitted when the mouse cursor leaves the [Window]'s visible area, that is not occluded behind other [Control]s or windows, provided its [member Viewport.gui_disable_input] is `false` and regardless if it's currently focused or not. */
        readonly mouse_exited: Signal //  => void
        
        /** Emitted when the [Window] gains focus. */
        readonly focus_entered: Signal //  => void
        
        /** Emitted when the [Window] loses its focus. */
        readonly focus_exited: Signal //  => void
        
        /** Emitted when the [Window]'s close button is pressed or when [member popup_window] is enabled and user clicks outside the window.  
         *  This signal can be used to handle window closing, e.g. by connecting it to [method hide].  
         */
        readonly close_requested: Signal //  => void
        
        /** Emitted when a go back request is sent (e.g. pressing the "Back" button on Android), right after [constant Node.NOTIFICATION_WM_GO_BACK_REQUEST]. */
        readonly go_back_requested: Signal //  => void
        
        /** Emitted when [Window] is made visible or disappears. */
        readonly visibility_changed: Signal //  => void
        
        /** Emitted right after [method popup] call, before the [Window] appears or does anything. */
        readonly about_to_popup: Signal //  => void
        
        /** Emitted when the [constant NOTIFICATION_THEME_CHANGED] notification is sent. */
        readonly theme_changed: Signal //  => void
        
        /** Emitted when the [Window]'s DPI changes as a result of OS-level changes (e.g. moving the window from a Retina display to a lower resolution one).  
         *      
         *  **Note:** Only implemented on macOS.  
         */
        readonly dpi_changed: Signal //  => void
        
        /** Emitted when window title bar decorations are changed, e.g. macOS window enter/exit full screen mode, or extend-to-title flag is changed. */
        readonly titlebar_changed: Signal //  => void
    }
    /** @link https://docs.godotengine.org/en/4.2/classes/class_windowwrapper.html */
    class WindowWrapper extends MarginContainer {
        readonly window_visibility_changed: Signal // visible: boolean => void
        readonly window_close_requested: Signal //  => void
    }
    /** A resource that holds all components of a 2D world, such as a canvas and a physics space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_world2d.html  
     */
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
    /** A resource that holds all components of a 3D world, such as a visual scenario and a physics space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_world3d.html  
     */
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
    /** A 2D world boundary (half-plane) shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_worldboundaryshape2d.html  
     */
    class WorldBoundaryShape2D extends Shape2D {
        set_normal(normal: Vector2): void
        get_normal(): Vector2
        set_distance(distance: number /*f64*/): void
        get_distance(): number /*f64*/
        
        /** The line's normal, typically a unit vector. Its direction indicates the non-colliding half-plane. Can be of any length but zero. Defaults to [constant Vector2.UP]. */
        normal: Vector2
        
        /** The distance from the origin to the line, expressed in terms of [member normal] (according to its direction and magnitude). Actual absolute distance from the origin to the line can be calculated as `abs(distance) / normal.length()`.  
         *  In the scalar equation of the line `ax + by = d`, this is `d`, while the `(a, b)` coordinates are represented by the [member normal] property.  
         */
        distance: number /*f64*/
    }
    /** A 3D world boundary (half-space) shape used for physics collision.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_worldboundaryshape3d.html  
     */
    class WorldBoundaryShape3D extends Shape3D {
        set_plane(plane: Plane): void
        get_plane(): Plane
        
        /** The [Plane] used by the [WorldBoundaryShape3D] for collision. */
        plane: Plane
    }
    /** Default environment properties for the entire scene (post-processing effects, lighting and background settings).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_worldenvironment.html  
     */
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
    /** An X509 certificate (e.g. for TLS).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_x509certificate.html  
     */
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
            /** There's no node (no file or buffer opened). */
            NODE_NONE = 0,
            
            /** An element node type, also known as a tag, e.g. `<title>`. */
            NODE_ELEMENT = 1,
            
            /** An end of element node type, e.g. `</title>`. */
            NODE_ELEMENT_END = 2,
            
            /** A text node type, i.e. text that is not inside an element. This includes whitespace. */
            NODE_TEXT = 3,
            
            /** A comment node type, e.g. `<!--A comment-->`. */
            NODE_COMMENT = 4,
            
            /** A node type for CDATA (Character Data) sections, e.g. `<![CDATA[CDATA section]]>`. */
            NODE_CDATA = 5,
            
            /** An unknown node type. */
            NODE_UNKNOWN = 6,
        }
    }
    /** Provides a low-level interface for creating parsers for XML files.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xmlparser.html  
     */
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
         *      
         *  **Note:** If this method is used while the currently parsed node is not [constant NODE_ELEMENT] or [constant NODE_ELEMENT_END], this count will not be updated and will still reflect the last element.  
         */
        get_attribute_count(): number /*i64*/
        
        /** Returns the name of an attribute of the currently parsed element, specified by the [param idx] index. */
        get_attribute_name(idx: number /*i64*/): string
        
        /** Returns the value of an attribute of the currently parsed element, specified by the [param idx] index. */
        get_attribute_value(idx: number /*i64*/): string
        
        /** Returns `true` if the currently parsed element has an attribute with the [param name]. */
        has_attribute(name: string): boolean
        
        /** Returns the value of an attribute of the currently parsed element, specified by its [param name]. This method will raise an error if the element has no such attribute. */
        get_named_attribute_value(name: string): string
        
        /** Returns the value of an attribute of the currently parsed element, specified by its [param name]. This method will return an empty string if the element has no such attribute. */
        get_named_attribute_value_safe(name: string): string
        
        /** Returns `true` if the currently parsed element is empty, e.g. `<element />`. */
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
    /** An anchor point in AR space.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xranchor3d.html  
     */
    class XRAnchor3D extends XRNode3D {
        /** Returns the estimated size of the plane that was detected. Say when the anchor relates to a table in the real world, this is the estimated size of the surface of that table. */
        get_size(): Vector3
        
        /** Returns a plane aligned with our anchor; handy for intersection testing. */
        get_plane(): Plane
    }
    /** A camera node with a few overrules for AR/VR applied, such as location tracking.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xrcamera3d.html  
     */
    class XRCamera3D extends Camera3D {
    }
    /** A spatial node representing a spatially-tracked controller.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xrcontroller3d.html  
     */
    class XRController3D extends XRNode3D {
        /** Returns `true` if the button with the given [param name] is pressed. */
        is_button_pressed(name: StringName): boolean
        
        /** Returns a [Variant] for the input with the given [param name]. This works for any input type, the variant will be typed according to the actions configuration. */
        get_input(name: StringName): any
        
        /** Returns a numeric value for the input with the given [param name]. This is used for triggers and grip sensors. */
        get_float(name: StringName): number /*f64*/
        
        /** Returns a [Vector2] for the input with the given [param name]. This is used for thumbsticks and thumbpads found on many controllers. */
        get_vector2(name: StringName): Vector2
        
        /** Returns the hand holding this controller, if known. See [enum XRPositionalTracker.TrackerHand]. */
        get_tracker_hand(): XRPositionalTracker.TrackerHand
        
        /** Emitted when a button on this controller is pressed. */
        readonly button_pressed: Signal // name: string => void
        
        /** Emitted when a button on this controller is released. */
        readonly button_released: Signal // name: string => void
        
        /** Emitted when a trigger or similar input on this controller changes value. */
        readonly input_float_changed: Signal // name: string, value: number /*f64*/ => void
        
        /** Emitted when a thumbstick or thumbpad on this controller is moved. */
        readonly input_vector2_changed: Signal // name: string, value: Vector2 => void
    }
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
        interface_is_primary: boolean
        
        /** The play area mode for this interface. */
        xr_play_area_mode: number /*i64*/
        
        /** Specify how XR should blend in the environment. This is specific to certain AR and passthrough devices where camera images are blended in by the XR compositor. */
        environment_blend_mode: number /*i64*/
        
        /** On an AR interface, `true` if anchor detection is enabled. */
        ar_is_anchor_detection_enabled: boolean
        
        /** Emitted when the play area is changed. This can be a result of the player resetting the boundary or entering a new play area, the player changing the play area mode, the world scale changing or the player resetting their headset orientation. */
        readonly play_area_changed: Signal // mode: number /*i64*/ => void
    }
    /** Base class for XR interface extensions (plugins).  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xrinterfaceextension.html  
     */
    class XRInterfaceExtension extends XRInterface {
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
        tracker: string
        
        /** The name of the pose we're bound to. Which poses a tracker supports is not known during design time.  
         *  Godot defines number of standard pose names such as `aim` and `grip` but other may be configured within a given [XRInterface].  
         */
        pose: string
        
        /** Emitted when the [member tracker] starts or stops receiving updated tracking data for the [member pose] being tracked. The [param tracking] argument indicates whether the tracker is getting updated tracking data. */
        readonly tracking_changed: Signal // tracking: boolean => void
    }
    /** The origin point in AR/VR.  
     *  	  
     *  @link https://docs.godotengine.org/en/4.2/classes/class_xrorigin3d.html  
     */
    class XROrigin3D extends Node3D {
        set_world_scale(world_scale: number /*f64*/): void
        get_world_scale(): number /*f64*/
        set_current(enabled: boolean): void
        is_current(): boolean
        
        /** The scale of the game world compared to the real world. This is the same as [member XRServer.world_scale]. By default, most AR/VR platforms assume that 1 game unit corresponds to 1 real world meter. */
        world_scale: number /*f64*/
        
        /** If `true`, this origin node is currently being used by the [XRServer]. Only one origin point can be used at a time. */
        current: boolean
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
        type: number /*i64*/
        
        /** The description of this tracker. */
        description: string
        
        /** The profile associated with this tracker, interface dependent but will indicate the type of controller being tracked. */
        profile: string
        
        /** Defines which hand this tracker relates to. */
        hand: number /*i64*/
        
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
        x: number /*f64*/
        y: number /*f64*/
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
        x: number /*i64*/
        y: number /*i64*/
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
         *  **Note:** This method is not reliable for [Rect2] with a [i]negative[/i] [member size]. Use [method abs] first to get a valid rectangle.  
         */
        has_point(point: Vector2): boolean
        
        /** Returns `true` if this rectangle and [param rect] are approximately equal, by calling [method Vector2.is_equal_approx] on the [member position] and the [member size]. */
        is_equal_approx(rect: Rect2): boolean
        
        /** Returns `true` if this rectangle's values are finite, by calling [method Vector2.is_finite] on the [member position] and the [member size]. */
        is_finite(): boolean
        
        /** Returns `true` if this rectangle overlaps with the [param b] rectangle. The edges of both rectangles are excluded, unless [param include_borders] is `true`. */
        intersects(b: Rect2, include_borders: boolean = false): boolean
        
        /** Returns `true` if this rectangle [i]completely[/i] encloses the [param b] rectangle. */
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
        position: Vector2
        size: Vector2
        end: Vector2
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
         *  **Note:** This method is not reliable for [Rect2i] with a [i]negative[/i] [member size]. Use [method abs] first to get a valid rectangle.  
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
        position: Vector2i
        size: Vector2i
        end: Vector2i
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
         *  **Note:** [method octahedron_encode] can only be used for [method normalized] vectors. [method octahedron_encode] does [i]not[/i] check whether this [Vector3] is normalized, and will return a value that does not decompress to the original value if the [Vector3] is not normalized.  
         *      
         *  **Note:** Octahedral compression is [i]lossy[/i], although visual differences are rarely perceptible in real world scenarios.  
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
        x: number /*f64*/
        y: number /*f64*/
        z: number /*f64*/
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
        x: number /*i64*/
        y: number /*i64*/
        z: number /*i64*/
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
        x: Vector2
        y: Vector2
        origin: Vector2
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
        x: number /*f64*/
        y: number /*f64*/
        z: number /*f64*/
        w: number /*f64*/
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
        x: number /*i64*/
        y: number /*i64*/
        z: number /*i64*/
        w: number /*i64*/
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
        x: number /*f64*/
        y: number /*f64*/
        z: number /*f64*/
        d: number /*f64*/
        normal: Vector3
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
        x: number /*f64*/
        y: number /*f64*/
        z: number /*f64*/
        w: number /*f64*/
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
         *  **Note:** This method is not reliable for [AABB] with a [i]negative[/i] [member size]. Use [method abs] first to get a valid bounding box.  
         */
        has_point(point: Vector3): boolean
        
        /** Returns `true` if this bounding box and [param aabb] are approximately equal, by calling [method Vector2.is_equal_approx] on the [member position] and the [member size]. */
        is_equal_approx(aabb: AABB): boolean
        
        /** Returns `true` if this bounding box's values are finite, by calling [method Vector2.is_finite] on the [member position] and the [member size]. */
        is_finite(): boolean
        
        /** Returns `true` if this bounding box overlaps with the box [param with]. The edges of both boxes are [i]always[/i] excluded. */
        intersects(with_: AABB): boolean
        
        /** Returns `true` if this bounding box [i]completely[/i] encloses the [param with] box. The edges of both boxes are included.  
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
        position: Vector3
        size: Vector3
        end: Vector3
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
        
        /** Returns the [url=https://en.wikipedia.org/wiki/Invertible_matrix]inverse of this basis's matrix[/url]. */
        inverse(): Basis
        
        /** Returns the transposed version of this basis. This turns the basis matrix's columns into rows, and its rows into columns.  
         *    
         */
        transposed(): Basis
        
        /** Returns the orthonormalized version of this basis. An orthonormal basis is both [i]orthogonal[/i] (the axes are perpendicular to each other) and [i]normalized[/i] (the axes have a length of `1`), which also means it can only represent rotation.  
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
        
        /** Returns `true` if this basis is conformal. A conformal basis is both [i]orthogonal[/i] (the axes are perpendicular to each other) and [i]uniform[/i] (the axes share the same length). This method can be especially useful during physics calculations. */
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
        x: Vector3
        y: Vector3
        z: Vector3
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
         *  **Note:** For this method to return correctly, the transform's [member basis] needs to be [i]orthonormal[/i] (see [method Basis.orthonormalized]). That means, the basis should only represent a rotation. If it does not, use [method affine_inverse] instead.  
         */
        inverse(): Transform3D
        
        /** Returns the inverted version of this transform. Unlike [method inverse], this method works with almost any [member basis], including non-uniform ones, but is slower. See also [method Basis.inverse].  
         *      
         *  **Note:** For this method to return correctly, the transform's [member basis] needs to have a determinant that is not exactly `0` (see [method Basis.determinant]).  
         */
        affine_inverse(): Transform3D
        
        /** Returns a copy of this transform with its [member basis] orthonormalized. An orthonormal basis is both [i]orthogonal[/i] (the axes are perpendicular to each other) and [i]normalized[/i] (the axes have a length of `1`), which also means it can only represent rotation. See also [method Basis.orthonormalized]. */
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
         *  The [param weight] should be between `0.0` and `1.0` (inclusive). Values outside this range are allowed and can be used to perform [i]extrapolation[/i] instead.  
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
        basis: Basis
        origin: Vector3
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
        x: Vector4
        y: Vector4
        z: Vector4
        w: Vector4
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
}
