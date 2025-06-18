# Checkbox

A checkbox component to receive a boolean input.

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
