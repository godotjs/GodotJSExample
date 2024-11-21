import { float64, Node2D } from "godot";

export default class FooBase extends Node2D {
    protected ticks = 0;

    _process(delta: float64): void {
        ++this.ticks;
        const step = Math.PI * delta * 2;
        this.rotation = (this.rotation + step) % (Math.PI * 2);
    }
}