---
title: Vector2 movement
description: Use Vector2 for direction, distance, facing, and frame-rate-independent 2D movement.
sidebar:
  order: 3
---

# Vector2 movement

`Vector2` stores a two-dimensional value such as a position, direction, or velocity. It is the core data type for many 2D movement calculations.

## Move in a direction

```gdscript
var velocity := direction * speed
position += velocity * delta
```

Multiplying by `delta` makes the distance traveled depend on elapsed time, not the number of rendered frames.

## Useful operations

| Operation | Use it for |
| --- | --- |
| `normalized()` | Keep diagonal input from being faster than horizontal or vertical input. |
| `direction_to(target)` | Get a direction toward a target position. |
| `distance_to(target)` | Decide whether an object is close enough to stop or interact. |
| `length()` | Check whether a velocity or direction is nonzero. |
| `angle()` | Rotate a 2D visual so it faces the direction of travel. |

```gdscript
if velocity.length() > 0.0:
	$Sprite2D.rotation = velocity.angle()
```

## Related

- [Input actions](../foundations/input-actions.md)
- [Steering-based 2D movement](../patterns/steering-based-2d-movement.md)
- [Target-seeking 2D movement](../patterns/target-seeking-2d-movement.md)
