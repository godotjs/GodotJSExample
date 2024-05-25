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
class Shooter extends godot_1.Sprite2D {
    constructor() {
        super(...arguments);
        this.speed = 0;
        this._dirty = false;
    }
    _ready() {
        this._pos = this.get_position();
    }
    _process(dt) {
        if (godot_1.Input.is_action_pressed("up")) {
            this._pos.y -= dt * this.speed;
            this._dirty = true;
        }
        else if (godot_1.Input.is_action_pressed("down")) {
            this._pos.y += dt * this.speed;
            this._dirty = true;
        }
        if (godot_1.Input.is_action_just_pressed("confirm")) {
            this._shot();
        }
        if (this._dirty) {
            this._dirty = false;
            this.set_position(this._pos);
            this.moved.emit(this._pos.y);
        }
    }
    _shot() {
        let marker = this.get_node(new godot_1.NodePath("shot_point"));
        this.shot.emit(marker.get_global_position());
    }
}
exports.default = Shooter;
__decorate([
    (0, jsb_core_1.export_)(jsb.VariantType.TYPE_FLOAT)
], Shooter.prototype, "speed", void 0);
__decorate([
    (0, jsb_core_1.signal_)()
], Shooter.prototype, "shot", void 0);
__decorate([
    (0, jsb_core_1.signal_)()
], Shooter.prototype, "moved", void 0);
//# sourceMappingURL=shooter.js.map