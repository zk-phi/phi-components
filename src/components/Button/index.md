# Button
## Demo
### Shape variants

`default`

<figure>
  <phi-button>
    <span slot="icon">🍺</span>
    Cheers!
  </phi-button>
</figure>

`primary` for the MOST important button in the screen, like "submit" button.

<figure>
  <phi-button variant="primary">
    Submit
  </phi-button>
</figure>

`dotted` for "add" buttons.

<figure>
  <phi-button variant="dotted">
    <span slot="icon">➕</span>
    Add item
  </phi-button>
</figure>

`text` for supplemental buttons.

<figure>
  <phi-button variant="text">
    <span slot="icon">📕</span>
    Read more
  </phi-button>
</figure>

### Color variants

`danger` for destructive actions.

<figure>
  <phi-button danger=1>
    <span slot="icon">🗑</span>
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

- `variant`: String (optional)
- `danger`: Boolean (optional)

### Slots

- `icon` (optional)

### Interface

- `onclick`: Function

## Preact

```js
<Button icon={ "😊" } onClick={ () => alert('Clicked!') }>
  I'm a button
</Button>
```

### Props

- `icon`: Node (optional)
- `variant`: String (optional)
- `danger`: Boolean (optional)
- `onClick`: Function
