# Button

A generic button component.

## Examples

<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<figure>
  <phi-button @click="count++" variant="primary" :danger="count >= 10">
     <span slot="icon">
       <phi-icon icon="beer" />
     </span>
     Cheers!
  </phi-button>
  <div style="margin-top: 0.5em">
    🍻 x {{ count }}
  </div>
</figure>

### Preact

``` jsx
const [count, setCount] = useState(0);
const inc = useCallback(() => setCount(c => c + 1), []);

return (
  <>
    <Button variant="primary" onClick={inc} danger={count >= 10} icon={<Icon icon="beer" />}>
      Cheers!
    </Button>
    <div style="margin-top: 0.5em">
      🍻 x {count}
    </div>
  </>
);
```

### Vue.js x Custom Element

``` html
<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<phi-button variant="primary" @click="count++" :danger="count >= 10">
  <span slot="icon">🍺</span>
  Cheers!
</phi-button>
<div style="margin-top: 0.5em">
  🍻 x {{count}}
</div>
```

### Vanilla JS x CSS

``` html
<button id="button" class="phi-button default">
  <span class="icon">🍺</span>
  <span>Cheers!</span>
</button>
<div id="value" style="margin-top: 0.5em">
  🍻 x 0
</div>

<script>
const count = 0;
function onClick () {
  document.getElementById("value").innerHTML = `🍻 x ${count++}`;
  if (count > 10) {
    document.getElementById("button").classList.add("danger");
  }
}
document.getElementById("button").addEventListener("click", onClick);
</script>
```

## Style variants
### `default` variant

The default variant fits most usecases.

<figure>
  <phi-button variant="default">
    <span slot="icon">
      <phi-icon icon="file" />
    </span>
    Open file
  </phi-button>
</figure>

### `primary` variant

Suitable for the most significant button in the screen, that usually sends or saves some information (i.e. "submit" button).

<figure>
  <phi-button variant="primary">
    <span slot="icon">
      <phi-icon icon="okay" />
    </span>
    Confirm
  </phi-button>
</figure>

### `dotted` variant

Dotted button usually implies that something will replace the button when pressed. Usually used for "+ Add" button.

<figure>
  <phi-button variant="dotted">
    <span slot="icon">
      <phi-icon icon="increment" />
    </span>
    Add item here
  </phi-button>
</figure>

## Color variants
### `danger` color

Suitable for irreversible actions (that usually cause data loss), so that users should be thoughtful before pressing the button.

<figure>
  <phi-button variant="primary" danger>
    <span slot="icon">
      <phi-icon icon="delete" />
    </span>
    Delete
  </phi-button>
</figure>

## Reference
### Preact
#### Properties

| Property   | Type                       | Default   | Description                        |
|------------|----------------------------|-----------|------------------------------------|
| `onClick`  | `() => void`               | empty     | A handler function called on click |
| `danger`   | `boolean`                  | `false`   | Toggle danger color variant        |
| `variant`  | `default\|primary\|dotted` | `default` | Switch style variants              |
| `icon`     | `ComponentChildren`        | empty     | An icon DOM element                |
| `children` | `ComponentChildren`        | empty     | Button text                        |

### Custom Element
#### Props / Attrs

| Slot      | Category  | Type                       | Default   |
|-----------|-----------|----------------------------|-----------|
| `danger`  | Prop/Attr | `boolean`                  | `false`   |
| `variant` | Prop/Attr | `default\|primary\|dotted` | `default` |
| `icon`    | Slot      | -                          | -         |

#### Events

Following events are confirmed to work as expected. Some other events may also work.

| Event   | Description           |
|---------|-----------------------|
| `click` | Emitted on user click |

### Pure-CSS
#### Classes

| Class                          |                |
|--------------------------------|----------------|
| `phi-button`                   | Core styles    |
| `icon`                         | `icon` slot    |
| `default`, `primary`, `dotted` | Style variants |
| `danger`                       | Color variants |
