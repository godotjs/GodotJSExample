extends Button
class_name GDScriptButton

signal test_signal

# Called when the node enters the scene tree for the first time.
func _ready():
	pass # Replace with function body.
	
	test_signal.connect(_on_test)
	test_signal.emit()

func _on_test():
	print("on test")
	

# Called every frame. 'delta' is the elapsed time since the previous frame.
func _process(delta):
	pass
