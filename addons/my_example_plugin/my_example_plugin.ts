import { Control, EditorPlugin, is_instance_valid, Node, PackedScene, ResourceLoader } from "godot";
import { tool } from "../../jsb/jsb.core";

@tool()
export default class MyExamplePlugin extends EditorPlugin {
    private dock!: Control;

    _enter_tree(): void {
        console.log("MyExamplePlugin enter_tree");
        let scene = <PackedScene> ResourceLoader.load("res://addons/my_example_plugin/my_example_dock.tscn");
        this.dock = <Control> scene.instantiate();
        this.add_control_to_bottom_panel(this.dock, "My Example Plugin (TS)");
    }

    _exit_tree(): void {
        console.log("MyExamplePlugin exit_tree");
        this.remove_control_from_bottom_panel(this.dock);
        this.dock.free();
        console.assert(!is_instance_valid(this.dock));
    }
}
