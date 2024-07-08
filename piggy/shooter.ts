import { Input, Marker2D, Node, Node2D, NodePath, PackedScene, ResourceLoader, Signal, Sprite2D, Variant, Vector2 } from "godot";
import { export_, signal } from "../jsb/jsb.core";
import PiggyUI from "./piggy_ui";

export default class Shooter extends Sprite2D {

    @export_(Variant.Type.TYPE_FLOAT)
    speed: number = 0;

    @signal()
    shot!: Signal;

    @signal()
    moved!: Signal;

    private _dirty = false;
    private _pos!: Vector2;
    
    _ready() {
        this._pos = this.get_position();
    }

    _process(dt: number) {
        if (Input.is_action_pressed("up")) {
            this._pos.y = Math.max(120, this._pos.y - dt * this.speed);
            this._dirty = true;
        } else if (Input.is_action_pressed("down")) {
            this._pos.y = Math.min(386, this._pos.y + dt * this.speed);
            this._dirty = true;
        } 
        if (Input.is_action_just_pressed("confirm")) {
            this._shot();
        }

        if (this._dirty) {
            this._dirty = false;
            this.set_position(this._pos);
            this.moved.emit(this._pos.y);

            let ui = <PiggyUI>this.get_tree().current_scene.get_node(new NodePath("ui"));
            ui.set_debug_position(Math.floor(this.position.x), Math.floor(this.position.y));
        }
    }

    private _shot() {
        let marker = <Marker2D>this.get_node(new NodePath("shot_point"));
        this.shot.emit(marker.get_global_position());
    }
}
