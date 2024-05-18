// https://godotshaders.com/shader/panning/
shader_type canvas_item;
uniform vec2 speed = vec2(1.0, 0.0);

void fragment() {
	COLOR = texture(TEXTURE, mod(UV + TIME * speed, 1.0));
}
