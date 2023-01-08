# Checkbox

A checkbox / radio input.

<figure>
  <phi-checkbox checked>I agree to sell my personal data</phi-checkbox>
</figure>

```html
<phi-checkbox checked>I agree to sell my personal data</phi-checkbox>
```

This component uses `checked` attribute / property (instead of `value`) to store user inputs.

## Usage

<script setup>
import "./demo";
import { ref } from "vue";
const booleanChecked = ref(false);
const radioChecked = ref("foo");
const options = [
  Object.freeze({ a: 1 }),
  Object.freeze({ a: 2 }),
  Object.freeze({ a: 3 }),
];
const radioObjectChecked = ref(options[0]);
const multiChecked = ref(["p", "l", "u", "r"]);
</script>

### Web Components (+ Vue)
#### Toggle

When you give a boolean value (unspecified, `""`, `"true"` or `"false"`) to `checked` attribute, `phi-checkbox` works as a boolean checkbox.

<figure>
  <phi-checkbox
    :checked="booleanChecked"
    @input="booleanChecked = $event.target.checked">
    I understand how to use this component
  </phi-checkbox>
  <p>
    value: {{ booleanChecked }}
  </p>
</figure>

```html
<script setup>
import { ref } from "vue";
const checked = ref(false);
</script>
<phi-checkbox :checked="checked" @input="checked = $event.target.checked">
  I understand how to use this component
</phi-checkbox>
<p>
  value: {{ checked }}
</p>
```

#### Radio

You may also give a non-boolean string `checked` attribute, together with `value` attribute, to make it work as a radio-styled select element.

<figure>
  <phi-checkbox
    :checked="radioChecked"
    @input="radioChecked = $event.target.checked"
    value="foo">
    which
  </phi-checkbox>
  <phi-checkbox
    :checked="radioChecked"
    @input="radioChecked = $event.target.checked"
    value="bar">
    do
  </phi-checkbox>
  <phi-checkbox
    :checked="radioChecked"
    @input="radioChecked = $event.target.checked"
    value="baz">
    you
  </phi-checkbox>
  <phi-checkbox
    :checked="radioChecked"
    @input="radioChecked = $event.target.checked"
    value="qux">
    like
  </phi-checkbox>
  <p>
    value: {{ radioChecked }}
  </p>
</figure>

```html
<script setup>
import { ref } from "vue";
const checked = ref("foo");
</script>

<phi-checkbox :checked="checked" @input="checked = $event.target.checked" value="foo">
  which
</phi-checkbox>
<phi-checkbox :checked="checked" @input="checked = $event.target.checked" value="bar">
  do
</phi-checkbox>
<phi-checkbox :checked="checked" @input="checked = $event.target.checked" value="baz">
  you
</phi-checkbox>
<phi-checkbox :checked="checked" @input="checked = $event.target.checked" value="qux">
  like
</phi-checkbox>
<p>
  value: {{ checked }}
</p>
```

You may also use non-string `checked` / `value`, by setting properties directly (not via attributes).

<figure>
  <phi-checkbox
    v-for="option in options"
    :checked.prop="radioObjectChecked"
    @input="radioObjectChecked = $event.target.checked"
    :value.prop="option">
    {{ option.a }}
  </phi-checkbox>
  <p>
    value: {{ radioObjectChecked }}
  </p>
</figure>

```html
<script setup>
import { ref } from "vue";
const options = [
  Object.freeze({ a: 1 }),
  Object.freeze({ a: 2 }),
  Object.freeze({ a: 3 }),
];
const checked = ref(options[0]);
</script>

<phi-checkbox
  v-for="option in options"
  :checked.prop="checked"
  @input="checked = $event.target.checked"
  :value.prop="option">
  {{ option.a }}
</phi-checkbox>
<p>
  value: {{ checked }}
</p>
```

#### Multiple

To allow multiple selections, set an array of values to `checked` property directly (not via attribute), together with `value` attribute (or property).

