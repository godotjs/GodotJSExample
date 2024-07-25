import { Error as GodotError, Array, Basis, Button, error_string, Input, Node, Object, ResourceLoader, Signal, Time, Variant, Vector2, Vector3, is_instance_valid } from "godot";
import * as jsb from "godot-jsb";
import { $wait, export_, export_enum, export_exp_easing, export_file, export_flags, export_multiline, export_range, export_range_i, onready, signal } from "./jsb/jsb.core";
import { CyclicClass1 } from "./tests/cyclic_import_1";

enum MyColor {
    White, 
    Black, 
    Red, 
    Blue, 
    Green, 
}

enum MyTags {
    None = 0, 
    Cold = 1, 
    Hot = 2, 
    Soft = 4, 
    Hard = 8, 
    Opaque = 16, 
}

export default class TestNode extends Button {
    private _v1 = 0

    get foo() { return this._v1 }
    set foo(value: number) { this._v1 = value }

    @onready("JSButtonChildNode")
    ready_node!: Node;

    @export_flags(MyTags)
    tags: MyTags = MyTags.None;

    @export_enum(MyColor)
    color: MyColor = MyColor.White;

    @export_(Variant.Type.TYPE_STRING)
    hello = "hello";

    @export_multiline()
    ml_text = "hello\nworld";

    @export_(Variant.Type.TYPE_INT)
    int_value = 0;

    @export_range(0, 100, 0.1)
    float_range = 0;

    @export_range_i(0, 100, 1)
    int_range = 0;

    @export_range_i(0, 100, 1, "suffix:px")
    px_range = 0;

    @export_file("*.svg")
    svg_path = "";

    @export_exp_easing("positive_only")
    ev_val = 0;

    @signal()
    test_signal!: Signal; // signal field will automatically instantiated by GodotJS

    constructor(identifier?: any) {
        super(identifier);
        console.log(MyColor);
        console.log("test constructor")
    }

    _notification(what: number) {
        console.log("test _notification", what)
    }

    _ready() {
        console.log("test ready", this.hello);
        console.log("ready_node:", this.ready_node);
        this.test_wait_for_signal();

        // test cyclic imported modules
        CyclicClass1.call1();

        const stub = new Object();
        console.assert(is_instance_valid(stub));
        stub.free();
        // an `bad this` error will be thrown if you use it after `free`
        // stub.do_something();
        console.assert(!is_instance_valid(stub));
        
        // access object properties with getset
        this.editor_description = "editor_description.1";
        console.log(this.editor_description);

        // gc stress test
        let sum = 0;
        setInterval(function () {
            for (let i = 0; i < 1000; ++i) {
                let v2 = new Vector2();
                v2.x = sum;
                v2.y += v2.x + 1;
                sum = v2.y - 1;
            }
        }, 20);
    }

    private async test_wait_for_signal() {
        console.log("waiting for test signal");
        let res = await $wait(this.test_signal);
        console.log("done, test signal emitted", res);
    }

    _on_pressed() {
        console.log("test on clicked!");

        // this.test_signal.connect(jsb.callable(this, this.on_test_signal), 0);
        // this.test_signal.emit();
        // this.test_signal.disconnect(jsb.callable(this, this.on_test_signal));
        this.test_signal.emit(123);

        // test godot object method with default arguments
        console.log("get_datetime_string_from_system(true)", Time.get_datetime_string_from_system(true));
        console.log("get_datetime_string_from_system(true, true)", Time.get_datetime_string_from_system(true, true));
        console.log("get_datetime_string_from_system(true, false)", Time.get_datetime_string_from_system(true, false));
        
        // test variant static method with default arguments
        const basis = Basis.looking_at(new Vector3(1, 2, 0), Vector3.UP);
        console.log("Basis.looking_at(new Vector3(1, 2, 0), Vector3.UP)", basis.x, basis.y, basis.y);

        let err = ResourceLoader.load_threaded_request("res://piggy/background.png", "", true, ResourceLoader.CacheMode.CACHE_MODE_IGNORE);
        console.log(
            error_string(err), // string represented via godot api
            GodotError[err]    // or, conveniently via typescript enum name lookup
        );
        let timerid: NodeJS.Timeout;
        timerid = setInterval(function (){
            let array = new Array();
            let status = ResourceLoader.load_threaded_get_status("res://piggy/background.png", array);
            console.log("loading", ResourceLoader.ThreadLoadStatus[status], array);
            if (status != ResourceLoader.ThreadLoadStatus.THREAD_LOAD_IN_PROGRESS) {
                clearInterval(timerid);
            }
        }, 20);
    }

    private on_test_signal() {
        console.log("on test signal");
    }

    work() {
        console.log("test bark at the moon")
    }

    static unbound_call() {

    }
}
