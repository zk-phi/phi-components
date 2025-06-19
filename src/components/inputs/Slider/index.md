# Slider

A slider number input component.

## Examples

<script setup>
import { ref } from "vue";
const value = ref(0);
</script>

<figure>
  <phi-slider
    :value="value"
    min="0"
    max="100"
    step="0.1"
    @input="value = $event.target.value" />
  <div style="margin-top: 0.5em">
    Value: {{value}}
  </div>
</figure>

### Preact

``` jsx
const [value, setValue] = useState("");

return (
  <>
    <Slider
      value={value}
      min="0"
      max="100"
      step="0.1"
      onInput={(e) => setValue(e.currentTarget.value)} />
    <div style="margin-top: 0.5em">
      Value: {{value}}
    </div>
  </>
);
```

### Vue.js x Custom Element

``` html
<script setup>
import { ref } from "vue";
const value = ref(0);
</script>

<phi-number-input
  :value="value"
  min="0"
  max="100"
  step="0.1"
  @input="value = $event.target.value" />
<div style="margin-top: 0.5em">
  Value: {{value}}
</div>
```

### Vanilla JS x CSS

LIMITATION: Track color will not change in Pure-CSS installation.

<figure>
  <input
    id="input"
    type="range"
    class="phi-slider"
    value="0"
    min="0"
    max="100"
    step="0.1" />
</figure>

``` html
<input
  id="input"
  type="range"
  class="phi-slider"
  min="0"
  max="100"
  step="0.1" />
<div id="value" style="margin-top: 0.5em">
  Value:
</div>

<script>
function onInput (e) {
  const value = e.currentTarget.value;
  document.getElementById("value").innerHTML = `Value: ${value}`;
}
document.getElementById("input").addEventListener("input", onInput);
</script>
```

## Reference
### Preact
#### Properties

| Property  | Type                | Default     | Description                               |
|-----------|---------------------|-------------|-------------------------------------------|
| `value`   | `string`            | (required)  | Input value                               |
| `min`     | `number\|undefined` | `undefined` | Minimum allowed value                     |
| `max`     | `number\|undefined` | `undefined` | Maximum allowed value                     |
| `step`    | `number\|undefined` | `undefined` | Minimum allowed step                      |
| `onInput` | `string => void`    | `false`     | A handler function called on input change |

### Custom Element
#### Props / Attrs

| Slot          | Category  | Type                | Default     |
|---------------|-----------|---------------------|-------------|
| `value`       | Prop/Attr | `number\|undefined` | `undefined` |
| `min`         | Prop/Attr | `number\|undefined` | `undefined` |
| `max`         | Prop/Attr | `number\|undefined` | `undefined` |
| `step`        | Prop/Attr | `number\|undefined` | `undefined` |

#### Events

Following events are confirmed to work as expected. Some other events may also work.

| Event   | Description             |
|---------|-------------------------|
| `input` | Emitted on input change |

### Pure-CSS
#### Classes

| Class        |             |
|--------------|-------------|
| `phi-slider` | Core styles |
