import { EditorScript, Vector3, Vector4 } from "godot";
import { tool } from "jsb.core";

@tool()
export default class MyEditorScript1 extends EditorScript {
    _run() {
        for (let i = 0; i < 100000; ++i) {
            let x = new Vector3();
        }
        console.log("my editor script run");
    }
}
