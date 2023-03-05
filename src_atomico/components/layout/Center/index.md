# Center

A container that renders contents centered (both vertically and horizontally).

## Usage

<script setup>
import "./demo.tsx";
</script>

### Web Components

<figure>
  <phi-center container-style="height: 100px; background-color: #eeaa00">
    Foobar
  </phi-center>
</figure>

```html
<phi-center container-style="height: 100px; background-color: #eeaa00">
  Foobar
</phi-center>
```

#### Attributes

| Name              | Type     | Default | Description                           |
|-------------------|----------|---------|---------------------------------------|
| `container-style` | `string` |         | Extra styles applied to the container |
| `container-class` | `string` |         | Extra class added to the container    |

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
  <phi-center-demo />
</figure>

```js
const Demo = () => (
  <Center containerStyle={{ height: "100px", backgroundColor: "#ea0" }}>
    Foobar
  </Center>
);
```

| Name             | Type     | Default |
|------------------|----------|---------|
| `containerStyle` | `any`    |         |
| `containerClass` | `string` |         |
