import { Label, Node2D, NodePath, Variant } from "godot";
import * as jsb from "godot-jsb";
import TestNode from "../test_button";
import { export_, seconds } from "../jsb/jsb.core";

export default class MainUI extends Node2D {
	private _pc = 0;

	@export_(Variant.Type.TYPE_FLOAT)
	speed = 200

	async _ready() {
		const button = <TestNode>this.get_node(new NodePath("Control/Button"));
		if (button) {
			button.test_signal.connect(jsb.callable(this, this.on_test), 0);
		}

		(<Label>this.get_node("Control/Label")).text = "wait for 3 seconds with await";
		await seconds(3);
		(<Label>this.get_node("Control/Label")).text = "3 seconds passed";
	}

	private on_test() {
		console.log("test signal emitted");
		const label = <Label>this.get_node(new NodePath("Control/Label"));
		if (label) {
			label.text = `hello ${this._pc++}`;
		} else {
			console.warn("Control/Label not found");
		}

		console.trace("trace test");
		console.debug("debug test");
		console.info("info test");
		console.log("log test");
		console.warn("warn test");
		console.error("error test");
	}
}
