---
title: Area2D
description: Detect 2D gameplay overlaps with an Area2D and its area_entered signal.
sidebar:
  order: 1
---

# Area2D

`Area2D` is a 2D detection node. With a `CollisionShape2D`, it can report when another physics body or area overlaps it.

## When to use it

Use `Area2D` for trigger-style interactions: pickups, hitboxes, hurtboxes, checkpoints, and detection zones. It detects interaction rather than creating a solid physical collision response.

## Listen for another area

```gdscript
func _ready() -> void:
	area_entered.connect(_on_area_entered)

func _on_area_entered(other_area: Area2D) -> void:
	print("Overlapped: ", other_area.name)
```

Both areas need compatible collision layers and masks, and each needs an enabled collision shape.

> [!warning]
> A connected signal alone is not enough. If nothing happens, inspect the collision shapes and [collision layers and masks](./collision-layers-and-masks.md).

## Related

- [Collision layers and masks](./collision-layers-and-masks.md)
- [Signals](../foundations/signals.md)
- [Collision-driven collectibles](../patterns/collision-driven-collectibles.md)
