import { Area2D, Node2D, NodePath } from "godot";
import * as jsb from "godot-jsb";
import { onready } from "../jsb/jsb.core";

export default class Wolf extends Node2D {
    _ready() {
        let balloon = <Area2D> this.get_node(new NodePath("balloon/CollisionShape2D"));
        balloon.area_shape_entered.connect(jsb.callable(this, this.on_balloon_collision));
        console.log("ballon", balloon);
    }

    private on_balloon_collision() {
        console.log("die");

        //TODO die
        this.queue_free();
    }
}
