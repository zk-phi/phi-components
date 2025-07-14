# ResponsiveContainer

A container to add padding around the app, and restrict app width.

## Example

Resize the window to see how this component works.

<figure>
  <div style="background: #888">
    <phi-responsive-container padding="md" :max-width="420">
      <div style="color: white; background: red; min-height: 260px">App</div>
    </phi-responsive-container>
  </div>
</figure>

### Preact

``` jsx
<div style="background: #888">
  <ResponsiveContainer padding="md" maxWidth={420}>
    <div style="color: white; background: red; min-height: 260px">App</div>
  </ResponsiveContainer>
</div>
```

### Vue.js x Custom Element

NOTE: `configuration` ATTRIBUTE is not supported, so you need some JS to configure this component.

``` html
<div style="background: #888">
  <phi-responsive-container padding="md" :max-width="420">
    <div style="color: white; background: red; min-height: 260px">App</div>
  </phi-responsive-container>
</div>
```

### Pure-CSS

``` html
<div style="background: #888">
  <div class="phi-responsive-container">
    <div style="color: white; background: red; min-height: 260px">App</div>
  </div>
</div>
```

## Reference
### Preact
#### Properties

| Property   | Type         | Default  | Description             |
|------------|--------------|----------|-------------------------|
| `padding`  | `'md'\|'sm'` | `'md'`   | Switch padding variants |
| `maxWidth` | `number`     | `'100%'` | Max app width           |

### Custom Element
#### Props / Attrs

| Slot        | Category  | Type                | Default     |
|-------------|-----------|---------------------|-------------|
| `padding`   | Prop/Attr | `'md'\|'sm'`        | `'md'`      |
| `maxWidth`  | Prop      | `number\|undefined` | `undefined` |
| `max-width` | Attr      | `number\|undefined` | `undefined` |

### Pure-CSS
#### Classes

| Class                      |                  |
|----------------------------|------------------|
| `phi-responsive-container` | Core styles      |
| `md`, `sm`                 | Padding variants |
