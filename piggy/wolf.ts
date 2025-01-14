import { Area2D, Callable, Node2D, NodePath } from "godot";

export default class Wolf extends Node2D {
    _ready() {
        console.log("wolf.ready");
        try {
            let balloon = <Area2D>this.get_node(new NodePath("Area2D"));
            console.log(typeof balloon.area_shape_entered);
            balloon.area_shape_entered.connect(Callable.create(this, this.on_balloon_collision));
            console.log("wolf.ready area");
            // console.log(balloon);
        } catch (err) {
            console.error(err);
        }
    }

    private on_balloon_collision() {
        console.log("die");

        //TODO die
        this.queue_free();
    }
}
