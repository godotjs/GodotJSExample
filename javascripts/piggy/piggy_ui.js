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
class PiggyUI extends godot_1.Control {
    set_debug_position(x, y) {
        this.position_label.text = `X:${x} Y:${y}`;
    }
    _ready() {
        console.log("piggy ui");
    }
}
exports.default = PiggyUI;
__decorate([
    (0, jsb_core_1.onready)("debug_info/position_label")
], PiggyUI.prototype, "position_label", void 0);
//# sourceMappingURL=piggy_ui.js.map