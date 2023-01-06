# Button

A generic button component.

<figure>
  <phi-button>
    Button
  </phi-button>
</figure>

## Variants

`primary` for the MOST important button in the screen, like "submit" button.

<figure>
  <phi-button variant="primary">
    Submit
  </phi-button>
  &nbsp;
  <phi-button danger variant="primary">
    Danger
  </phi-button>
</figure>

`dotted` for "add" buttons.

<figure>
  <phi-button variant="dotted">
    + Add item
  </phi-button>
  &nbsp;
  <phi-button danger variant="dotted">
    + Danger
  </phi-button>
</figure>

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

| Name | Type | Description |
|------|------|-------------|

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
    { !!count && <span> 🍻 x { count }</span> }
  </>;
};
```

#### Props

| Name      | Type             | Default     | Description                           |
|-----------|------------------|-------------|---------------------------------------|
| `variant` | `string`         | `"default"` | Switch style variants                 |
| `danger`  | `boolean`        | `false`     | Enable error color variant            |
| `icon`    | `ComponentChild` |             | Icon displayed before the button text |
| `onClick` | `() => void`     |             | Called when clicked                   |
