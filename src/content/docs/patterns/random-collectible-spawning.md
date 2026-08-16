---
title: Random collectible spawning
description: Spawn a random reusable scene on a timer and optionally cap active collectible count.
sidebar:
  order: 2
---

# Random collectible spawning

Use this pattern when a level should periodically create one of several pickup types.

## Prerequisites

- [Signals](../foundations/signals.md)
- [Timers](../foundations/timers.md)
- [Instantiating scenes](../foundations/instantiating-scenes.md)
- [Vector2 movement](../2d/vector2-movement.md)

## Pattern

Keep the spawnable scenes in an array. When a timer fires, choose one, create an instance, add it to the scene tree, and set a position.

```gdscript
@export var collectible_scenes: Array[PackedScene]

func _on_spawn_timer_timeout() -> void:
	var collectible := collectible_scenes.pick_random().instantiate()
	add_child(collectible)
	collectible.position = get_random_spawn_position()
```

## Limit active items

If the level must not fill with items, keep a count or use a dedicated container node. Whichever approach you choose, account for every way an item can leave the game—not only player collection.

## Common pitfall

Random selection and random position are separate steps. Choosing a random scene does not automatically place it randomly.

## Related

- [Collision-driven collectibles](./collision-driven-collectibles.md)
- [Screen wrapping](../2d/screen-wrapping.md)
