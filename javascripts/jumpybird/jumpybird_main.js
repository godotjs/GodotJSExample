"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
	if (k2 === undefined) k2 = k;
	var desc = Object.getOwnPropertyDescriptor(m, k);
	if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
	  desc = { enumerable: true, get: function() { return m[k]; } };
	}
	Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
	if (k2 === undefined) k2 = k;
	o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
	Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
	o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
	if (mod && mod.__esModule) return mod;
	var result = {};
	if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
	__setModuleDefault(result, mod);
	return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const jsb = __importStar(require("godot-jsb"));
const kGScale = 40;
class JumpyBirdMain extends godot_1.Node {
	constructor() {
		super(...arguments);
		this._gravity = 9.8 * kGScale;
		this._velocity = 0;
		this._pv = new godot_1.Vector2(141, 300);
		this._rotation = 30;
		this._speed = 300;
		this._pipelist = [];
		this._mileage = 0;
		this._pipe_distance = 0;
		this._playing = false;
	}
	_ready() {
		console.log("jumpybird start");
		this._scene = this.get_node(new godot_1.NodePath("scene"));
		this._bird = this._scene.get_node(new godot_1.NodePath("bird"));
		const area = this._bird.get_node(new godot_1.NodePath("Area2D"));
		area.area_shape_entered.connect(jsb.callable(this, this.on_area_shape_entered), 0);
		this._bird.set_rotation_degrees(this._rotation);
		console.log("scene", this._scene);
	}
	add_pipe() {
		console.log("add pipe");
		const up_pipe = this.instantiate_asset("res://jumpybird/pipe.tscn");
		const down_pipe = this.instantiate_asset("res://jumpybird/pipe.tscn");
		const space = Math.random() * 100 + 200;
		const up_size = Math.random() * 100 + 80;
		const down_size = 480 - up_size - space;
		if (up_pipe) {
			this._pipelist.push(up_pipe);
			up_pipe.setup(640 + 100, true, up_size);
		}
		if (down_pipe) {
			this._pipelist.push(down_pipe);
			down_pipe.setup(640 + 100, false, down_size);
		}
	}
	instantiate_asset(path) {
		console.log("loading asset", path);
		const scene = godot_1.ResourceLoader.load(path, "", godot_1.ResourceLoader.CacheMode.CACHE_MODE_REUSE);
		if (scene) {
			const node = scene.instantiate(godot_1.PackedScene.GenEditState.GEN_EDIT_STATE_DISABLED);
			this._scene.add_child(node, false, godot_1.Node.InternalMode.INTERNAL_MODE_DISABLED);
			console.log("instantiate asset", path);
			return node;
		}
		console.error("no such scene", path);
	}
	end_game() {
		this._playing = false;
		// this._pv.y = 300;
		// this.jump();
	}
	on_area_shape_entered(area) {
		console.log("hit");
		this.end_game();
	}
	jump() {
		this._velocity = -6 * kGScale;
		if (this._rotation > 0) {
			this._rotation = -30;
			this._bird.set_rotation_degrees(this._rotation);
		}
	}
	_process(dt) {
		if (godot_1.Input.is_action_just_pressed("confirm", true)) {
			if (!this._playing) {
				this._playing = true;
			}
			this.jump();
		}
		if (!this._playing) {
			return;
		}
		const step = dt * this._speed;
		this._pipe_distance -= step;
		this._mileage += step;
		if (this._pipe_distance < 0) {
			this._pipe_distance = Math.random() * 180 + 220;
			this.add_pipe();
		}
		let num = this._pipelist.length;
		for (let i = 0; i < num;) {
			const pipe = this._pipelist[i];
			if (pipe.move(step)) {
				++i;
			}
			else {
				pipe.queue_free();
				--num;
				this._pipelist.splice(i, 1);
			}
		}
		this._velocity += this._gravity * dt;
		this._pv.y += this._velocity * dt;
		if (this._velocity > 0 && this._rotation < 0) {
			this._rotation = 30;
			this._bird.set_rotation_degrees(this._rotation);
		}
		this._bird.set_position(this._pv);
		if (this._pv.y > 650) {
			this.end_game();
		}
	}
}
exports.default = JumpyBirdMain;
//# sourceMappingURL=jumpybird_main.js.map
