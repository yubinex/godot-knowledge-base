---
title: Scene lifecycle
description: Choose the right Godot callback for setup and per-frame behavior.
sidebar:
  order: 2
---

# Scene lifecycle

Godot calls lifecycle callbacks at specific times. Two early callbacks are especially useful when building gameplay.

## `_ready()` for setup

Use `_ready()` after the node and its children have entered the scene tree. It is a good place to connect signals, read child nodes, and initialize displayed state.

```gdscript
func _ready() -> void:
	area_entered.connect(_on_area_entered)
	update_health_display()
```

## `_process(delta)` for frame-by-frame work

Use `_process(delta)` for work that should update every rendered frame, such as input-driven movement or rotating a visual toward velocity.

`delta` is the time since the previous frame. Multiply movement by it so the result is not tied to a particular frame rate.

> [!warning]
> Do not repeatedly connect the same signal from `_process()`. Setup belongs in `_ready()`; repeated connections can cause a callback to run more than once.

## Related

- [Signals](./signals.md)
- [Vector2 movement](../2d/vector2-movement.md)
- [Removing nodes safely](./removing-nodes-safely.md)
