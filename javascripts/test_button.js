"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const jsb_core_1 = require("./jsb/jsb.core");
class TestNode extends godot_1.Button {
	get foo() { return this._v1; }
	set foo(value) { this._v1 = value; }
	constructor() {
		super();
		this._v1 = 0;
		this.hello = "hello";
		console.log("test constructor");
	}
	_notification(what) {
		console.log("test _notification", what);
	}
	_ready() {
		console.log("test ready");
	}
	_on_pressed() {
		console.log("test on clicked!");
		// this.test_signal.connect(jsb.callable(this, this.on_test_signal), 0);
		// this.test_signal.emit();
		// this.test_signal.disconnect(jsb.callable(this, this.on_test_signal));
		this.test_signal.emit();
	}
	on_test_signal() {
		console.log("on test signal");
	}
	work() {
		console.log("test bark at the moon");
	}
	static unbound_call() {
	}
}
exports.default = TestNode;
__decorate([
	(0, jsb_core_1.onready_)("ready_node")
], TestNode.prototype, "ready_node", void 0);
__decorate([
	(0, jsb_core_1.export_)(jsb.VariantType.TYPE_STRING)
], TestNode.prototype, "hello", void 0);
__decorate([
	(0, jsb_core_1.signal_)()
], TestNode.prototype, "test_signal", void 0);
// const v2 = new Vector2()
// v2.x = v2.y = 123;
// console.log(v2.x, v2.y);
// v2.x ++;
// v2.y --;
// console.log(v2.x, v2.y);
//# sourceMappingURL=test_button.js.map
