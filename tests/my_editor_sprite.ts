import { Engine, InputEvent, PackedStringArray, Sprite2D, Variant } from "godot";
import { export_, icon, tool } from "godot.annotations";

// see example code in GDScript/C# at:
// https://docs.godotengine.org/en/stable/tutorials/plugins/running_code_in_the_editor.html#doc-running-code-in-the-editor

@icon("res://icon/affiliate.svg")
@tool()
export default class MyEditorSprite extends Sprite2D {

	/**
	 * get/set property for `export` (both must be defined)
	 */
	@export_(Variant.Type.TYPE_FLOAT)
	get speed(): number { return this._speed; }
	set speed(value: number) {
		if (this._speed != value) {
			this._speed = value;
			this.update_configuration_warnings();
		}
	}

	/**
	 * plain field for `export`
	 */
	@export_(Variant.Type.TYPE_INT)
	unused_int = 0;

	private _clockwise = false;
	private _speed = 0;

	_ready() {
		this._clockwise = Engine.is_editor_hint();
	}

	_process(delta: number) {
		const step = Math.PI * delta * (this._clockwise ? this._speed : -this._speed);
		// this.set_rotation(this.get_rotation() + step);
		this.rotation = (this.rotation + step) % (Math.PI * 2);
	}

	_get_configuration_warnings() {
		let warnings = new PackedStringArray();
		if (this._speed >= -0.01 && this._speed < 0.01) {
			warnings.append("speed is too low");
		}
		return warnings;
	}
}
