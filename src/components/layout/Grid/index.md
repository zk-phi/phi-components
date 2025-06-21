# Grid

Align elements in grid.

## Example

<figure>
  <phi-grid cols="3" gap="sm">
    <phi-color-swatch color="#fff" />
    <phi-color-swatch color="#eee" />
    <phi-color-swatch color="#ddd" />
    <phi-color-swatch color="#ccc" />
    <phi-color-swatch color="#aaa" />
    <phi-color-swatch color="#999" />
    <phi-color-swatch color="#888" />
    <phi-color-swatch color="#777" />
    <phi-color-swatch color="#666" />
    <phi-color-swatch color="#555" />
    <phi-color-swatch color="#444" />
    <phi-color-swatch color="#333" />
    <phi-color-swatch color="#222" />
    <phi-color-swatch color="#111" />
    <phi-color-swatch color="#000" />
  </phi-grid>
</figure>

### Preact

``` jsx
<Grid cols={3} gap="sm">
  <ColorSwatch color="#fff" />
  <ColorSwatch color="#eee" />
  <ColorSwatch color="#ddd" />
  <ColorSwatch color="#ccc" />
  <ColorSwatch color="#aaa" />
  <ColorSwatch color="#999" />
  <ColorSwatch color="#888" />
  <ColorSwatch color="#777" />
  <ColorSwatch color="#666" />
  <ColorSwatch color="#555" />
  <ColorSwatch color="#444" />
  <ColorSwatch color="#333" />
  <ColorSwatch color="#222" />
  <ColorSwatch color="#111" />
  <ColorSwatch color="#000" />
</Grid>
```

### Custom Element

``` html
<phi-grid cols="3" gap="sm">
  <phi-color-swatch color="#fff" />
  <phi-color-swatch color="#eee" />
  <phi-color-swatch color="#ddd" />
  <phi-color-swatch color="#ccc" />
  <phi-color-swatch color="#aaa" />
  <phi-color-swatch color="#999" />
  <phi-color-swatch color="#888" />
  <phi-color-swatch color="#777" />
  <phi-color-swatch color="#666" />
  <phi-color-swatch color="#555" />
  <phi-color-swatch color="#444" />
  <phi-color-swatch color="#333" />
  <phi-color-swatch color="#222" />
  <phi-color-swatch color="#111" />
  <phi-color-swatch color="#000" />
</phi-grid>
```

### Pure-CSS

``` html
<div class="phi-grid md" style="grid-template-columns: (3, max-content)">
  <span class="phi-color-swatch" style="background: #fff" />
  <span class="phi-color-swatch" style="background: #eee" />
  <span class="phi-color-swatch" style="background: #ddd" />
  <span class="phi-color-swatch" style="background: #ccc" />
  <span class="phi-color-swatch" style="background: #aaa" />
  <span class="phi-color-swatch" style="background: #999" />
  <span class="phi-color-swatch" style="background: #888" />
  <span class="phi-color-swatch" style="background: #777" />
  <span class="phi-color-swatch" style="background: #666" />
  <span class="phi-color-swatch" style="background: #555" />
  <span class="phi-color-swatch" style="background: #444" />
  <span class="phi-color-swatch" style="background: #333" />
  <span class="phi-color-swatch" style="background: #222" />
  <span class="phi-color-swatch" style="background: #111" />
  <span class="phi-color-swatch" style="background: #000" />
</div>
```

## Gap variants
### `md` variant (default)

Suitable to align normal elements.

<figure>
  <phi-grid gap="md" cols="3">
    <phi-button><span slot="icon">１</span></phi-button>
    <phi-button><span slot="icon">２</span></phi-button>
    <phi-button><span slot="icon">３</span></phi-button>
    <phi-button><span slot="icon">４</span></phi-button>
    <phi-button><span slot="icon">５</span></phi-button>
    <phi-button><span slot="icon">６</span></phi-button>
    <phi-button><span slot="icon">７</span></phi-button>
    <phi-button><span slot="icon">８</span></phi-button>
    <phi-button><span slot="icon">９</span></phi-button>
  </phi-grid>
</figure>

### `sm` variant (default)

Suitable to align options, tags, etc.

<figure>
  <phi-grid cols="3" gap="sm">
    <phi-color-swatch color="#fff" />
    <phi-color-swatch color="#eee" />
    <phi-color-swatch color="#ddd" />
    <phi-color-swatch color="#ccc" />
    <phi-color-swatch color="#aaa" />
    <phi-color-swatch color="#999" />
    <phi-color-swatch color="#888" />
    <phi-color-swatch color="#777" />
    <phi-color-swatch color="#666" />
    <phi-color-swatch color="#555" />
    <phi-color-swatch color="#444" />
    <phi-color-swatch color="#333" />
    <phi-color-swatch color="#222" />
    <phi-color-swatch color="#111" />
    <phi-color-swatch color="#000" />
  </phi-grid>
</figure>

## Reference
### Preact
#### Properties

| Property      | Type                                   | Default         | Description               |
|---------------|----------------------------------------|-----------------|---------------------------|
| `gap`         | `'md'\|'sm'`                           | `'md'`          | Switch gap variants       |
| `align`       | `'left'\|'center'\|'right'`            | `'left'`        | Switch alignment variants |
| `cols`        | `number\|'auto-fit'`                   | `'auto-fit'`    | Number of grid columns    |
| `colWidth`    | `number\|'min-content'\|'max-content'` | -               | Force column width        |
| `colMinWidth` | `number\|'min-content'\|'max-content'` | `'max-content'` | Force min column width    |
| `colMaxWidth` | `number\|'min-content'\|'max-content'` | `'max-content'` | Force max column width    |

NOTE: If you omit `cols` property, you usually want to specify `colWidth` instead (otherwise the
grid may look like just a stack).

### Custom Element
#### Props / Attrs

| Slot            | Category  | Type                                   | Default         |
|-----------------|-----------|----------------------------------------|-----------------|
| `gap`           | Prop/Attr | `'md'\|'sm'`                           | `'md'`          |
| `align`         | Prop/Attr | `'left'\|'center'\|'right'`            | `'left'`        |
| `cols`          | Prop/Attr | `number\|'auto-fit'`                   | `'auto-fit'`    |
| `colWidth`      | Prop      | `number\|'min-content'\|'max-content'` | `'min-content'` |
| `colMinWidth`   | Prop      | `number\|'min-content'\|'max-content'` | `'min-content'` |
| `colMaxWidth`   | Prop      | `number\|'min-content'\|'max-content'` | `'min-content'` |
| `col-width`     | Attr      | `number\|'min-content'\|'max-content'` | `'min-content'` |
| `col-min-width` | Attr      | `number\|'min-content'\|'max-content'` | `'min-content'` |
| `col-max-width` | Attr      | `number\|'min-content'\|'max-content'` | `'min-content'` |

### Pure-CSS
#### Classes

| Class                                      |                    |
|--------------------------------------------|--------------------|
| `phi-grid`                                 | Core styles        |
| `left`, `center`, `right`, `space-between` | Alignment variants |
| `md`, `sm`                                 | Gap variants       |
