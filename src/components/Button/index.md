# Button

A generic button component.

## Demo

<script setup>
import { ref } from "vue";
const count = ref(0);
</script>

<figure>
  <phi-button @click="count++">
    <span slot="icon">🍺</span>
    Cheers!
  </phi-button>
  <span v-if="count">
    🍻 x {{ count }}
  </span>
</figure>

### Type Variants

`primary` for the MOST important button in the screen, like "submit" button.

<figure>
  <phi-button variant="primary">
    Submit
  </phi-button>
</figure>

`dotted` for "add" buttons.

<figure>
  <phi-button variant="dotted">
    + Add item
  </phi-button>
</figure>

`text` for supplemental actions.

<figure>
  <phi-button variant="text">
    <span slot="icon">📕</span>
    Read more
  </phi-button>
</figure>

`icon` for icon-only buttons.

<figure>
  <phi-button variant="icon">
    <phi-icon icon="effect" />
  </phi-button>
</figure>

### Color Variants

`danger` for destructive actions.

<figure>
  <phi-button danger>
    <span slot="icon">
      <phi-icon icon="delete" />
    </span>
    Delete
  </phi-button>
</figure>

## Web Components

```html
<phi-button onclick="alert('Clicked!')">
  <span slot="icon">😊</span>
  I'm a button
</phi-button>
```

### Attributes

- `variant`: `"primary" | "default" | "dotted" | "text"`
- `danger`: `""`

### Slots

- `icon`

### Events

- `click`

## Preact

```js
<Button icon={ "😊" } onClick={ () => alert('Clicked!') }>
  I'm a button
</Button>
```

### Props

- `variant`: `"primary" | "default" | "dotted" | "text"`
- `danger`: `boolean`
- `icon`: `ComponentChild`
- `onClick`: `() => void`
