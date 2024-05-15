import { EditorScript } from "godot";
import { tool_ } from "../jsb/jsb.core";

@tool_()
export default class MyEditorScript1 extends EditorScript {
    _run() {
        console.log("my editor script run");
    }
}
