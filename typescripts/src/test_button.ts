import { Button, Signal, Vector2 } from "godot";
import { signal } from "./jsb/jsb.core";

export default class TestNode extends Button {
    private _v1 = 0

    get foo() { return this._v1 }
    set foo(value: number) { this._v1 = value }

    text = "hello"

    @signal
    test_signal!: Signal; // signal field will automatically instantiated by JSRealm

    constructor() {
        super()
        console.log("test constructor")
    }

    _notification(what: number) {
        console.log("test _notification", what)
    }

    _ready() {
        console.log("test ready")
    }

    _on_pressed() {
        console.log("test on clicked!")

        this.test_signal.connect(jsb.callable(this, this.on_test_signal), 0);
        this.test_signal.emit();
        this.test_signal.disconnect(jsb.callable(this, this.on_test_signal));
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

// const v2 = new Vector2()
// v2.x = v2.y = 123;
// console.log(v2.x, v2.y);
// v2.x ++;
// v2.y --;
// console.log(v2.x, v2.y);
