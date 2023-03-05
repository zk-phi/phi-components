# Form elements

Most form elements (unless noted) work just like normal `input` elements.

## as Web Components

- You may set initial value via `value` attribute

  ```html
  <phi-input value="initial value" />
  ```

- You may get current value from `value` prop

  ```js
  const alertValue = () => alert(input.value);
  ```

- You may update input value from outside via `value` prop

  ```js
  const resetValue = () => input.value = "";
  ```

  Once you update `value` prop from outside, setting `value` attribute no longer works.

- You may subscribe `input` event to watch user inputs

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

  Note that you may need to polyfill `ElementInternals` to support this interface on Safari.

## as Preact component

- Use `value` prop to set value, and `onChange` to subscribe changes

  ```js
  const Demo = () => {
    const [value, setValue] = useState("");
    return <Input value={ value } onChange={ setValue } />;
  };
  ```
