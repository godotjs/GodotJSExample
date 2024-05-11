import { Button, Node, Signal, Vector2 } from "godot";
import { export_, onready_, signal_ } from "./jsb/jsb.core";

export default class TestNode extends Button {
    private _v1 = 0

    get foo() { return this._v1 }
    set foo(value: number) { this._v1 = value }

    @onready_("JSButtonChildNode")
    ready_node!: Node;

    @export_(jsb.VariantType.TYPE_STRING)
    hello = "hello";

    @export_(jsb.VariantType.TYPE_INT)
    int_value = 0;

    @signal_()
    test_signal!: Signal; // signal field will automatically instantiated by GodotJS

    constructor() {
        super()
        console.log("test constructor")
    }

    _notification(what: number) {
        console.log("test _notification", what)
    }

    _ready() {
        console.log("test ready", this.hello);
        console.log("ready_node:", this.ready_node);
    }

    _on_pressed() {
        console.log("test on clicked!")

        // this.test_signal.connect(jsb.callable(this, this.on_test_signal), 0);
        // this.test_signal.emit();
        // this.test_signal.disconnect(jsb.callable(this, this.on_test_signal));
        this.test_signal.emit();
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
