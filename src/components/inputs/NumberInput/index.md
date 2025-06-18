# NumberInput

A number input component.

## Examples

<script setup>
import { ref } from "vue";
const value = ref(undefined);
</script>

<figure>
  <phi-number-input
    :value="value"
    required
    min="0"
    max="100"
    step="0.1"
    placeholder="Example: 5"
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
    <NumberInput
      value={value}
      required
      min="0"
      max="100"
      step="0.1"
      placeholder="Example: 5"
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
const value = ref(undefined);
</script>

<phi-number-input
  :value="value"
  required
  min="0"
  max="100"
  step="0.1"
  placeholder="Example: 5"
  @input="value = $event.target.value" />
<div style="margin-top: 0.5em">
  Value: {{value}}
</div>
```

### Vanilla JS x CSS

``` html
<input
  id="input"
  type="number"
  class="phi-number-input"
  required
  min="0"
  max="100"
  step="0.1"
  placeholder="Example: 5" />
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

## State variants
### `error` variant

<figure>
  <phi-number-input value="-100" error />
</figure>

## Reference
### Preact
#### Properties

| Property      | Type                | Default     | Description                               |
|---------------|---------------------|-------------|-------------------------------------------|
| `value`       | `string`            | (required)  | Input value                               |
| `placeholder` | `string`            | `""`        | Placeholder string                        |
| `required`    | `boolean`           | `false`     | Whether non-empty value is allowed        |
| `min`         | `number\|undefined` | `undefined` | Minimum allowed value                     |
| `max`         | `number\|undefined` | `undefined` | Maximum allowed value                     |
| `step`        | `number\|undefined` | `undefined` | Minimum allowed step                      |
| `error`       | `boolean`           | `false`     | Toggle error variant                      |
| `onInput`     | `string => void`    | `false`     | A handler function called on input change |

### Custom Element
#### Props / Attrs

| Slot          | Category  | Type                | Default     |
|---------------|-----------|---------------------|-------------|
| `value`       | Prop/Attr | `number\|undefined` | `undefined` |
| `placeholder` | Prop/Attr | `string`            | `""`        |
| `required`    | Prop/Attr | `boolean`           | `false`     |
| `min`         | Prop/Attr | `number\|undefined` | `undefined` |
| `max`         | Prop/Attr | `number\|undefined` | `undefined` |
| `step`        | Prop/Attr | `number\|undefined` | `undefined` |
| `error`       | Prop/Attr | `boolean`           | `false`     |

#### Events

Following events are confirmed to work as expected. Some other events may also work.

| Event   | Description             |
|---------|-------------------------|
| `input` | Emitted on input change |

### Pure-CSS
#### Classes

| Class      |                |
|------------|----------------|
| `phi-text` | Core styles    |
| `error`    | State variants |
