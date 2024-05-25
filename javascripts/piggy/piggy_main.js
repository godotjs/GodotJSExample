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
class PiggyMain extends godot_1.Node {
    instantiate_asset(path) {
        console.log("loading asset", path);
        const scene = godot_1.ResourceLoader.load(path);
        if (scene) {
            const node = scene.instantiate();
            this.scene.add_child(node);
            console.log("instantiate asset", path);
            return node;
        }
        console.error("no such scene", path);
    }
    _ready() {
        console.log(this.scene);
        console.log(this.shooter);
        console.log(this.rope);
        this.shooter.shot.connect(jsb.callable(this, this.on_shooter_shot));
        this.shooter.moved.connect(jsb.callable(this, this.on_shooter_moved));
    }
    on_shooter_moved(y) {
        let rope_y = this.rope.get_position().y;
        let scale = new godot_1.Vector2(1, (y - rope_y) / 64);
        this.rope.set_scale(scale);
        let mat = this.rope.get_material();
        try {
            mat.set_shader_parameter("tiling", scale.y);
        }
        catch (e) {
            console.error(e);
        }
    }
    on_shooter_shot(pos) {
        console.log("shot at", pos);
        let arrow = this.instantiate_asset("res://piggy/arrow.tscn");
        arrow.init_position(pos);
        arrow.die.connect(jsb.callable(this, this.on_arrow_die));
    }
    on_arrow_die() {
        console.log("arrow fly out of screen");
    }
}
exports.default = PiggyMain;
__decorate([
    (0, jsb_core_1.onready_)("scene")
], PiggyMain.prototype, "scene", void 0);
__decorate([
    (0, jsb_core_1.onready_)("scene/shooter")
], PiggyMain.prototype, "shooter", void 0);
__decorate([
    (0, jsb_core_1.onready_)("scene/rope")
], PiggyMain.prototype, "rope", void 0);
//# sourceMappingURL=piggy_main.js.map