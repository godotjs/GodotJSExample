import { Input, Node2D, PackedScene, ResourceLoader, Vector2, Vector2i } from "godot";
import SnakeBody from "./snake_body";

enum SnakeDirection {
    UP, DOWN, RIGHT, LEFT
}

const kBlockSize = 64;

export default class Snake extends Node2D {
    private _block!: Vector2i;
    private _pos!: Vector2;
    private _next_dir = SnakeDirection.RIGHT;
    private _vec!: Vector2;
    private _move = 0;
    private _speed = 128;
    private _spawn = 0;
    private _bodies: Array<SnakeBody> = [];

    _ready() {
        this._pos = this.get_position();
        this._block = new Vector2i();
        this._block.x = Math.floor(this._pos.x / kBlockSize);
        this._block.y = Math.floor(this._pos.y / kBlockSize);
        this._vec = new Vector2(1, 0);
    }

    private update_pos() {
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

    private spawn() {
        if (this._spawn <= 0) return;
        this._spawn--;
        // let scene = <PackedScene> ResourceLoader.load("res://snake/snake_body.tscn", "", ResourceLoader.CacheMode.CACHE_MODE_REUSE);
        // console.log("load", scene);
    }

    _process(dt: number) {
        if (Input.is_action_pressed("right", true)) {
            this._next_dir = SnakeDirection.RIGHT;
        } else if (Input.is_action_pressed("left", true)) {
            this._next_dir = SnakeDirection.LEFT;
        } else if (Input.is_action_pressed("up", true)) {
            this._next_dir = SnakeDirection.UP;
        } else if (Input.is_action_pressed("down", true)) {
            this._next_dir = SnakeDirection.DOWN;
        }
        if (Input.is_action_just_pressed("cheat_spawn", true)) {
            ++this._spawn;
        }

        const step = dt * this._speed;
        this._move += step;
        
        while (this.update_pos()) {
            this.spawn();
            switch (this._next_dir) {
                case SnakeDirection.RIGHT: this._vec.x = 1; this._vec.y = 0; break;
                case SnakeDirection.LEFT: this._vec.x = -1; this._vec.y = 0; break;
                case SnakeDirection.UP: this._vec.x = 0; this._vec.y = -1; break;
                default: this._vec.x = 0; this._vec.y = 1; break;
            }
        }
        this.set_position(this._pos);
    }
}
