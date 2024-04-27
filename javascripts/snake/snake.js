"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
var SnakeDirection;
(function (SnakeDirection) {
    SnakeDirection[SnakeDirection["UP"] = 0] = "UP";
    SnakeDirection[SnakeDirection["DOWN"] = 1] = "DOWN";
    SnakeDirection[SnakeDirection["RIGHT"] = 2] = "RIGHT";
    SnakeDirection[SnakeDirection["LEFT"] = 3] = "LEFT";
})(SnakeDirection || (SnakeDirection = {}));
const kBlockSize = 64;
class Snake extends godot_1.Node2D {
    constructor() {
        super(...arguments);
        this._next_dir = SnakeDirection.RIGHT;
        this._move = 0;
        this._speed = 128;
        this._spawn = 0;
        this._bodies = [];
    }
    _ready() {
        this._pos = this.get_position();
        this._block = new godot_1.Vector2i();
        this._block.x = Math.floor(this._pos.x / kBlockSize);
        this._block.y = Math.floor(this._pos.y / kBlockSize);
        this._vec = new godot_1.Vector2(1, 0);
    }
    update_pos() {
        while (this._move >= kBlockSize) {
            this._move -= kBlockSize;
            this._block.x += this._vec.x;
            this._block.y += this._vec.y;
            return true;
        }
        this._pos.x = this._block.x * kBlockSize + this._vec.x * this._move;
        this._pos.y = this._block.y * kBlockSize + this._vec.y * this._move;
        return false;
    }
    spawn() {
        if (this._spawn <= 0)
            return;
        this._spawn--;
        // let scene = <PackedScene> ResourceLoader.load("res://snake/snake_body.tscn", "", ResourceLoader.CacheMode.CACHE_MODE_REUSE);
        // console.log("load", scene);
    }
    _process(dt) {
        if (godot_1.Input.is_action_pressed("right", true)) {
            this._next_dir = SnakeDirection.RIGHT;
        }
        else if (godot_1.Input.is_action_pressed("left", true)) {
            this._next_dir = SnakeDirection.LEFT;
        }
        else if (godot_1.Input.is_action_pressed("up", true)) {
            this._next_dir = SnakeDirection.UP;
        }
        else if (godot_1.Input.is_action_pressed("down", true)) {
            this._next_dir = SnakeDirection.DOWN;
        }
        if (godot_1.Input.is_action_just_pressed("cheat_spawn", true)) {
            ++this._spawn;
        }
        const step = dt * this._speed;
        this._move += step;
        while (this.update_pos()) {
            this.spawn();
            switch (this._next_dir) {
                case SnakeDirection.RIGHT:
                    this._vec.x = 1;
                    this._vec.y = 0;
                    break;
                case SnakeDirection.LEFT:
                    this._vec.x = -1;
                    this._vec.y = 0;
                    break;
                case SnakeDirection.UP:
                    this._vec.x = 0;
                    this._vec.y = -1;
                    break;
                default:
                    this._vec.x = 0;
                    this._vec.y = 1;
                    break;
            }
        }
        this.set_position(this._pos);
    }
}
exports.default = Snake;
//# sourceMappingURL=snake.js.map