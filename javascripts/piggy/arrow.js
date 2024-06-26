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
class Arrow extends godot_1.Sprite2D {
    constructor() {
        super(...arguments);
        this.speed = 0;
    }
    _ready() {
        // for the arrows placed in editor
        this._pos = this.get_position();
    }
    init_position(pos) {
        this._pos = pos;
        this.set_position(this._pos);
    }
    _process(dt) {
        this._pos.x -= dt * this.speed;
        if (this._pos.x < -32) {
            this.die.emit();
            this.queue_free();
            return;
        }
        this.set_position(this._pos);
    }
}
exports.default = Arrow;
__decorate([
    (0, jsb_core_1.signal)()
], Arrow.prototype, "die", void 0);
__decorate([
    (0, jsb_core_1.export_)(godot_1.Variant.Type.TYPE_FLOAT)
], Arrow.prototype, "speed", void 0);
//# sourceMappingURL=arrow.js.map