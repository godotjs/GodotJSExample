shader_type canvas_item;
uniform float tiling = 1.0;

void fragment() {
	vec2 uv = UV;
	uv.y *= tiling;
	COLOR = texture(TEXTURE, mod(uv, 1.0));
}

