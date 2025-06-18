# Radio

A radio input.

## Examples

<script setup>
import { ref } from "vue";
const checked = ref("P");
</script>

<figure>
  <phi-group>
    <phi-radio name="plur" value="P" :checked="checked" @change="checked = $event.target.checked">
      Peace
    </phi-radio>
    <phi-radio name="plur" value="L" :checked="checked" @change="checked = $event.target.checked">
      Love
    </phi-radio>
    <phi-radio name="plur" value="U" :checked="checked" @change="checked = $event.target.checked">
      Unity
    </phi-radio>
    <phi-radio name="plur" value="R" :checked="checked" @change="checked = $event.target.checked">
      Respect
    </phi-radio>
  </phi-group>
  <div style="margin-top: 0.5em">
    Value: {{JSON.stringify(checked)}}
  </div>
</figure>

### Preact

``` jsx
const [checked, setChecked] = useState("P");

return (
  <>
    <Radio name="plur" checked={checked} value="P" onChange={(e) => setChecked(e.currentTarget.value)}>
      Peace
    </Radio>
    <Radio name="plur" checked={checked} value="L" onChange={(e) => setChecked(e.currentTarget.value)}>
      Love
    </Radio>
    <Radio name="plur" checked={checked} value="U" onChange={(e) => setChecked(e.currentTarget.value)}>
      Unity
    </Radio>
    <Radio name="plur" checked={checked} value="R" onChange={(e) => setChecked(e.currentTarget.value)}>
      Respect
    </Radio>
    <div style="margin-top: 0.5em">
      Value: {JSON.stringify(checked)}
    </div>
  </>
)
```

### Vue.js x Custom Element

``` html
<script setup>
import { ref } from "vue";
const checked = ref("P");
</script>

<phi-group>
  <phi-radio name="plur" value="P" :checked="checked" @change="checked = $event.target.checked">
    Peace
  </phi-radio>
  <phi-radio name="plur" value="L" :checked="checked" @change="checked = $event.target.checked">
    Love
  </phi-radio>
  <phi-radio name="plur" value="U" :checked="checked" @change="checked = $event.target.checked">
    Unity
  </phi-radio>
  <phi-radio name="plur" value="R" :checked="checked" @change="checked = $event.target.checked">
    Respect
  </phi-radio>
</phi-group>
<div style="margin-top: 0.5em">
  Value: {{JSON.stringify(checked)}}
</div>
```

### Pure-CSS

``` html
<label class="phi-radio">
  <input class="input" name="plur" type="radio" value="P" checked />
  Peace
</label>
<label class="phi-radio">
  <input class="input" name="plur" type="radio" value="L" />
  Love
</label>
<label class="phi-radio">
  <input class="input" name="plur" type="radio" value="U" />
  Unity
</label>
<label class="phi-radio">
  <input class="input" name="plur" type="radio" value="R" />
  Respect
</label>
<div id="value" style="margin-top: 0.5em">
  Value: "P"
</div>

<script>
function onChange (e) {
  if (e.currentTarget.checked) {
    document.getElementById("value").innerHTML = `Value: "${e.currentTarget.value}"`;
  }
}
document.getElementsByName("name").forEach(el => {
  el.addEventListener("change", onChange);
});
</script>
```

## Reference
### Preact
#### Properties

| Property   | Type                | Default    | Description                               |
|------------|---------------------|------------|-------------------------------------------|
| `checked`  | `T`                 | (required) | Value of selected item                    |
| `value`    | `T`                 | (required) | Value of THIS option                      |
| `onChange` | `T => void`         | empty      | A handler function called on value change |
| `children` | `ComponentChildren` | empty      | Label text                                |

### Custom Element
#### Props / Attrs

| Slot      | Category | Type     | Default |
|-----------|----------|----------|---------|
| `checked` | Attr     | `string` | `""`    |
| `value`   | Attr     | `string` | `""`    |
| `checked` | Prop     | `T`      | `""`    |
| `value`   | Prop     | `T`      | `""`    |

#### Events

Following events are confirmed to work as expected. Some other events may also work.

| Event    | Description             |
|----------|-------------------------|
| `change` | Emitted on value change |

### Pure-CSS
#### Classes

| Class                |             |
|----------------------|-------------|
| `phi-radio`, `input` | Core styles |
