# Form elements usage

Most form elements (unless noted) support all these interfaecs.

## Web Components
### `value` attribute to set initial value

You may specify `value` attribute in your HTML, to specify initial value for the input.

```html
<phi-input value="initial value" />
```

### `value` prop to get current value

You may retrieve current value of the input via `.value` prop.

```js
const alertValue = () => alert(input.value);
```

### `value` prop to update input value

You may also set `value` prop to update input value from outside.

```js
const resetValue = () => input.value = "";
```

### `input` event to watch user inputs

You may subscribe `input` event to watch user inputs.

```html
<phi-input oninput="handleInput" />
```

```js
input.addEventListener("input", handleInput);
```

### `name` field to integrate with enclosing `<form>` tags

You may give `name` to send its value from the enclosing `<form>`.

```html
<form method="POST">
  <phi-input name="field_name" />
  <input type="submit" value="Send" />
</form>
```

Note that you may need to polyfill `ElementInternals` to support this interface on Safari.

## Preact

Use `value` prop to set value, and `onChange` to subscribe.

```js
const Demo = () => {
  const [value, setValue] = useState("");
  return <Input value={ value } onChange={ setValue } />;
};
```
