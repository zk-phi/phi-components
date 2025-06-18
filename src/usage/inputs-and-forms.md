# Inputs and forms

Most form elements (unless noted) work just like normal `input` elements.

## Custom Element

- You may set initial value via either `value` attribute or proprerty

  ```html
  <!-- via attribute -->
  <phi-input value="initial value" />
  ```

  ```html
  <!-- via property (with Vue.js) -->
  <phi-input :value="'initial value'" />
  ```

- You may get current value from `value` property

  ```js
  const alertValue = () => alert(input.value);
  ```

- You may update input value via `value` property

  ```js
  const resetValue = () => input.value = "";
  ```

  Once you update `value` property from outside, setting `value` attribute no longer updates `value` property value.

- You may subscribe `input` event to watch user input

  ```html
  <phi-input oninput="handleInput" />
  ```

  ```js
  input.addEventListener("input", handleInput);
  ```

- You may put `name` attribute to integrate with the enclosing `<form>` element

  ```html
  <form method="POST">
    <phi-input name="field_name" />
    <input type="submit" value="Send" />
  </form>
  ```

  Note that non-string values are serialized as follows on submit.

  | JS value type | Form value             |
  |---------------|------------------------|
  | `null`        | `""` (empty string)    |
  | `boolean`     | `1` or `0`             |
  | `number`      | `number.toString()`    |
  | `array`       | comma-separated string |
  | `object`      | `FormData`             |

## as Preact component

- Use `value` prop to set value, and `onChange` to subscribe changes as usual

  ```js
  const Demo = () => {
    const [value, setValue] = useState("");
    return <Input value={ value } onChange={ setValue } />;
  };
  ```
