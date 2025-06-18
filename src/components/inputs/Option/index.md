# Option

Visually the same as Checkbox, but receives multiple selections.

## Examples

<script setup>
import { ref } from "vue";
const checked = ref(["P", "L", "U", "R"]);
</script>

<figure>
  <phi-group>
    <phi-option value="P" :checked="checked" @change="checked = $event.target.checked">
      Peace
    </phi-option>
    <phi-option value="L" :checked="checked" @change="checked = $event.target.checked">
      Love
    </phi-option>
    <phi-option value="U" :checked="checked" @change="checked = $event.target.checked">
      Unity
    </phi-option>
    <phi-option value="R" :checked="checked" @change="checked = $event.target.checked">
      Respect
    </phi-option>
  </phi-group>
  <div style="margin-top: 0.5em">
    Value: {{JSON.stringify(checked)}}
  </div>
</figure>

### Preact

``` jsx
const [checked, setChecked] = useState(["P", "L", "U", "R"]);

return (
  <>
    <Option checked={checked} value="P" onChange={(e) => setChecked(e.currentTarget.value)}>
      Peace
    </Option>
    <Option checked={checked} value="L" onChange={(e) => setChecked(e.currentTarget.value)}>
      Love
    </Option>
    <Option checked={checked} value="U" onChange={(e) => setChecked(e.currentTarget.value)}>
      Unity
    </Option>
    <Option checked={checked} value="R" onChange={(e) => setChecked(e.currentTarget.value)}>
      Respect
    </Option>
    <div style="margin-top: 0.5em">
      Value: {checked.join(", ")}
    </div>
  </>
)
```

### Vue.js x Custom Element

``` html
<script setup>
import { ref } from "vue";
const checked = ref(["P", "L", "U", "R"]);
</script>

<phi-group>
  <phi-option value="P" :checked="checked" @change="checked = $event.target.checked">
    Peace
  </phi-option>
  <phi-option value="L" :checked="checked" @change="checked = $event.target.checked">
    Love
  </phi-option>
  <phi-option value="U" :checked="checked" @change="checked = $event.target.checked">
    Unity
  </phi-option>
  <phi-option value="R" :checked="checked" @change="checked = $event.target.checked">
    Respect
  </phi-option>
</phi-group>
<div style="margin-top: 0.5em">
  Value: {{checked.join(", ")}}
</div>
```
