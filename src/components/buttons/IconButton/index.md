# IconButton

An icon-only button component.

## Examples

<script setup>
const click = () => alert("item added !");
</script>

<figure>
  <phi-icon-button @click="click">
    ＋
  </phi-icon-button>
</figure>

### Preact

``` jsx
const click = useCallback(() => alert("item added !"), []);

return (
  <IconButton onClick={click}>
    ＋
  </IconButton>
);
```

### Vue.js x Custom Element

``` html
<script setup>
const click = () => alert("item added !");
</script>

<phi-icon-button @click="click">
  ＋
</phi-icon-button>
```

### Vanilla JS x CSS

``` html
<button id="button" class="phi-icon-button">
  ＋
</button>

<script>
function onClick () {
  alert("item added !");
}
document.getElementById("button").addEventListener("click", onClick);
</script>
```

## Color variants
### default color

<figure>
  <phi-icon-button>
    ＋
  </phi-icon-button>
</figure>

### `danger` color

Suitable for buttons which users should be thoughtful before pressing.

<figure>
  <phi-icon-button danger>
    ＋
  </phi-icon-button>
</figure>

## Reference
### Preact
#### Properties

| Property   | Type                | Default | Description                        |
|------------|---------------------|---------|------------------------------------|
| `onClick`  | `() => void`        | empty   | A handler function called on click |
| `danger`   | `boolean`           | `false` | Toggle danger color variant        |
| `children` | `ComponentChildren` | empty   | Icon elementent                    |

### Custom Element
#### Props / Attrs

| Slot     | Category  | Type      | Default |
|----------|-----------|-----------|---------|
| `danger` | Prop/Attr | `boolean` | `false` |

#### Events

Following events are confirmed to work as expected. Some other events may also work.

| Event   | Description           |
|---------|-----------------------|
| `click` | Emitted on user click |

### Pure-CSS
#### Classes

| Class             |                |
|-------------------|----------------|
| `phi-icon-button` | Core styles    |
| `danger`          | Color variants |
