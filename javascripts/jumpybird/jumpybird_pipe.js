"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
class JumpyBirdPipe extends godot_1.Node2D {
    constructor() {
        super(...arguments);
        this._pos = new godot_1.Vector2();
    }
    _ready() {
        console.log("pipe ready");
    }
    setup(pos, up, height) {
        if (up) {
            this.set_scale(new godot_1.Vector2(1, 1));
        }
        else {
            this._pos.y = 651;
            this.set_scale(new godot_1.Vector2(1, -1));
        }
        const body = this.get_node(new godot_1.NodePath("body"));
        const head = this.get_node(new godot_1.NodePath("head"));
        body.set_size(new godot_1.Vector2(64, height), false);
        head.set_position(new godot_1.Vector2(-11, height), false);
        this._pos.x = pos;
        this.set_position(this._pos);
        console.log("pipe", pos, height);
    }
    move(step) {
        this._pos.x -= step;
        if (this._pos.x < -40) {
            return false;
        }
        this.set_position(this._pos);
        return true;
    }
}
exports.default = JumpyBirdPipe;
//# sourceMappingURL=jumpybird_pipe.js.map