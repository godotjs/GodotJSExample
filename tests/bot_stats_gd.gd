## Resource Class in GDScript
## @experimental: Test3
class_name BotStatsGD
extends Resource

## HP value
## @experimental: any int
@export var health: int
@export var sub_resource: Resource
@export var strings: PackedStringArray

# Make sure that every parameter has a default value.
# Otherwise, there will be problems with creating and editing
# your resource via the inspector.
func _init(p_health = 0, p_sub_resource = null, p_strings = []):
	health = p_health
	sub_resource = p_sub_resource
	strings = p_strings
