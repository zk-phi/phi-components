# Button

A generic button component.

<figure>
  <phi-button>
    <span>Button</span>
  </phi-button>
</figure>

```html
<phi-button>
  <span>Button</span>
</phi-button>
```

## Variants

`primary` for the MOST important button in the screen, like "submit" button.

<figure>
  <phi-button variant="primary">
    <span>Submit</span>
  </phi-button>
  &nbsp;
  <phi-button danger variant="primary">
    <span>Delete</span>
  </phi-button>
</figure>

```html
<phi-button variant="primary">
  <span>Submit</span>
</phi-button>
<phi-button danger variant="primary">
  <span>Delete</span>
</phi-button>
```

`dotted` for "add" buttons.

<figure>
  <phi-button variant="dotted">
    <span>+ Add item</span>
  </phi-button>
  &nbsp;
  <phi-button danger variant="dotted">
    <span>+ Add dangerous item</span>
  </phi-button>
</figure>

```html
<phi-button variant="dotted">
  <span>+ Add item</span>
</phi-button>
<phi-button danger variant="dotted">
  <span>+ Add dangerous item</span>
</phi-button>
```

`text` for supplemental actions.

<figure>
  <phi-button variant="text">
    <span slot="icon">📕</span>
    <span>Read more</span>
  </phi-button>
  &nbsp;
  <phi-button danger variant="text">
    <span slot="icon">💀</span>
    <span>Danger</span>
  </phi-button>
</figure>

```html
<phi-button variant="text">
  <span slot="icon">📕</span>
  <span>Read more</span>
</phi-button>
<phi-button danger variant="text">
  <span slot="icon">💀</span>
  <span>Danger</span>
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
import { ref } from "vue";
const count = ref(0);
</script>

### Web Components (+ Vue)

<figure>
  <phi-button @click="count++" :danger="count >= 10">
    <span slot="icon">🍺</span>
    <span>Cheers!</span>
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
   <span>Cheers!</span>
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
