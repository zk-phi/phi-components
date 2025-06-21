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
    required
    maxlength="10"
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
      maxlength="10"
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
  maxlength="10"
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
  placeholder="Jot something down"
  maxlength="10" />
<div id="value" style="margin-top: 0.5em">
  Value: ""
</div>

<script>
function onInput (e) {
  const value = e.currentTarget.value;
  document.getElementById("value").innerHTML = `Value: "${value}"`;
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

| Property      | Type                | Default     | Description                               |
|---------------|---------------------|-------------|-------------------------------------------|
| `value`       | `string`            | (required)  | Input value                               |
| `placeholder` | `string`            | `""`        | Placeholder string                        |
| `required`    | `boolean`           | `false`     | Whether non-empty string is allowed       |
| `minlength`   | `number\|undefined` | `undefined` | Minimum allowed length of string          |
| `maxlength`   | `number\|undefined` | `undefined` | Maximum allowed length of string          |
| `size`        | `'md'\|'sm'`        | `"'md'"`    | Select size variants                      |
| `error`       | `boolean`           | `false`     | Toggle error variant                      |
| `onInput`     | `string => void`    | `false`     | A handler function called on input change |

### Custom Element
#### Props / Attrs

| Slot          | Category  | Type                | Default     |
|---------------|-----------|---------------------|-------------|
| `value`       | Prop/Attr | `string`            | `""`        |
| `placeholder` | Prop/Attr | `string`            | `""`        |
| `required`    | Prop/Attr | `boolean`           | `false`     |
| `minlength`   | Prop/Attr | `number\|undefined` | `undefined` |
| `maxlength`   | Prop/Attr | `number\|undefined` | `undefined` |
| `size`        | Prop/Attr | `'md'\|'sm'`        | `"'md'"`    |
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
| `md`, `sm` | Size variants  |
| `error`    | State variants |
