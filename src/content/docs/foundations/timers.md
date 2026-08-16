---
title: Timers
description: Trigger Godot code after a delay or on a repeating interval.
sidebar:
  order: 5
---

# Timers

A `Timer` waits for its configured duration, then emits its `timeout` signal. It can run once or repeat.

## Use a timer for periodic events

Timers are a clean way to express recurring gameplay events without manually counting time in `_process()`.

```gdscript
func _ready() -> void:
	$Timer.timeout.connect(_on_timer_timeout)

func _on_timer_timeout() -> void:
	spawn_item()
```

Configure the wait time, one-shot setting, and autostart behavior in the Inspector, or start and stop the timer from code.

## Common pitfall

Connecting a `timeout` callback does not start a stopped timer. Check whether the timer is configured to autostart or call `start()` yourself.

## Related

- [Signals](./signals.md)
- [Random collectible spawning](../patterns/random-collectible-spawning.md)
