---
title: Signals
description: React to Godot events by connecting a signal to a function.
sidebar:
  order: 1
---

# Signals

Signals are events that Godot objects emit. Connect a function to a signal when another object needs to react to that event.

## Why use them?

Signals separate the object that *reports* an event from the object that *responds* to it. A `Timer` can emit `timeout` without knowing whether the listener will spawn an item, drain health, or change a UI label.

## Connect a built-in signal

Connect signals during setup, commonly in `_ready()`.

```gdscript
func _ready() -> void:
	$SpawnTimer.timeout.connect(_on_spawn_timer_timeout)

func _on_spawn_timer_timeout() -> void:
	spawn_item()
```

## Define your own signal

Use a custom signal when your node has an event another node may care about.

```gdscript
signal target_reached

func finish_moving() -> void:
	target_reached.emit()
```

> [!tip]
> Give the callback a name that says what triggered it, such as `_on_spawn_timer_timeout()`. This makes the event flow easier to follow later.

## Related

- [Scene lifecycle](./scene-lifecycle.md)
- [Timers](./timers.md)
- [Area2D](../2d/area2d.md)
- [Collision-driven collectibles](../patterns/collision-driven-collectibles.md)
