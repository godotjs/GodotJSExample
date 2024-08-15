import { GArray, GDictionary, EditorScript } from "godot";
import { tool } from "../jsb/jsb.core";

@tool()
export default class TestDictionary extends EditorScript {
    _run() {
        let d = new GDictionary();

        d.set_keyed("field.1", "value.1");
        d.set_keyed("field.2", 2);
        
        console.log("dump dictionary values:");
        let keys = d.keys();
        for (let i = 0; i < keys.size(); ++i) {
            const key = keys.get_indexed(i);
            console.log(`key: ${key} value: ${d.get_keyed(key)}`);
        }

        // ensure 'jsb.core' module loaded before using iterator of godot Dictionary/Array (they are methods injected in jsb.core)
        for (let kv of d) {
            console.log("GodotDictionary:", kv.key, kv.value);
        }

        let a = new GArray();
        // a.append(1);
        // a.append("hi");
        // a.append(3.1415926);
        a.append_array(<any>[1, "hi", 3.1415926]);
        
        // ensure 'jsb.core' module loaded before using iterator of godot Dictionary/Array (they are methods injected in jsb.core)
        for (let v of a) {
            console.log("GodotArray:", v);
        }
    }
}
