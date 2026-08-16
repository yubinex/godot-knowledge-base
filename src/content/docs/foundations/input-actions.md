---
title: Input actions
description: Read named player actions so gameplay code does not depend on specific keys.
sidebar:
  order: 3
---

# Input actions

An input action is a name, such as `move_left`, that you configure in **Project Settings → Input Map**. Code reads the action name instead of checking a particular keyboard key or controller button.

## Why it matters

You can change bindings, support controllers, or let players remap controls without rewriting your movement code.

## Read a direction

`Input.get_vector()` combines four named actions into a direction with a maximum length of `1`.

```gdscript
var direction := Input.get_vector(
	"move_left", "move_right", "move_up", "move_down"
)
```

For two individual axes, use `Input.get_axis(negative_action, positive_action)`.

## Related

- [Vector2 movement](../2d/vector2-movement.md)
- [Steering-based 2D movement](../patterns/steering-based-2d-movement.md)
