import { Node2D, NodePath, TextureRect, Vector2 } from "godot";

export default class JumpyBirdPipe extends Node2D {
    private _pos = new Vector2();

    _ready() {
        console.log("pipe ready");
    }

    setup(pos: number, up: boolean, height: number) {
        if (up) {
            this.scale = new Vector2(1, 1);
        } else {
            this._pos.y = 480;
            this.scale = new Vector2(1, -1);
        }
        const body = <TextureRect>this.get_node(new NodePath("body"));
        const head = <TextureRect>this.get_node(new NodePath("head"));
        body.set_size(new Vector2(64, height), false);
        head.position = new Vector2(-11, height), false;
        this._pos.x = pos;
        this.position = this._pos;
        console.log("pipe", pos, height);
    }

    move(step: number) {
        this._pos.x -= step;
        if (this._pos.x < -40) {
            return false;
        }
        this.position = this._pos;
        return true;
    }
}