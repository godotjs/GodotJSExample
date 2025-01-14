import { Button, Callable, EditorInspectorPlugin, MarginContainer, Object } from "godot";
import Test01 from "./test_01";

export default class Test01Inspector extends EditorInspectorPlugin {
    _can_handle(object: Object): boolean {
        return object instanceof Test01;
    }

    _parse_begin(object: Object): void {
        // let test = <Test01>object;
        let button = new Button();
        button.text = "My Button";
        button.pressed.connect(Callable.create(function () {
            console.log("MyButton clicked");
        }));

        let container = new MarginContainer();
        container.add_theme_constant_override("margin_bottom", 10);
        container.add_child(button);

        this.add_custom_control(container);
    }
}
