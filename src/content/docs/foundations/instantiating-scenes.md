---
title: Instantiating scenes
description: Create reusable scene instances at runtime with PackedScene.instantiate().
sidebar:
  order: 6
---

# Instantiating scenes

A `PackedScene` is a reusable saved scene. Calling `instantiate()` creates a new node tree from it at runtime.

## Basic pattern

```gdscript
var pickup_scene: PackedScene = preload("res://pickup.tscn")

func spawn_pickup(at_position: Vector2) -> void:
	var pickup := pickup_scene.instantiate()
	add_child(pickup)
	pickup.position = at_position
```

Use `preload()` when the scene is always needed and can be loaded with the script. Add the instance to a parent before relying on scene-tree behavior such as `_ready()`.

## Related

- [Random collectible spawning](../patterns/random-collectible-spawning.md)
- [Scene lifecycle](./scene-lifecycle.md)
