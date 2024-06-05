"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	if (k2 === undefined) k2 = k;
	var desc = Object.getOwnPropertyDescriptor(m, k);
	if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	  desc = { enumerable: true, get: function() { return m[k]; } };
	}
	Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
	if (k2 === undefined) k2 = k;
	o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
	Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
	o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
	if (mod && mod.__esModule) return mod;
	var result = {};
	if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	__setModuleDefault(result, mod);
	return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const jsb = __importStar(require("godot-jsb"));
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
