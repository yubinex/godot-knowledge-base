---
title: Removing nodes safely
description: Remove a Godot node after gameplay interaction with queue_free().
sidebar:
  order: 8
---

# Removing nodes safely

Call `queue_free()` when a node should be removed from the scene tree, such as a collectible after it is collected.

```gdscript
func _on_area_entered(_other_area: Area2D) -> void:
	queue_free()
```

Godot queues the node for deletion at the end of the current frame. This is safer than immediately destroying a node while Godot is still processing an event involving it.

## Related

- [Scene lifecycle](./scene-lifecycle.md)
- [Collision-driven collectibles](../patterns/collision-driven-collectibles.md)
