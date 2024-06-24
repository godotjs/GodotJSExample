import { Area2D, Input, Node, Node2D, NodePath, PackedScene, ResourceLoader, Sprite2D, Vector2 } from "godot";
import * as jsb from "godot-jsb";
import JumpyBirdPipe from "./jumpybird_pipe";

const kGScale = 40;

export default class JumpyBirdMain extends Node {
    private _bird!: Sprite2D;
    private _scene!: Node2D;
    private _gravity = 9.8 * kGScale;
    private _velocity = 0;
    private _pv = new Vector2(141, 300);
    private _rotation = 30;
    private _speed = 300;
    private _pipelist: Array<JumpyBirdPipe> = [];
    private _mileage = 0;
    private _pipe_distance = 0;
    private _playing = false;

    _ready() {
        console.log("jumpybird start");
        this._scene = <Sprite2D>this.get_node(new NodePath("scene"));
        this._bird = <Sprite2D>this._scene.get_node(new NodePath("bird"));
        const area = <Area2D>this._bird.get_node(new NodePath("Area2D"));
        area.area_shape_entered.connect(jsb.callable(this, this.on_area_shape_entered), 0);
        this._bird.rotation_degrees = this._rotation;
        console.log("scene", this._scene);
    }

    private add_pipe() {
        console.log("add pipe");
        const up_pipe = <JumpyBirdPipe>this.instantiate_asset("res://jumpybird/pipe.tscn");
        const down_pipe = <JumpyBirdPipe>this.instantiate_asset("res://jumpybird/pipe.tscn");
        const space = Math.random() * 100 + 200;
        const up_size = Math.random() * 100 + 80;
        const down_size = 480 - up_size - space;

        if (up_pipe) {
            this._pipelist.push(up_pipe);
            up_pipe.setup(640+100, true, up_size);
        }
        if (down_pipe) {
            this._pipelist.push(down_pipe);
            down_pipe.setup(640+100, false, down_size);
        }
    }

    private instantiate_asset(path: string) {
        console.log("loading asset", path);
        const scene = <PackedScene>ResourceLoader.load(path, "", ResourceLoader.CacheMode.CACHE_MODE_REUSE);
        if (scene) {
            const node = <Node2D>scene.instantiate(PackedScene.GenEditState.GEN_EDIT_STATE_DISABLED);
            this._scene.add_child(node, false, Node.InternalMode.INTERNAL_MODE_DISABLED);
            console.log("instantiate asset", path);
            return node;
        } 
        console.error("no such scene", path);
    }

    private end_game() {
        this._playing = false;
        // this._pv.y = 300;
        // this.jump();
    }

    private on_area_shape_entered(area: Area2D) {
        console.log("hit");
        this.end_game();
    }

    private jump() {
        this._velocity = -6 * kGScale;
        if (this._rotation > 0) {
            this._rotation = -30;
            this._bird.rotation_degrees = this._rotation;
        }
    }

    _process(dt: number) {
        if (Input.is_action_just_pressed("confirm", true)) {
            if (!this._playing) {
                this._playing = true;
            }
            this.jump();
        }
        if (!this._playing) {
            return;
        }

        const step = dt * this._speed;
        this._pipe_distance -= step;
        this._mileage += step;
        if (this._pipe_distance < 0) {
            this._pipe_distance = Math.random() * 180 + 220;
            this.add_pipe();
        }
        let num = this._pipelist.length;
        for (let i = 0; i < num; ) {
            const pipe = this._pipelist[i];
            if (pipe.move(step)) {
                ++i;
            } else {
                pipe.queue_free();
                --num;
                this._pipelist.splice(i, 1);
            }
        }

        this._velocity += this._gravity * dt;
        this._pv.y += this._velocity * dt;
        if (this._velocity > 0 && this._rotation < 0) {
            this._rotation = 30;
            this._bird.rotation_degrees = this._rotation;
        }
        this._bird.position = this._pv;
        if (this._pv.y > 650) {
            this.end_game();
        }
    }
}
