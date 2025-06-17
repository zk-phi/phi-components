# TextButton

An in-text button component, that looks like links.

## Examples

<figure>
  Please <phi-text-button>
    👆 Click me
  </phi-text-button>
</figure>

### Preact

``` jsx
const click = useCallback(() => alert("you did it !", []));

return (
  Please <TextButton onClick={click}>
    👆 Click me
  </TextButton>
);
```

### Vue.js x Custom Element

``` html
<script setup>
const click = () => alert("you did it !");
</script>

Please <phi-text-button @click="click">
  👆 Click me
</phi-text-button>
```

### Vanilla JS x CSS

``` html
Please <button id="button" class="phi-text-button">
  👆 Click me
</button>

<script>
function onClick () {
  alert("you did it !");
}
document.getElementById("button").addEventListener("click", onClick);
</script>
```

## Color variants
### default color

<figure>
  Please <phi-text-button>
    👆 Click me
  </phi-text-button>
</figure>

### `danger` color

Suitable for buttons which users should be thoughtful before pressing.

<figure>
  You probably should not <phi-text-button danger>
    💀 Click this
  </phi-text-button>
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

| Slot     | Category    | Type      | Default |
|----------|-------------|-----------|---------|
| `danger` | Prop / Attr | `boolean` | `false` |

#### Events

Following events are confirmed to work as expected. Some other events may also work.

| Event   | Description           |
|---------|-----------------------|
| `click` | Emitted on user click |

### Pure-CSS

| Class             |                |
|-------------------|----------------|
| `phi-text-button` | Core styles    |
| `danger`          | Color variants |
