# Stack

Align elements vertically.

## Example

<figure>
  <phi-stack>
    <phi-button>
      <span slot="icon">❌</span>
      Cancel
    </phi-button>
    <phi-button variant="primary">
      <span slot="icon">✅</span>
      Confirm
    </phi-button>
  </phi-stack>
</figure>

### Preact

``` jsx
<Stack>
  <Button icon="❌">
    Cancel
  </Button>
  <Button icon="✅">
    Confirm
  </Button>
</Stack>
```

### Custom Element

``` html
<phi-stack>
  <phi-button>
    <span slot="icon">❌</span>
    Cancel
  </phi-button>
  <phi-button variant="primary">
    <span slot="icon">✅</span>
    Confirm
  </phi-button>
</phi-stack>
```

### Pure-CSS

``` html
<div class="phi-stack md">
  <button class="phi-button default">
    <span class="icon">❌</span>
    Cancel
  </button>
  <button class="phi-button primary">
    <span class="icon">✅</span>
    Confirm
  </button>
</div>
```

## Size variants
### `md` variant (default)

Suitable to align normal elements.

<figure>
  <phi-stack size="md">
    <phi-button>
      <span slot="icon">❌</span>
      Cancel
    </phi-button>
    <phi-button variant="primary">
      <span slot="icon">✅</span>
      Confirm
    </phi-button>
  </phi-stack>
</figure>

### `sm` variant (default)

Suitable to align options, tags, etc.

<figure>
  <phi-stack size="sm">
    <code>Foo</code>
    <code>Bar</code>
    <code>Baz</code>
  </phi-stack>
</figure>

## Reference
### Preact
#### Properties

| Property   | Type                | Default | Description          |
|------------|---------------------|---------|----------------------|
| `size`     | `md\|sm`            | `md`    | Switch size variants |
| `children` | `ComponentChildren` | empty   | Child elements       |

### Custom Element
#### Props / Attrs

| Slot   | Category  | Type     | Default |
|--------|-----------|----------|---------|
| `size` | Prop/Attr | `md\|sm` | `md`    |

### Pure-CSS
#### Classes

| Class       |               |
|-------------|---------------|
| `phi-group` | Core styles   |
| `md`, `sm`  | Size variants |