<figure>
  <phi-checkbox
    :checked.prop="multiChecked"
    @input="multiChecked = $event.target.checked"
    value="p">
    Peace
  </phi-checkbox>
  <phi-checkbox
    :checked.prop="multiChecked"
    @input="multiChecked = $event.target.checked"
    value="l">
    Love
  </phi-checkbox>
  <phi-checkbox
    :checked.prop="multiChecked"
    @input="multiChecked = $event.target.checked"
    value="u">
    Unity
  </phi-checkbox>
  <phi-checkbox
    :checked.prop="multiChecked"
    @input="multiChecked = $event.target.checked"
    value="r">
    Respect
  </phi-checkbox>
  <p>
    value: {{ multiChecked }}
  </p>
</figure>

```html
<script setup>
import { ref } from "vue";
const checked = ref(["p", "l", "u", "r"]);
</script>

<phi-checkbox :checked.prop="checked" @input="checked = $event.target.checked" value="p">
  Peace
</phi-checkbox>
<phi-checkbox :checked.prop="checked" @input="checked = $event.target.checked" value="l">
  Love
</phi-checkbox>
<phi-checkbox :checked.prop="checked" @input="checked = $event.target.checked" value="u">
  Unity
</phi-checkbox>
<phi-checkbox :checked.prop="checked" @input="checked = $event.target.checked" value="r">
  Respect
</phi-checkbox>
<p>
  value: {{ checked }}
</p>
```

#### Attributes

| Name      | Type                | Default   | Description                              |
|-----------|---------------------|-----------|------------------------------------------|
| `checked` | `boolean \| string` | `"false"` | Set initial value / update current value |
| `value`   | `string`            |           | Value of THIS option                     |

#### Slots

| Name | Description |
|------|-------------|

#### Props

| Name      | Type                  | Default | Description                |
|-----------|-----------------------|---------|----------------------------|
| `value`   | `T extends any`       |         |                            |
| `checked` | `boolean \| T \| T[]` | `false` | Get / update current value |


#### Events

| Name    | Description              |
|---------|--------------------------|
| `input` | Triggered on user inputs |

### Preact

<figure>
  <phi-checkbox-demo />
</figure>

```js
const Demo = () => {
  const [booleanChecked, setBooleanChecked] = useState(false);
  const [radioChecked, setRadioChecked] = useState("foo");
  const [multiChecked, setMultiChecked] = useState(["p", "l", "u", "r"]);
  return <>
    <p>
      <Checkbox checked={ booleanChecked } onChange={ setBooleanChecked }>
        I understand how to use this component.
      </Checkbox>
    </p>
    <p>
      <Checkbox checked={ radioChecked } onChange={ setRadioChecked } value="foo">I</Checkbox>
      <Checkbox checked={ radioChecked } onChange={ setRadioChecked } value="bar">am</Checkbox>
      <Checkbox checked={ radioChecked } onChange={ setRadioChecked } value="baz">a</Checkbox>
      <Checkbox checked={ radioChecked } onChange={ setRadioChecked } value="qux">radio</Checkbox>
    </p>
    <p>
      <Checkbox checked={ multiChecked } onChange={ setMultiChecked } value="p">Peace</Checkbox>
      <Checkbox checked={ multiChecked } onChange={ setMultiChecked } value="l">Love</Checkbox>
      <Checkbox checked={ multiChecked } onChange={ setMultiChecked } value="u">Unity</Checkbox>
      <Checkbox checked={ multiChecked } onChange={ setMultiChecked } value="r">Respect</Checkbox>
    </p>
  </>;
};
```

#### Props

| Name       | Type                            | Default                                  |
|------------|---------------------------------|------------------------------------------|
| `onChange` | `(S, Event) => void`            | (required)                               |
| `checked`  | `S extends boolean \| T \| T[]` | (required)                               |
| `value`    | `T extends any`                 | (required if `checked` is not a boolean) |
