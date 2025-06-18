# Checkbox

A checkbox component to receive a boolean input.

If you are creating a form with multiple options, you may be interested in `Option` component.

## Examples

<script setup>
import { ref } from "vue";
const checked = ref(true);
</script>

<figure>
  <phi-checkbox :checked="checked" @change="checked = $event.target.checked">
    I agree to sell my personal data
  </phi-checkbox>
  <div style="margin-top: 0.5em">
    Value: {{JSON.stringify(checked)}}
  </div>
</figure>

### Preact

``` jsx
const [checked, setChecked] = useState(true);

return (
  <>
    <Checkbox checked={checked} onChange={(e) => setChecked(e.currentTarget.value)}>
      I agree to sell my personal data
    </Checkbox>
    <div style="margin-top: 0.5em">
      Value: {checked ? "true" : "false"}
    </div>
  </>
)
```

### Vue.js x Custom Element

``` html
<script setup>
import { ref } from "vue";
const checked = ref(true);
</script>

<phi-checkbox :checked="checked" @change="checked = $event.target.checked">
  I agree to sell my personal data
</phi-checkbox>
<div style="margin-top: 0.5em">
  Value: {{checked ? "true" : "false"}}
</div>
```

### Vanilla JS x CSS

``` html
<label class="phi-checkbox">
  <input id="input" type="checkbox" class="input" checked />
  I agree to sell my personal data
</label>
<div id="value" style="margin-top: 0.5em">
  Value: true
</div>

<script>
function onChange (e) {
  const value = e.currentTarget.value;
  document.getElementById("value").innerHTML = `Value: ${value ? "true" : "false"}`;
}
document.getElementById("input").addEventListener("change", onChange);
</script>
```

## Reference
### Preact
#### Properties

| Property   | Type                | Default    | Description                               |
|------------|---------------------|------------|-------------------------------------------|
| `checked`  | `boolean`           | (required) | Whether the checkbox is checked           |
| `onChange` | `boolean => void`   | `false`    | A handler function called on value change |
| `children` | `ComponentChildren` | empty      | Label text                                |

### Custom Element
#### Props / Attrs

| Slot      | Category  | Type                       | Default   |
|-----------|-----------|----------------------------|-----------|
| `checked` | Prop/Attr | `boolean`                  | `false`   |

#### Events

Following events are confirmed to work as expected. Some other events may also work.

| Event    | Description             |
|----------|-------------------------|
| `change` | Emitted on value change |

### Pure-CSS
#### Classes

| Class                |             |
|----------------------|-------------|
| `phi-check`, `input` | Core styles |
