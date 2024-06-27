import { AudioStreamGenerator, AudioStreamGeneratorPlayback, AudioStreamPlayer, Node, Vector2 } from "godot";
import { onready } from "../jsb/jsb.core";

const sample_hz = 22050.0 // Keep the number of samples to mix low, GDScript is not super fast.
const pulse_hz = 440.0
const increment = pulse_hz / sample_hz
let phase = 0.0

function fmod(a: number, b: number) {
    return a - b * Math.floor(a / b);
}

/**
 * Audio Generator Demo (TypeScript version)
 *  This is a demo showing how one can generate and play audio samples from GDScript.  
 *  It plays a simple 440 Hz sine wave at 22050 Hz.
 * 
 * @link https://godotengine.org/asset-library/asset/526
 */
export default class AudioGeneratorDemo extends Node {
    @onready("Player")
    player!: AudioStreamPlayer;

    private playback!: AudioStreamGeneratorPlayback;
    private cached_frame = new Vector2();

    _ready(): void {
        (<AudioStreamGenerator>this.player.stream).mix_rate = sample_hz;
        this.player.play();
        this.playback = <AudioStreamGeneratorPlayback> this.player.get_stream_playback();
    }

    _process(delta: number): void {
        let to_fill = this.playback.get_frames_available();
        while (to_fill > 0) {
            const v = Math.sin(phase * (/*TAU*/ Math.PI * 2));
            this.cached_frame.x = this.cached_frame.y = v;
            this.playback.push_frame(this.cached_frame); // Audio frames are stereo.
            phase = fmod(phase + increment, 1.0);
            --to_fill;
        }
    }
}
