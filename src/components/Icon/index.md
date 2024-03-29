# Icon

An icon component.

<figure>
  <ul>
    <li>back <phi-icon icon="back" /></li>
    <li>align-center <phi-icon icon="align-center" /></li>
    <li>align-left <phi-icon icon="align-left" /></li>
    <li>align-justify <phi-icon icon="align-justify" /></li>
    <li>align-right <phi-icon icon="align-right" /></li>
    <li>decrement <phi-icon icon="decrement" /></li>
    <li>increment <phi-icon icon="increment" /></li>
    <li>save <phi-icon icon="save" /></li>
    <li>delete <phi-icon icon="delete" /></li>
    <li>file <phi-icon icon="file" /></li>
    <li>text <phi-icon icon="text" /></li>
    <li>image <phi-icon icon="image" /></li>
    <li>effect <phi-icon icon="effect" /></li>
    <li>emoji <phi-icon icon="emoji" /></li>
    <li>check <phi-icon icon="check" /></li>
    <li>check-radio <phi-icon icon="check-radio" /></li>
  </ul>
</figure>

## Usage

<script setup>
import "./demo.tsx";
</script>

### Web Components

<figure>
  <phi-icon icon="text" />
</figure>

```html
<phi-icon icon="text" />
```

#### Attributes

| Name   | Type     | Default    | Description       |
|--------|----------|------------|-------------------|
| `icon` | `string` | (required) | Switch icon image |

#### Slots

| Name | Description |
|------|-------------|

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|

#### Events

| Name | Description |
|------|-------------|

### Preact

<figure>
  <phi-icon-demo />
</figure>

```js
<Icon icon="text" />
```

#### Props

| Name   | Type     | Default    |
|--------|----------|------------|
| `icon` | `string` | (required) |
