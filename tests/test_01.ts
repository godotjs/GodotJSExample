import { Node2D, Variant } from "godot";
import { export_, onready } from "../jsb/jsb.core";
import * as jsb from "godot-jsb";


export default class Test01 extends Node2D {

	@export_(Variant.Type.TYPE_FLOAT)
	num = 0;
	
	// Called every frame. 'delta' is the elapsed time since the previous frame.
	_process(delta: number): void {
	}
}
