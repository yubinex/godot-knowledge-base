---
title: Steering-based 2D movement
description: Smoothly steer a 2D velocity toward player input instead of changing speed instantly.
sidebar:
  order: 3
---

# Steering-based 2D movement

Use this pattern when a top-down object should accelerate and decelerate smoothly toward the direction pressed by the player.

## Prerequisites

- [Scene lifecycle](../foundations/scene-lifecycle.md)
- [Input actions](../foundations/input-actions.md)
- [Vector2 movement](../2d/vector2-movement.md)

## Pattern

```gdscript
@export var max_speed := 600.0
@export var steering_factor := 8.0
var velocity := Vector2.ZERO

func _process(delta: float) -> void:
	var direction := Input.get_vector(
		"move_left", "move_right", "move_up", "move_down"
	)
	var desired_velocity := direction * max_speed
	velocity += (desired_velocity - velocity) * steering_factor * delta
	position += velocity * delta

	if velocity.length() > 0.0:
		$Sprite2D.rotation = velocity.angle()
```

## How it works

`desired_velocity` describes where input wants the velocity to be. The difference between desired and current velocity is the steering amount. Applying a fraction of it each frame creates smooth acceleration and braking.

> [!tip]
> Tune `max_speed` and `steering_factor` for the feel you want. They are game-specific values, not universal defaults.

## Related

- [Screen wrapping](../2d/screen-wrapping.md)
- [Target-seeking 2D movement](./target-seeking-2d-movement.md)
