import { Sprite2D, Vector2 } from "godot";
import { kBlockSize } from "./constants";

export default class Coin extends Sprite2D {
    private _x: number = 0;
    private _y: number = 0;
    
    // use cached Vector2 to avoid unnecessary garbages
    private _cached_pos!: Vector2;

    _ready() {
        this._cached_pos = new Vector2();
    }
    
    get x() { return this._x; }
    set x(value: number) { this._x = value; }

    get y() { return this._y; }
    set y(value: number) { this._y = value; }

    update_position() {
        this._cached_pos.x = (this._x+1) * kBlockSize;
        this._cached_pos.y = (this._y+1) * kBlockSize;
        this.position = this._cached_pos;
    }
}