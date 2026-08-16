---
title: Scripts and node behavior
description: Attach a GDScript to a Godot node and write behavior for that node type.
sidebar:
  order: 7
---

# Scripts and node behavior

Attach a GDScript to a node to give that node behavior. The `extends` line says which Godot type the script works with.

```gdscript
extends Area2D

func _ready() -> void:
	monitoring = true
```

Because this script extends `Area2D`, it can use the node's properties and signals, such as `area_entered`.

## Reuse behavior deliberately

Put behavior that belongs to every instance of a scene in that scene's script. For example, a pickup scene can own its overlap removal behavior, while the player script owns the player's health and score rules.

If multiple unrelated scenes need the same behavior, consider whether a shared base script, component-style child node, or separate utility is a better fit. Start simple; do not create an inheritance hierarchy only to remove a few duplicated lines.

## Related

- [Scene lifecycle](./scene-lifecycle.md)
- [Area2D](../2d/area2d.md)
- [Collision-driven collectibles](../patterns/collision-driven-collectibles.md)
