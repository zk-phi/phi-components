# Button

A generic button component.

<figure>
  <phi-button>
    Button
  </phi-button>
</figure>

```html
<phi-button>
  Button
</phi-button>
```

## Variants

`primary` for the MOST important button in the screen, like "submit" button.

<figure>
  <phi-button variant="primary">
    Submit
  </phi-button>
  &nbsp;
  <phi-button danger variant="primary">
    Delete
  </phi-button>
</figure>

```html
<phi-button variant="primary">
  Submit
</phi-button>
<phi-button danger variant="primary">
  Delete
</phi-button>
```

`dotted` for "add" buttons.

<figure>
  <phi-button variant="dotted">
    + Add item
  </phi-button>
  &nbsp;
  <phi-button danger variant="dotted">
    + Add dangerous item
  </phi-button>
</figure>

```html
<phi-button variant="dotted">
  + Add item
</phi-button>
<phi-button danger variant="dotted">
  + Add dangerous item
</phi-button>
```

`text` for supplemental actions.

<figure>
  <phi-button variant="text">
    <span slot="icon">📕</span>
    Read more
  </phi-button>
  &nbsp;
  <phi-button danger variant="text">
    <span slot="icon">💀</span>
    Danger
  </phi-button>
</figure>

```html
<phi-button variant="text">
  <span slot="icon">📕</span>
  Read more
</phi-button>
<phi-button danger variant="text">
  <span slot="icon">💀</span>
  Danger
</phi-button>
```

`icon` for icon-only buttons.

<figure>
  <phi-button variant="icon">
    <phi-icon icon="effect" />
  </phi-button>
  &nbsp;
  <phi-button danger variant="icon">
    <phi-icon icon="delete" />
  </phi-button>
</figure>

```html
<phi-button variant="icon">
  <phi-icon icon="effect" />
</phi-button>
<phi-button danger variant="icon">
  <phi-icon icon="delete" />
</phi-button>
```

## Usage

<script setup>
import "./demo";
import { ref } from "vue";
const count = ref(0);
</script>

### Web Components (+ Vue)

<figure>
  <phi-button @click="count++" :danger="count >= 10">
    <span slot="icon">🍺</span>
    Cheers!
  </phi-button>
  <span v-if="count">
    🍻 x {{ count }}
  </span>
</figure>

```html
<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<phi-button @click="count++" :danger="count >= 10">
   <span slot="icon">🍺</span>
   Cheers!
</phi-button>
<span v-if="count">🍻 x {{ count }}</span>
```

#### Attributes

| Name      | Type      | Default     | Description                |
|-----------|-----------|-------------|----------------------------|
| `variant` | `string`  | `"default"` | Switch style variants      |
| `danger`  | `boolean` | `"false"`   | Enable error color variant |

#### Slots

| Name   | Description                           |
|--------|---------------------------------------|
| `icon` | Icon displayed before the button text |

#### Props

| Name | Type | Default | Description |
|------|------|---------|-------------|

#### Events

| Name    | Description            |
|---------|------------------------|
| `click` | Triggered when clicked |

### Preact

<figure>
  <phi-button-demo />
</figure>

```js
const Demo = () => {
  const [count, setCount] = useState(0);
  const incCount = useCallback(() => setCount(count => count + 1), [setCount]);
  return <>
    <Button icon={ "🍺" } onClick={ incCount } danger={ count >= 10 }>
      Cheers!
    </Button>
    { !!count && <span>🍻 x { count }</span> }
  </>;
};
```

#### Props

| Name      | Type             | Default     |
|-----------|------------------|-------------|
| `onClick` | `Event => void`  | (required)  |
| `variant` | `string`         | `"default"` |
| `danger`  | `boolean`        | `false`     |
| `icon`    | `ComponentChild` |             |
