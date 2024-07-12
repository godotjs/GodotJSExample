import { EditorPlugin, Node2D, Variant } from "godot";
import { export_, onready } from "../jsb/jsb.core";
import Test01Inspector from "./test_01_inspector";
import * as jsb from "godot-jsb";

let inspector: EditorPlugin;

export default class Test01 extends Node2D {

	@export_(Variant.Type.TYPE_FLOAT)
	num = 0;
	
	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta: number): void {
	}

	_enter_tree(): void {
		if (jsb.TOOLS_ENABLED) {
			if (!inspector) {
				inspector = new EditorPlugin();
				inspector.add_inspector_plugin(new Test01Inspector());
				console.log("add_inspector_plugin");
			}
		}
	}
}
