import { Button } from "godot";

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
