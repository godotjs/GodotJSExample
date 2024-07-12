import { Node, Node2D, NodePath, PackedScene, ResourceLoader, ShaderMaterial, Sprite2D, Vector2 } from "godot";
import * as jsb from "godot-jsb";
import { onready } from "../jsb/jsb.core";
import Arrow from "./arrow";
import Shooter from "./shooter";

export default class PiggyMain extends Node {

    @onready("scene")
    scene!: Node2D;

    @onready("scene/shooter")
    shooter!: Shooter;

    @onready("scene/rope")
    rope!: Sprite2D;

    private instantiate_asset(path: string) {
        console.log("loading asset", path);
        const scene = <PackedScene>ResourceLoader.load(path);
        if (scene) {
            const node = scene.instantiate();
            this.scene.add_child(node);
            console.log("instantiate asset", path);
            return node;
        }
        console.error("no such scene", path);
    }

    _ready() {
        console.log("scene:", this.scene);
        console.log("shooter:", this.shooter);
        console.log("rope:", this.rope);

        this.shooter.shot.connect(jsb.callable(this, this.on_shooter_shot));
        this.shooter.moved.connect(jsb.callable(this, this.on_shooter_moved));
    }

    private on_shooter_moved(y: number) {
        let rope_y = this.rope.position.y;
        let scale = new Vector2(1, (y - rope_y) / 64);
        this.rope.scale = scale;
        let mat = <ShaderMaterial>this.rope.material;
        try {
            mat.set_shader_parameter("tiling", scale.y);
        } catch (e) { 
            console.error(e);
        }
    }

    private on_shooter_shot(pos: Vector2) {
        console.log("shot at", pos);

        let arrow = <Arrow>this.instantiate_asset("res://piggy/arrow.tscn");
        arrow.init_position(pos);
        arrow.die.connect(jsb.callable(this, this.on_arrow_die));
    }

    private on_arrow_die() {
        console.log("arrow fly out of screen");
    }
}
