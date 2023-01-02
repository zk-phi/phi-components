# Input

A text input works just like `<input type='text'>`.

## Demo

<script setup>
import { ref } from "vue";
const value = ref("abrakadabra");
const reset = () => value.value = "abrakadabra";
</script>

<figure>
  <phi-input :value="value" @input="value = $event.target.value" />
  <p>
    Input value = {{ value }}
    (<button @click="reset">reset</button>)
  </p>
</figure>

### Size variants

`small` for inputs in popovers.

<figure>
  <phi-input size="small" value="abrakadabra" />
</figure>

### Color variants

`error` for invalid inputs.

<figure>
  <phi-input error value="adracabadra" />
</figure>

## Web Components

```html
<phi-input id="input" value="abrakadabra" oninput="handler()" />
```

### Attributes

- `value`: `string`
- `size`: `"normal" | "small"`
- `error`: `boolean`

### Events

- `input`

### Fields

- `value`: `string`

### Form compatiblity

```html
<form method="post">
  <phi-input name="magic_word" value="abrakadabra" />
  <input type="submit" />
</form>
```

Also works as expected with `<form>` and `<input type="submit">`.

You may need to polyfill ElementInternals to support this usecase on Safari.

## Preact

```js
<Input value={ magicWord } onInput={ setMagicWord } />
```

### Props

- `value`: `string`
- `onInput`: `string -> void`
- `size`: `string`
- `error`: `boolean`
