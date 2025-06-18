# Option

Visually the same as `Checkbox` component, but supports multiple selections.

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

### Pure-CSS

Unsupported.

Use `Checkbox` component for pure-CSS checkbox.

## Reference
### Preact
#### Properties

| Property   | Type                | Default    | Description                               |
|------------|---------------------|------------|-------------------------------------------|
| `checked`  | `T[]`               | (required) | List of checked options                   |
| `value`    | `T`                 | (required) | Value of THIS option                      |
| `onChange` | `T[] => void`       | empty      | A handler function called on value change |
| `children` | `ComponentChildren` | empty      | Label text                                |

### Custom Element
#### Props / Attrs

| Slot      | Category | Type                     | Default |
|-----------|----------|--------------------------|---------|
| `checked` | Attr     | comma-separated `string` | `""`    |
| `value`   | Attr     | `string`                 | `""`    |
| `checked` | Prop     | `T[]`                    | `[]`    |
| `value`   | Prop     | `T`                      | `""`    |

#### Events

Following events are confirmed to work as expected. Some other events may also work.

| Event    | Description             |
|----------|-------------------------|
| `change` | Emitted on value change |

### Pure-CSS

Unsupported.
