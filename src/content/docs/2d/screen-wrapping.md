---
title: Screen wrapping
description: Wrap a Node2D position at viewport boundaries with wrapf().
sidebar:
  order: 4
---

# Screen wrapping

Screen wrapping moves an object that leaves one side of a play area to the opposite side. It is common in arcade-style games.

## Wrap a position to the viewport

```gdscript
var viewport_size := get_viewport_rect().size
position.x = wrapf(position.x, 0.0, viewport_size.x)
position.y = wrapf(position.y, 0.0, viewport_size.y)
```

`wrapf()` keeps a number inside a range by wrapping it around when it crosses either bound.

## Common pitfall

This uses the viewport rectangle, which is appropriate for a screen-space level. A camera-based world may need its own gameplay boundaries instead.

## Related

- [Vector2 movement](./vector2-movement.md)
- [Steering-based 2D movement](../patterns/steering-based-2d-movement.md)
