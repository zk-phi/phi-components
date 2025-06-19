# ColorSwatch

A component for color samples.

## Examples

<figure>
  <phi-color-swatch color="#eeaa00" />
</figure>

### Preact

``` jsx
return (
  <ColorSwatch color="#EEAA00" />
);
```

### Custom Element

``` html
<phi-color-swatch color="#EEAA00" />
```

### CSS

``` html
<span class="phi-color-swatch" style="background: #EEAA00" />
```

## Reference
### Preact
#### Properties

| Property | Type     | Default    | Description           |
|----------|----------|------------|-----------------------|
| `color`  | `string` | (required) | Color name to preview |

### Custom Element
#### Props / Attrs

| Slot    | Category  | Type     | Default |
|---------|-----------|----------|---------|
| `color` | Prop/Attr | `string` | `""`    |

### Pure-CSS
#### Classes

| Class              |             |
|--------------------|-------------|
| `phi-color-swatch` | Core styles |
