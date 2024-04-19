import { Button, Vector2 } from "godot";

export default class TestNode extends Button {
    private _v1 = 0

    get foo() { return this._v1 }
    set foo(value: number) { this._v1 = value }

    text = "hello"

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
