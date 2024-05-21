]"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
class MainUI extends godot_1.Node2D {
	constructor() {
		super(...arguments);
		this._pc = 0;
	}
	_ready() {
		const button = this.get_node(new godot_1.NodePath("Control/Button"));
		if (button) {
			button.test_signal.connect(jsb.callable(this, this.on_test), 0);
		}
	}
	on_test() {
		console.log("test signal emitted");
		const label = this.get_node(new godot_1.NodePath("Control/Label"));
		if (label) {
			label.set_text(`hello ${this._pc++}`);
		}
		else {
			console.warn("Control/Label not found");
		}
	}
}
exports.default = MainUI;
//# sourceMappingURL=main_ui.js.map
