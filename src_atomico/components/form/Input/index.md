# Input

A text input works just like `<input type='text'>`.

<figure>
  <phi-input value="abrakadabra" />
</figure>

```html
<phi-input value="abrakadabra" />
```

## Variants
### Size Variants

`small` for nested forms (like popovers):

<figure>
  <phi-input size="small" value="abrakadabra" />
</figure>

```html
<phi-input size="small" value="abrakadabra" />
```

### Color Variants

`error` for invalid inputs:

<figure>
  <phi-input error value="adracabadra" />
</figure>

```html
<phi-input error value="adracabadra" />
```

## Usage

<script setup>
import "./demo";
import { ref } from "vue";
const value = ref("abrakadabra");
</script>

### Web Components (+ Vue)

<figure>
  <phi-input
    :value="value"
    @input="value = $event.target.value"
    :error="value !== 'abrakadabra'" />
  <p>
    Input value = {{ value }}
    (<button @click="value = 'abrakadabra'">reset</button>)
  </p>
</figure>

```html
<script setup>
import { ref } from "vue";
const value = ref("abrakadabra");
</script>

<phi-input
  :value="value"
  @input="value = $event.target.value"
  :error="value !== 'abrakadabra'" />
<p>
   value = {{ value }}
   (<button @click="value = 'abrakadabra">reset</button>)
</p>
```

#### Attributes

| Name    | Type      | Default    | Description                              |
|---------|-----------|------------|------------------------------------------|
| `value` | `string`  | `""`       | Set initial value / update current value |
| `size`  | `string`  | `"normal"` | Switch size variants                     |
| `error` | `boolean` | `"false"`  | Enable error color variant               |

#### Slots

| Name | Description |
|------|-------------|

#### Props

| Name    | Type     | Default | Description                |
|---------|----------|---------|----------------------------|
| `value` | `string` | `""`    | Get / update current value |

#### Events

| Name    | Description              |
|---------|--------------------------|
| `input` | Triggered on user inputs |

### Preact

<figure>
  <phi-input-demo />
</figure>

```js
const Demo = () => {
  const [value, setValue] = useState("abrakadabra");
  return <>
    <Input
        value={ value }
        onChange={ setValue }
        error={ value !== "abrakadabra" } />
    <p>
      value: { value }
      (<button onClick={ () => setValue("abrakadabra") }>reset</button>)
    </p>
  </>;
};
```

#### Props

| Name       | Type                      | Default    |
|------------|---------------------------|------------|
| `value`    | `string`                  | (required) |
| `onChange` | `(string, Event) => void` | (required) |
| `size`     | `string`                  | `"normal"` |
| `error`    | `boolean`                 | `false`    |
