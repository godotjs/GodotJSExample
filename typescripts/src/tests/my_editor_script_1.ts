import { EditorScript } from "godot";
import { tool } from "../jsb/jsb.core";

@tool()
export default class MyEditorScript1 extends EditorScript {
    _run() {
        console.log("my editor script run");
    }
}
