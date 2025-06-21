# ResponsiveColumns

Like Grid component but,

- number of columns is determined from the window size and,
- contents will grow to fill the container.

## Example

Resize the window to see how this component works.

<figure>
  <phi-responsive-columns gap="md" :configuration="[
    { width: 0, columns: [1] },
    { width: 500, columns: [1, 2] },
    { width: 1000, columns: [1, 2, 1] },
  ]">
    <div style="color: white; background: red">Column 1</div>
    <div style="color: white; background: green">Column 2</div>
    <div style="color: white; background: blue">Column 3</div>
  </phi-responsive-columns>
</figure>

### Preact

``` jsx
<ResponsiveColumns gap="md" configuration={
  { width: 0, columns: [1] },
  { width: 500, columns: [1, 2] },
  { width: 1000, columns: [1, 2, 1] },
}>
  <div style="background: red">Column 1</div>
  <div style="background: green">Column 2</div>
  <div style="background: blue">Column 3</div>
</ResponsiveColumns>
```

### Vue.js x Custom Element

NOTE: `configuration` ATTRIBUTE is not supported, so you need some JS to configure this component.

``` html
<phi-responsive-columns gap="md" :configuration="[
  { width: 0, columns: [1] },
  { width: 500, columns: [1, 2] },
  { width: 1000, columns: [1, 2, 1] },
]">
  <div style="background: red">Column 1</div>
  <div style="background: green">Column 2</div>
  <div style="background: blue">Column 3</div>
</phi-responsive-columns>
```

### Pure-CSS

Unsupported. Use media queries to build your own grid.

``` html
<div class="responsive-columns">
  <div style="background: red">Column 1</div>
  <div style="background: green">Column 2</div>
  <div style="background: blue">Column 3</div>
</div>
```

``` css
.responsive-columns {
  display: grid;
  gap: var(--phi-spacing-margin-md);
}

@media (max-width: 499px) {
  .responsive-columns {
    grid-template-columns: 1fr;
  }
}

@media (min-width: 500px) and (max-width: 999px) {
  .responsive-columns {
    grid-template-columns: 1fr 2fr;
  }
}

@media (min-width: 1000px) {
  .responsive-columns {
    grid-template-columns: 1fr 2fr 1fr;
  }
}
```

## Reference
### Preact
#### Properties

| Property        | Type                                     | Default    | Description                        |
|-----------------|------------------------------------------|------------|------------------------------------|
| `gap`           | `'md'\|'sm'`                             | `'md'`     | Switch gap variants                |
| `configuration` | `{ width: number, columns: number[] }[]` | (required) | Grid configuration per window size |

### Custom Element
#### Props / Attrs

NOTE: `configuration` ATTRIBUTE is not supported, so you need some JS to configure this component.

| Slot            | Category  | Type                                     | Default                        |
|-----------------|-----------|------------------------------------------|--------------------------------|
| `gap`           | Prop/Attr | `'md'\|'sm'`                             | `'md'`                         |
| `configuration` | Prop      | `{ width: number, columns: number[] }[]` | `[{ width: 0, columns: [1] }]` |

### Pure-CSS
#### Classes

Unsupported.
