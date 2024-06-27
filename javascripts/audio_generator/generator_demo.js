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
const sample_hz = 22050.0; // Keep the number of samples to mix low, GDScript is not super fast.
const pulse_hz = 440.0;
const increment = pulse_hz / sample_hz;
let phase = 0.0;
function fmod(a, b) {
    return a - b * Math.floor(a / b);
}
/**
 * Audio Generator Demo (TypeScript version)
 *  This is a demo showing how one can generate and play audio samples from GDScript.
 *  It plays a simple 440 Hz sine wave at 22050 Hz.
 *
 * @link https://godotengine.org/asset-library/asset/526
 */
class AudioGeneratorDemo extends godot_1.Node {
    constructor() {
        super(...arguments);
        this.cached_frame = new godot_1.Vector2();
    }
    _ready() {
        this.player.stream.mix_rate = sample_hz;
        this.player.play();
        this.playback = this.player.get_stream_playback();
    }
    _process(delta) {
        let to_fill = this.playback.get_frames_available();
        while (to_fill > 0) {
            const v = Math.sin(phase * ( /*TAU*/Math.PI * 2));
            this.cached_frame.x = this.cached_frame.y = v;
            this.playback.push_frame(this.cached_frame); // Audio frames are stereo.
            phase = fmod(phase + increment, 1.0);
            --to_fill;
        }
    }
}
exports.default = AudioGeneratorDemo;
__decorate([
    (0, jsb_core_1.onready)("Player")
], AudioGeneratorDemo.prototype, "player", void 0);
//# sourceMappingURL=generator_demo.js.map