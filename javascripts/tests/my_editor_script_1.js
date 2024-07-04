"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const jsb_core_1 = require("../jsb/jsb.core");
let MyEditorScript1 = class MyEditorScript1 extends godot_1.EditorScript {
	_run() {
		console.log("my editor script run");
	}
};
MyEditorScript1 = __decorate([
	(0, jsb_core_1.tool)()
], MyEditorScript1);
exports.default = MyEditorScript1;
//# sourceMappingURL=my_editor_script_1.js.map
