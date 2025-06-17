# Group

Align elements horizontally.

## Example

<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<figure>
  <phi-group>
    <phi-button>
      <span slot="icon">＜</span>
    </phi-button>
    <phi-button>
      <span slot="icon">＞</span>
    </phi-button>
  </phi-group>
</figure>

### Preact

``` jsx
<Group>
  <Button icon="＜" />
  <Button icon="＞" />
</Group>
```

### Custom Element

``` html
<phi-group>
  <phi-button>
    <span slot="icon">＜</span>
  </phi-button>
  <phi-button>
    <span slot="icon">＞</span>
  </phi-button>
</phi-group>
```

### Pure-CSS

``` html
<div class="phi-group left md">
  <button class="phi-button default">
    <span class="icon">＜</span>
  </button>
  <button class="phi-button default">
    <span class="icon">＞</span>
  </button>
</div>
```

## `flex-grow`

You may put `style="flex-grow: 1"` to some children to control widths.

<figure>
  <phi-group>
    <phi-button>
      <span slot="icon">❌</span>
      Cancel
    </phi-button>
    <phi-button style="flex-grow: 1" variant="primary">
      <span slot="icon">✅</span>
      Complete
    </phi-button>
  </phi-group>
</figure>

``` jsx
<Group>
  <Button icon="＜" style="flex-grow: 1" />
  <Button icon="＞" style="flex-grow: 1" />
  <Button icon="❗" danger>Reset</Button>
</Group>
```

## Alignment variants
### `left` variant (default)

<figure>
  <phi-group align="left">
    <phi-button>
      <span slot="icon">＜</span>
    </phi-button>
    <phi-button>
      <span slot="icon">＞</span>
    </phi-button>
  </phi-group>
</figure>

### `center` variant

<figure>
  <phi-group align="center">
    <phi-button>
      <span slot="icon">１</span>
    </phi-button>
    <phi-button>
      <span slot="icon">２</span>
    </phi-button>
    <phi-button>
      <span slot="icon">３</span>
    </phi-button>
  </phi-group>
</figure>

### `right` variant

<figure>
  <phi-group align="right">
    <phi-button>
      <span slot="icon">❌</span>
      Cancel
    </phi-button>
    <phi-button variant="primary">
      <span slot="icon">📩</span>
      Send
    </phi-button>
  </phi-group>
</figure>

### `space-between` variant

<figure>
  <phi-group align="space-between">
    <phi-button>
      <span slot="icon">＜</span>
      Back
    </phi-button>
    <phi-button>
      <span slot="icon">＞</span>
      Next
    </phi-button>
  </phi-group>
</figure>

## Size variants
### `md` variant (default)

Suitable to align normal elements.

<figure>
  <phi-group size="md">
    <phi-button>
      <span slot="icon">＜</span>
    </phi-button>
    <phi-button>
      <span slot="icon">＞</span>
    </phi-button>
  </phi-group>
</figure>

### `sm` variant (default)

Suitable to align options, tags, etc.

<figure>
  <phi-group size="sm">
    <code>Foo</code>
    <code>Bar</code>
    <code>Baz</code>
  </phi-group>
</figure>

## Reference
### Preact
#### Properties

| Property   | Type                  | Default | Description               |
|------------|-----------------------|---------|---------------------------|
| `size`     | `md\|sm`              | `md`    | Switch size variants      |
| `align`    | `left\|center\|right` | `left`  | Switch alignment variants |
| `children` | `ComponentChildren`   | empty   | Child elements            |

### Custom Element
#### Props / Attrs

| Slot    | Category  | Type                  | Default |
|---------|-----------|-----------------------|---------|
| `size`  | Prop/Attr | `md\|sm`              | `md`    |
| `align` | Prop/Attr | `left\|center\|right` | `left`  |

### Pure-CSS
#### Classes

| Class                                      |                    |
|--------------------------------------------|--------------------|
| `phi-group`                                | Core styles        |
| `left`, `center`, `right`, `space-between` | Alignment variants |
| `md`, `sm`                                 | Size variants      |
