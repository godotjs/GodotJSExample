import { Dictionary, EditorScript } from "godot";
import { tool } from "../jsb/jsb.core";

@tool()
export default class TestDictionary extends EditorScript {
    _run() {
        let d = new Dictionary();

        d.set_keyed("field.1", "value.1");
        d.set_keyed("field.2", 2);
        
        console.log("dump dictionary values:");
        let keys = d.keys();
        for (let i = 0; i < keys.size(); ++i) {
            const key = keys.get_indexed(i);
            console.log(`key: ${key} value: ${d.get_keyed(key)}`);
        }
    }
}
