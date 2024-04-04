"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
class TestNode extends godot_1.Button {
    get foo() { return this._v1; }
    set foo(value) { this._v1 = value; }
    constructor() {
        super();
        this._v1 = 0;
        this.text = "hello";
        console.log("test constructor");
    }
    _notification(what) {
        console.log("test _notification", what);
    }
    _ready() {
        console.log("test ready");
    }
    _on_pressed() {
        console.log("test on clicked!");
    }
    work() {
        console.log("test bark at the moon");
    }
}
exports.default = TestNode;
//# sourceMappingURL=test_button.js.map