"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const godot_1 = require("godot");
const constants_1 = require("./constants");
class SnakeBody extends godot_1.Sprite2D {
	constructor() {
		super(...arguments);
		this._x = 0;
		this._y = 0;
	}
	_ready() {
		this._cached_pos = new godot_1.Vector2();
	}
	get x() { return this._x; }
	set x(value) { this._x = value; }
	get y() { return this._y; }
	set y(value) { this._y = value; }
	update_position() {
		this._cached_pos.x = (this._x + 1) * constants_1.kBlockSize;
		this._cached_pos.y = (this._y + 1) * constants_1.kBlockSize;
		this.set_position(this._cached_pos);
	}
}
exports.default = SnakeBody;
//# sourceMappingURL=snake_body.js.map
