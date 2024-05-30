import { Signal, Sprite2D, Variant, Vector2 } from "godot";
import { export_, signal_ } from "../jsb/jsb.core";

export default class Arrow extends Sprite2D {
    private _pos!: Vector2;
    
    @signal_()
    die!: Signal;

    @export_(Variant.Type.TYPE_FLOAT)
    speed = 0;

    _ready() {
        // for the arrows placed in editor
        this._pos = this.get_position();
    }
    
    init_position(pos: Vector2) {
        this._pos = pos;
        this.set_position(this._pos);
    }

    _process(dt: number) {
        this._pos.x -= dt * this.speed;

        if (this._pos.x < -32) {
            this.die.emit();
            this.queue_free();
            return;
        }

        this.set_position(this._pos);
    }
}
