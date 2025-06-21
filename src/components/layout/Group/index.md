# Group

Align elements horizontally.

## Example

<figure>
  <phi-group>
    <phi-button>
      <span slot="icon">
        <phi-icon icon="back" />
      </span>
    </phi-button>
    <phi-button>
      <span slot="icon">
        <phi-icon icon="next" />
      </span>
    </phi-button>
  </phi-group>
</figure>

### Preact

``` jsx
<Group>
  <Button icon={<Icon icon="back" />} />
  <Button icon={<Icon icon="next" />} />
</Group>
```

### Custom Element

``` html
<phi-group>
  <phi-button>
    <span slot="icon">
      <phi-icon icon="back" />
    </span>
  </phi-button>
  <phi-button>
    <span slot="icon">
      <phi-icon icon="next" />
    </span>
  </phi-button>
</phi-group>
```

### Pure-CSS

``` html
<div class="phi-group left md">
  <button class="phi-button default">
    <span class="icon">＜</span>
  </button>
  <button class="phi-button default">
    <span class="icon">＞</span>
  </button>
</div>
```

## `flex-grow`

You may put `style="flex-grow: 1"` to some children to control widths.

<figure>
  <phi-group>
    <phi-button>
      <span slot="icon">
        <phi-icon icon="back" />
      </span>
      Cancel
    </phi-button>
    <phi-button style="flex-grow: 1" variant="primary">
      <span slot="icon">
        <phi-icon icon="okay" />
      </span>
      Complete
    </phi-button>
  </phi-group>
</figure>

``` jsx
<Group>
  <Button icon={<Icon icon="back" />}>
    Cancel
  </Button>
  <Button icon={<Icon icon="okay" />} style="flex-grow: 1">
    Complete
  </Button>
</Group>
```

## Alignment variants
### `left` variant (default)

<figure>
  <phi-group align="left">
    <phi-button>
      <span slot="icon">
        <phi-icon icon="back" />
      </span>
    </phi-button>
    <phi-button>
      <span slot="icon">
        <phi-icon icon="next" />
      </span>
    </phi-button>
  </phi-group>
</figure>

### `center` variant

<figure>
  <phi-group align="center">
    <phi-button>
      <span slot="icon">１</span>
    </phi-button>
    <phi-button>
      <span slot="icon">２</span>
    </phi-button>
    <phi-button>
      <span slot="icon">３</span>
    </phi-button>
  </phi-group>
</figure>

### `right` variant

<figure>
  <phi-group align="right">
    <phi-button>
      <span slot="icon">
        <phi-icon icon="back" />
      </span>
      Cancel
    </phi-button>
    <phi-button variant="primary">
      <span slot="icon">
        <phi-icon icon="okay" />
      </span>
      Send
    </phi-button>
  </phi-group>
</figure>

### `space-between` variant

<figure>
  <phi-group align="space-between">
    <phi-button>
      <span slot="icon">
        <phi-icon icon="back" />
      </span>
      Back
    </phi-button>
    <phi-button>
      <span slot="icon">
        <phi-icon icon="next" />
      </span>
      Next
    </phi-button>
  </phi-group>
</figure>

## Gap variants
### `md` variant (default)

Suitable to align normal elements.

<figure>
  <phi-group gap="md">
    <phi-button>
      <span slot="icon">
        <phi-icon icon="back" />
      </span>
    </phi-button>
    <phi-button>
      <span slot="icon">
        <phi-icon icon="next" />
      </span>
    </phi-button>
  </phi-group>
</figure>

### `sm` variant (default)

Suitable to align options, tags, etc.

<figure>
  <phi-group gap="sm">
    <code>Foo</code>
    <code>Bar</code>
    <code>Baz</code>
  </phi-group>
</figure>

## Reference
### Preact
#### Properties

| Property   | Type                        | Default  | Description               |
|------------|-----------------------------|----------|---------------------------|
| `gap`      | `'md'\|'sm'`                | `'md'`   | Switch gap variants       |
| `align`    | `'left'\|'center'\|'right'` | `'left'` | Switch alignment variants |
| `children` | `ComponentChildren`         | empty    | Child elements            |

### Custom Element
#### Props / Attrs

| Slot    | Category  | Type                        | Default  |
|---------|-----------|-----------------------------|----------|
| `gap`   | Prop/Attr | `'md'\|'sm'`                | `'md'`   |
| `align` | Prop/Attr | `'left'\|'center'\|'right'` | `'left'` |

### Pure-CSS
#### Classes

| Class                                      |                    |
|--------------------------------------------|--------------------|
| `phi-group`                                | Core styles        |
| `left`, `center`, `right`, `space-between` | Alignment variants |
| `md`, `sm`                                 | Gap variants       |
