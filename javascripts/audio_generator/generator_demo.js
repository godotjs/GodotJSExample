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
const zzfxV = .3; // volume
const zzfxR = 44100; // sample rate
/**
 * ZzFX is a tiny sound generator designed to produce a wide variety of sound effects with minimal code overhead.
 * It's perfect for games, prototypes, and any web application that needs sound without the bulk of traditional sound files.
 *
 * @link https://killedbyapixel.github.io/ZzFX/
 * @link https://github.com/KilledByAPixel/ZzFX
 */
class zzfx {
    static sign(v) { return v > 0 ? 1 : -1; }
    // generate samples
    static generate(
    // parameters
    volume = 1, randomness = .05, frequency = 220, attack = 0, sustain = 0, release = .1, shape = 0, shapeCurve = 1, slide = 0, deltaSlide = 0, pitchJump = 0, pitchJumpTime = 0, repeatTime = 0, noise = 0, modulation = 0, bitCrush = 0, delay = 0, sustainVolume = 1, decay = 0, tremolo = 0) {
        // init parameters
        let PI2 = Math.PI * 2, startSlide = slide *= 500 * PI2 / zzfxR / zzfxR, startFrequency = frequency *= (1 + randomness * 2 * Math.random() - randomness) * PI2 / zzfxR, b = [], t = 0, tm = 0, i = 0, j = 1, r = 0, c = 0, s = 0, f, length;
        // scale by sample rate
        attack = attack * zzfxR + 9; // minimum attack to prevent pop
        decay *= zzfxR;
        sustain *= zzfxR;
        release *= zzfxR;
        delay *= zzfxR;
        deltaSlide *= 500 * PI2 / zzfxR ** 3;
        modulation *= PI2 / zzfxR;
        pitchJump *= PI2 / zzfxR;
        pitchJumpTime *= zzfxR;
        repeatTime = repeatTime * zzfxR | 0;
        // generate waveform
        for (length = attack + decay + sustain + release + delay | 0; i < length; b[i++] = s) {
            if (!(++c % (bitCrush * 100 | 0))) // bit crush
             {
                s = shape ? shape > 1 ? shape > 2 ? shape > 3 ? // wave shape
                    Math.sin((t % PI2) ** 3) : // 4 noise
                    Math.max(Math.min(Math.tan(t), 1), -1) : // 3 tan
                    1 - (2 * t / PI2 % 2 + 2) % 2 : // 2 saw
                    1 - 4 * Math.abs(Math.round(t / PI2) - t / PI2) : // 1 triangle
                    Math.sin(t); // 0 sin
                s = (repeatTime ?
                    1 - tremolo + tremolo * Math.sin(PI2 * i / repeatTime) // tremolo
                    : 1) *
                    this.sign(s) * (Math.abs(s) ** shapeCurve) * // curve 0=square, 2=pointy
                    volume * zzfxV * ( // envelope
                i < attack ? i / attack : // attack
                    i < attack + decay ? // decay
                        1 - ((i - attack) / decay) * (1 - sustainVolume) : // decay falloff
                        i < attack + decay + sustain ? // sustain
                            sustainVolume : // sustain volume
                            i < length - delay ? // release
                                (length - i - delay) / release * // release falloff
                                    sustainVolume : // release volume
                                0); // post release
                s = delay ? s / 2 + (delay > i ? 0 : // delay
                    (i < length - delay ? 1 : (length - i) / delay) * // release delay 
                        b[i - delay | 0] / 2) : s; // sample delay
            }
            f = (frequency += slide += deltaSlide) * // frequency
                Math.cos(modulation * tm++); // modulation
            t += f - f * noise * (1 - (Math.sin(i) + 1) * 1e9 % 2); // noise
            if (j && ++j > pitchJumpTime) // pitch jump
             {
                frequency += pitchJump; // apply pitch jump
                startFrequency += pitchJump; // also apply to start
                j = 0; // reset pitch jump time
            }
            if (repeatTime && !(++r % repeatTime)) // repeat
             {
                frequency = startFrequency; // reset frequency
                slide = startSlide; // reset slide
                j = j || 1; // reset pitch jump time
            }
        }
        return b;
    }
}
/**
 * Audio Generator Demo (TypeScript version)
 *  This is a demo showing how one can generate and play audio samples from TypeScript.
 *
 * @link https://godotengine.org/asset-library/asset/526
 */
class AudioGeneratorDemo extends godot_1.Node {
    constructor() {
        super(...arguments);
        this.cached_frame = new godot_1.Vector2();
        this.buffer_index = 0;
    }
    //BUG dont know why this crashs v8
    // private xxx = zzfx.generate();
    _init() {
        console.log("generator init");
    }
    _ready() {
        console.log("generate samples buffer");
        this.buffer = zzfx.generate(1.74, .05, 598, .09, .26, .41, 0, .24, 0, 0, -46, .07, .17, 0, 0, 0, .09, .42, .28, .06);
        this.player.stream.mix_rate = zzfxR;
        this.player.play();
        this.playback = this.player.get_stream_playback();
    }
    _process(delta) {
        let to_fill = this.playback.get_frames_available();
        while (to_fill > 0) {
            const v = this.buffer[this.buffer_index++ % this.buffer.length];
            this.cached_frame.x = this.cached_frame.y = v;
            this.playback.push_frame(this.cached_frame); // Audio frames are stereo.
            --to_fill;
        }
    }
}
exports.default = AudioGeneratorDemo;
__decorate([
    (0, jsb_core_1.onready)("Player")
], AudioGeneratorDemo.prototype, "player", void 0);
//# sourceMappingURL=generator_demo.js.map