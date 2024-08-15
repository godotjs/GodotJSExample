import { EditorPlugin, Node2D, Variant, Vector2 } from "godot";
import { export_, onready, tool } from "jsb.core";
import Test01Inspector from "./test_01_inspector";
import * as jsb from "godot-jsb";

let inspector: EditorPlugin;

@tool()
export default class Test01 extends Node2D {

	@export_(Variant.Type.TYPE_FLOAT)
	num = 0;
	
	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta: number): void {
		for (let i = 0; i < 100; ++i) {
			let v = new Vector2();
			v.x = 1;
			v.y = v.x * 2;
		}
	}

	_enter_tree(): void {
		console.log("test01 enter tree")
		if (jsb.TOOLS_ENABLED) {
			if (!inspector) {
				inspector = new EditorPlugin();
				inspector.add_inspector_plugin(new Test01Inspector());
				console.log("add_inspector_plugin");
			}
		}
	}
}
