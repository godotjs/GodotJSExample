import { Control, Label } from "godot";
import { onready } from "godot.annotations";

export default class PiggyUI extends Control {
    @onready("debug_info/position_label")
    position_label!: Label;

    set_debug_position(x: number, y: number) {
        this.position_label.text = `X:${x} Y:${y}`;
    }

    _ready(): void {
        console.log("piggy ui");
    }
}