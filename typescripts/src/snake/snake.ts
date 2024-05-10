import { Input, Node, Node2D, PackedScene, ResourceLoader, Vector2, Vector2i } from "godot";
import SnakeBody from "./snake_body";
import { kBlockSize, kHeight, kWidth, SnakeDirection } from "./constants";
import Coin from "./coin";

const kSnakeBodyAssetPath = "res://snake/snake_body.tscn";
const kCoinAssetPath = "res://snake/coin.tscn";
const kWallAssetPath = "res://snake/wall.tscn";

enum GameState {
    PLAYING,
    PAUSED,
    ENDED,
}

export default class Snake extends Node2D {
    private _next_dir = SnakeDirection.RIGHT;
    private _move = 0;
    private _speed = 128;
    private _bodies: Array<SnakeBody> = [];
    private _coin!: Coin;
    private _state = GameState.PLAYING;

    _ready() {
        this._coin = <Coin>this.instantiate_asset(kCoinAssetPath);
        this.restart();
    }

    private add_snake_body(x: number, y: number) {
        const body = <SnakeBody>this.instantiate_asset(kSnakeBodyAssetPath);
        this._bodies.push(body);
        body.x = x; body.y = y;
        body.update_position();
        return body;
    }

    private instantiate_asset(path: string) {
        console.log(PackedScene);
        const scene = <PackedScene>ResourceLoader.load(path, "", ResourceLoader.CacheMode.CACHE_MODE_REUSE);
        if (scene) {
            const node = <Node2D>scene.instantiate(PackedScene.GenEditState.GEN_EDIT_STATE_DISABLED);
            this.add_child(node, false, Node.InternalMode.INTERNAL_MODE_DISABLED);
            node.set_scale(new Vector2(0.25, 0.25))
            return node;
        }
    }

    private check_body(x: number, y: number) {
        for (let body of this._bodies) {
            if (body.x == x && body.y == y) {
                return true;
            }
        }
        return false;
    }

    private set_coin_location() {
        let x = Math.floor(Math.random() * 10);
        let y = Math.floor(Math.random() * 10);
        let rx = x;
        let ry = y;
        while (true) {
            if (this.check_body(x, y)) {
                if (x < kWidth - 1) {
                    ++x;
                } else {
                    x = 0;
                    if (y < kHeight - 1) {
                        ++y;
                    } else {
                        y = 0;
                    }
                }
                if (x == rx && y == ry) {
                    console.log("no space");
                    return;
                }
                continue;
            }

            this._coin.x = x; this._coin.y = y;
            this._coin.update_position();
            console.log(`spawn coin at ${this._coin.x}, ${this._coin.y}`);
            break;
        }
    }

    private check_wall(x: number, y: number) {
        if (x < 0 || x >= kWidth) return true;
        if (y < 0 || y >= kHeight) return true;
        //TODO 
        return false;
    }

    private set_head_location(x: number, y: number, delta_mode: boolean) {
        const len = this._bodies.length;
        if (len == 0) return;
        let head = this._bodies[0];
        let mx = head.x; let my = head.y;
        if (delta_mode) { head.x = x + mx; head.y = y + my; }
        else { head.x = x; head.y = y; }
        if (this.check_wall(head.x, head.y)) {
            this._state = GameState.ENDED;
            return;
        }
        const eat = head.x == this._coin.x && head.y == this._coin.y;
        head.update_position();

        for (let i = 1; i < len; i++) {
            const body = this._bodies[i];
            const lx = body.x; const ly = body.y;
            body.x = mx; body.y = my;
            body.update_position();
            mx = lx; my = ly;
        }
        if (eat) {
            this.add_snake_body(mx, my);
            this.set_coin_location();
        }
    }

    private restart() {
        for (let body of this._bodies) {
            body.queue_free();
        }
        this._bodies.splice(0);
        this.add_snake_body(5, 5);
        this.add_snake_body(5, 4);
        this.add_snake_body(5, 3);
        this._next_dir = SnakeDirection.DOWN;
        this._move = 0;
        // this._speed 
        this.set_coin_location();
        this._state = GameState.PLAYING;
    }

    _process(dt: number) {
        switch (this._state) {
            case GameState.ENDED: {
                if (Input.is_action_just_pressed("confirm", true)) {
                    this.restart();
                }
                return;
            }
            case GameState.PLAYING: {
                if (Input.is_action_pressed("right", true)) {
                    if (this._next_dir != SnakeDirection.LEFT) {
                        this._next_dir = SnakeDirection.RIGHT;
                    }
                } else if (Input.is_action_pressed("left", true)) {
                    if (this._next_dir != SnakeDirection.RIGHT) {
                        this._next_dir = SnakeDirection.LEFT;
                    }
                } else if (Input.is_action_pressed("up", true)) {
                    if (this._next_dir != SnakeDirection.DOWN) {
                        this._next_dir = SnakeDirection.UP;
                    }
                } else if (Input.is_action_pressed("down", true)) {
                    if (this._next_dir != SnakeDirection.UP) {
                        this._next_dir = SnakeDirection.DOWN;
                    }
                } else if (Input.is_action_just_pressed("confirm", true)) {
                    this._state = GameState.PAUSED;
                    return;
                }

                const step = dt * this._speed;
                this._move += step;
                if (this._move >= kBlockSize) {
                    this._move -= kBlockSize;

                    switch (this._next_dir) {
                        case SnakeDirection.RIGHT: this.set_head_location(1, 0, true); break;
                        case SnakeDirection.LEFT: this.set_head_location(-1, 0, true); break;
                        case SnakeDirection.UP: this.set_head_location(0, -1, true); break;
                        default: this.set_head_location(0, 1, true); break;
                    }
                }
                return;
            }
            default: {
                if (Input.is_action_just_pressed("confirm", true)) {
                    this._state = GameState.PLAYING;
                }
                return;
            }
        }

    }
}