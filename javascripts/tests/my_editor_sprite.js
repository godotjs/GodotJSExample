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
// see example code in GDScript/C# at:
// https://docs.godotengine.org/en/stable/tutorials/plugins/running_code_in_the_editor.html#doc-running-code-in-the-editor
let MyEditorSprite = class MyEditorSprite extends godot_1.Sprite2D {
    constructor() {
        super(...arguments);
        /**
         * plain field for `export`
         */
        this.unused_int = 0;
        this._clockwise = false;
        this._speed = 0;
    }
    /**
     * get/set property for `export` (both must be defined)
     */
    get speed() { return this._speed; }
    set speed(value) {
        if (this._speed != value) {
            this._speed = value;
            this.update_configuration_warnings();
        }
    }
    _ready() {
        this._clockwise = godot_1.Engine.is_editor_hint();
    }
    _process(delta) {
        const step = Math.PI * delta * (this._clockwise ? this._speed : -this._speed);
        // this.set_rotation(this.get_rotation() + step);
        this.rotation += step;
    }
    _get_configuration_warnings() {
        let warnings = new godot_1.PackedStringArray();
        if (this._speed >= -0.01 && this._speed < 0.01) {
            warnings.append("speed is too low");
        }
        return warnings;
    }
};
__decorate([
    (0, jsb_core_1.export_)(godot_1.Variant.Type.TYPE_FLOAT)
], MyEditorSprite.prototype, "speed", null);
__decorate([
    (0, jsb_core_1.export_)(godot_1.Variant.Type.TYPE_INT)
], MyEditorSprite.prototype, "unused_int", void 0);
MyEditorSprite = __decorate([
    (0, jsb_core_1.icon)("res://icon/affiliate.svg"),
    (0, jsb_core_1.tool)()
], MyEditorSprite);
exports.default = MyEditorSprite;
//# sourceMappingURL=my_editor_sprite.js.map