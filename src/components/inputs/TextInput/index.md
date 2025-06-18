# TextInput

A text input component.

## Examples

<script setup>
import { ref } from "vue";
const value = ref("");
</script>

<figure>
  <phi-text-input
    :value="value"
    :error="value.length > 5"
    placeholder="Jot something down"
    @input="value = $event.target.value" />
  <div style="margin-top: 0.5em">
    Value: {{JSON.stringify(value)}}
  </div>
</figure>

### Preact

``` jsx
const [value, setValue] = useState("");

return (
  <>
    <TextInput
      value={value}
      placeholder="Jot something down"
      error={value.length > 5}
      onInput={(e) => setValue(e.currentTarget.value)} />
    <div style="margin-top: 0.5em">
      Value: {{JSON.stringify(value)}}
    </div>
  </>
);
```

### Vue.js x Custom Element

``` html
<script setup>
import { ref } from "vue";
const value = ref("");
</script>

<phi-text-input
  :value="value"
  :error="value.length > 5"
  placeholder="Jot something down"
  @input="value = $event.target.value" />
<div style="margin-top: 0.5em">
  Value: {{JSON.stringify(value)}}
</div>
```

### Vanilla JS x CSS

``` html
<input
  id="input"
  type="text"
  class="phi-text-input md"
  placeholder="Jot something down" />
<div id="value" style="margin-top: 0.5em">
  Value: ""
</div>

<script>
function onInput (e) {
  const value = e.currentTarget.value;
  document.getElementById("value").innerHTML = `Value: "${value}"`;
  if (value.length > 5) {
    document.getElementById("input").classList.add("error");
  } else {
    document.getElementById("input").classList.remove("error");
  }
}
document.getElementById("input").addEventListener("input", onInput);
</script>
```

## State variants
### `error` variant

<figure>
  <phi-text-input value="An invalid input" error />
</figure>

## Size variants
### `sm` variant

<figure>
  <phi-text-input size="sm" value="A smaller text input" />
</figure>

## Reference
### Preact
#### Properties

| Property      | Type             | Default    | Description                               |
|---------------|------------------|------------|-------------------------------------------|
| `value`       | `string`         | (required) | Input value                               |
| `size`        | `md\|sm`         | `"md"`     | Select size variants                      |
| `placeholder` | `string`         | `""`       | Placeholder string                        |
| `error`       | `boolean`        | `false`    | Toggle error variant                      |
| `onInput`     | `string => void` | `false`    | A handler function called on input change |

### Custom Element
#### Props / Attrs

| Slot          | Category  | Type      | Default |
|---------------|-----------|-----------|---------|
| `value`       | Prop/Attr | `string`  | `""`    |
| `size`        | Prop/Attr | `md\|sm`  | `"md"`  |
| `placeholder` | Prop/Attr | `string`  | `""`    |
| `error`       | Prop/Attr | `boolean` | `false` |

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
| `md`, `sm` | Size variants  |
| `error`    | State variants |
