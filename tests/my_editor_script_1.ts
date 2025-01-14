import { EditorScript, Time, Vector3, Vector4 } from "godot";
import { tool } from "godot.annotations";
import BotStats from "./bot_stats";

@tool()
export default class MyEditorScript1 extends EditorScript {
    _run() {
        {
            let b = new BotStats();
            console.log("BotStats.health:", b.health);
        }

        const s = Time.get_ticks_msec();
        for (let i = 0; i < 100000; ++i) {
            let x = new Vector3();
        }
        const d = Time.get_ticks_msec() - s;
        console.log("my editor script run", d);
    }
}
