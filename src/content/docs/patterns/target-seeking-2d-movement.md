---
title: Target-seeking 2D movement
description: Move a 2D node toward a target, stop within a tolerance, and signal completion.
sidebar:
  order: 4
---

# Target-seeking 2D movement

Use this pattern when an object should travel to a position selected by gameplay code, such as a click destination or waypoint.

## Prerequisites

- [Signals](../foundations/signals.md)
- [Scene lifecycle](../foundations/scene-lifecycle.md)
- [Vector2 movement](../2d/vector2-movement.md)

## Pattern

```gdscript
signal target_reached

var target_position := Vector2.ZERO
var is_moving := false

func set_target_position(new_target: Vector2) -> void:
	target_position = new_target
	is_moving = true

func _process(delta: float) -> void:
	if not is_moving:
		return

	var direction := position.direction_to(target_position)
	position += direction * speed * delta

	if position.distance_to(target_position) < arrival_distance:
		position = target_position
		is_moving = false
		target_reached.emit()
```

## Why use a tolerance?

An object can overshoot a target between frames. Stopping inside an arrival distance is more reliable than waiting for positions to become exactly equal.

## Optional: disable processing while idle

For a simple node that only needs `_process()` while it has a target, `set_process(false)` can avoid executing the callback while idle. Re-enable it when a public method receives a new target. For more involved behavior, an explicit state such as `is_moving` is usually easier to extend and read.

## Related

- [Steering-based 2D movement](./steering-based-2d-movement.md)
- [Signals](../foundations/signals.md)
