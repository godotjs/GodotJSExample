"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const constants_1 = require("./constants");
const jsb_core_1 = require("../jsb/jsb.core");
const kSnakeBodyAssetPath = "res://snake/snake_body.tscn";
const kCoinAssetPath = "res://snake/coin.tscn";
const kWallAssetPath = "res://snake/wall.tscn";
var GameState;
(function (GameState) {
	GameState[GameState["PLAYING"] = 0] = "PLAYING";
	GameState[GameState["PAUSED"] = 1] = "PAUSED";
	GameState[GameState["ENDED"] = 2] = "ENDED";
})(GameState || (GameState = {}));
class Snake extends godot_1.Node {
	constructor() {
		super(...arguments);
		// the value of exported field will be restored by godot on loading instance
		// all modifications before 'ready' on this field will be discarded 
		this._speed = 100;
		this._next_dir = constants_1.SnakeDirection.RIGHT;
		this._current_dir = constants_1.SnakeDirection.RIGHT;
		this._move = 0;
		this._bodies = [];
		this._state = GameState.PLAYING;
	}
	_ready() {
		if (godot_1.Engine.is_editor_hint()) {
			console.log("snake ready in editor mode?");
			return;
		}
		console.log("snake ready speed:", this._speed);
		console.assert(typeof this._speed === "number");
		this._control_node = this.get_node(new godot_1.NodePath("Control"));
		this._score_label = this.get_node(new godot_1.NodePath("UI/VBoxContainer/ScoreLabel"));
		this._state_label = this.get_node(new godot_1.NodePath("UI/VBoxContainer/StateLabel"));
		this._speed_label = this.get_node(new godot_1.NodePath("UI/VBoxContainer/SpeedLabel"));
		this._coin = this.instantiate_asset(kCoinAssetPath);
		this.restart();
	}
	add_snake_body(x, y) {
		const body = this.instantiate_asset(kSnakeBodyAssetPath);
		this._bodies.push(body);
		body.x = x;
		body.y = y;
		body.update_position();
		this._score_label.text = `Score ${this._bodies.length}`;
		return body;
	}
	instantiate_asset(path) {
		const scene = godot_1.ResourceLoader.load(path, "", godot_1.ResourceLoader.CacheMode.CACHE_MODE_REUSE);
		if (scene) {
			const node = scene.instantiate(godot_1.PackedScene.GenEditState.GEN_EDIT_STATE_DISABLED);
			this._control_node.add_child(node, false, godot_1.Node.InternalMode.INTERNAL_MODE_DISABLED);
			node.set_scale(new godot_1.Vector2(0.25, 0.25));
			return node;
		}
	}
	check_body(x, y, start_index = 0) {
		let n = this._bodies.length;
		for (let i = start_index; i < n; ++i) {
			let body = this._bodies[i];
			if (body.x == x && body.y == y) {
				return true;
			}
		}
		return false;
	}
	set_coin_location() {
		let x = Math.floor(Math.random() * constants_1.kWidth);
		let y = Math.floor(Math.random() * constants_1.kHeight);
		let rx = x;
		let ry = y;
		while (true) {
			if (this.check_body(x, y)) {
				if (x < constants_1.kWidth - 1) {
					++x;
				}
				else {
					x = 0;
					if (y < constants_1.kHeight - 1) {
						++y;
					}
					else {
						y = 0;
					}
				}
				if (x == rx && y == ry) {
					console.log("no space");
					return;
				}
				continue;
			}
			this._coin.x = x;
			this._coin.y = y;
			this._coin.update_position();
			console.log(`spawn coin at ${this._coin.x}, ${this._coin.y}`);
			break;
		}
	}
	check_wall(x, y) {
		if (x < 0 || x >= constants_1.kWidth)
			return true;
		if (y < 0 || y >= constants_1.kHeight)
			return true;
		//TODO 
		return false;
	}
	set_head_location(x, y, delta_mode) {
		const len = this._bodies.length;
		if (len == 0)
			return;
		let head = this._bodies[0];
		let mx = head.x;
		let my = head.y;
		if (delta_mode) {
			head.x = x + mx;
			head.y = y + my;
		}
		else {
			head.x = x;
			head.y = y;
		}
		if (this.check_wall(head.x, head.y) || this.check_body(head.x, head.y, 1)) {
			this.change_state(GameState.ENDED);
			return;
		}
		const eat = head.x == this._coin.x && head.y == this._coin.y;
		head.update_position();
		for (let i = 1; i < len; i++) {
			const body = this._bodies[i];
			const lx = body.x;
			const ly = body.y;
			body.x = mx;
			body.y = my;
			body.update_position();
			mx = lx;
			my = ly;
		}
		if (eat) {
			this.add_snake_body(mx, my);
			this.set_coin_location();
		}
	}
	restart() {
		for (let body of this._bodies) {
			body.queue_free();
		}
		this._bodies.splice(0);
		this.add_snake_body(5, 5);
		this.add_snake_body(5, 4);
		this.add_snake_body(5, 3);
		this._next_dir = constants_1.SnakeDirection.DOWN;
		this._current_dir = constants_1.SnakeDirection.DOWN;
		this._move = 0;
		// this._speed 
		this.set_coin_location();
		this.change_state(GameState.PLAYING);
		this.change_speed(0);
	}
	change_state(state) {
		this._state = state;
		this._state_label.text = `State ${GameState[state]}`;
	}
	change_speed(delta) {
		this._speed = Math.floor(Math.min(Math.max(this._speed + delta, 20), 300));
		this._speed_label.text = `Speed ${this._speed}`;
	}
	_process(dt) {
		switch (this._state) {
			case GameState.ENDED: {
				if (godot_1.Input.is_action_just_pressed("confirm", true)) {
					this.restart();
				}
				return;
			}
			case GameState.PLAYING: {
				if (godot_1.Input.is_action_pressed("right", true)) {
					if (this._current_dir != constants_1.SnakeDirection.LEFT) {
						this._next_dir = constants_1.SnakeDirection.RIGHT;
					}
				}
				else if (godot_1.Input.is_action_pressed("left", true)) {
					if (this._current_dir != constants_1.SnakeDirection.RIGHT) {
						this._next_dir = constants_1.SnakeDirection.LEFT;
					}
				}
				else if (godot_1.Input.is_action_pressed("up", true)) {
					if (this._current_dir != constants_1.SnakeDirection.DOWN) {
						this._next_dir = constants_1.SnakeDirection.UP;
					}
				}
				else if (godot_1.Input.is_action_pressed("down", true)) {
					if (this._current_dir != constants_1.SnakeDirection.UP) {
						this._next_dir = constants_1.SnakeDirection.DOWN;
					}
				}
				else if (godot_1.Input.is_action_just_pressed("confirm", true)) {
					this.change_state(GameState.PAUSED);
					return;
				}
				else if (godot_1.Input.is_action_just_pressed("cheat_speed_up", true)) {
					this.change_speed(10);
					return;
				}
				else if (godot_1.Input.is_action_just_pressed("cheat_speed_down", true)) {
					this.change_speed(-10);
					return;
				}
				const step = dt * this._speed;
				this._move += step;
				if (this._move >= constants_1.kBlockSize) {
					this._move -= constants_1.kBlockSize;
					this._current_dir = this._next_dir;
					switch (this._current_dir) {
						case constants_1.SnakeDirection.RIGHT:
							this.set_head_location(1, 0, true);
							break;
						case constants_1.SnakeDirection.LEFT:
							this.set_head_location(-1, 0, true);
							break;
						case constants_1.SnakeDirection.UP:
							this.set_head_location(0, -1, true);
							break;
						default:
							this.set_head_location(0, 1, true);
							break;
					}
				}
				return;
			}
			default: {
				if (godot_1.Input.is_action_just_pressed("confirm", true)) {
					this.change_state(GameState.PLAYING);
				}
				return;
			}
		}
	}
}
exports.default = Snake;
__decorate([
	(0, jsb_core_1.export_)(godot_1.Variant.Type.TYPE_FLOAT)
], Snake.prototype, "_speed", void 0);
//# sourceMappingURL=snake.js.map
