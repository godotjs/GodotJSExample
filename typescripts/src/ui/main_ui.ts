import { Label, Node2D, NodePath } from "godot";
import TestNode from "../test_button";

export default class MainUI extends Node2D {
    private _pc = 0;

    _ready() {
        const button = <TestNode>this.get_node(new NodePath("Control/Button"));
        if (button) {
            button.test_signal.connect(jsb.callable(this, this.on_test), 0);
        }
        
    }

    private on_test() {
        console.log("test signal emitted");
        const label = <Label>this.get_node(new NodePath("Control/Label"));
        if (label) {
            label.set_text(`hello ${this._pc++}`);
        } else {
            console.warn("Control/Label not found");
        }
    }
}
