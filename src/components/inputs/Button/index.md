# Button

A generic button component.

## Examples
### Style variants
#### `default` variant

The default variant that fits most usecases.

<figure>
  <phi-button variant="default">
    <span slot="icon">🍺</span>
    Cheers!
  </phi-button>
</figure>

#### `primary` variant

Suitable for the most significant button in the screen, that usually sends information (i.e. "submit" button).

<figure>
  <phi-button variant="primary">
    <span slot="icon">📩</span>
    Send
  </phi-button>
</figure>

#### `dotted` variant

Dotted button usually implies that something will replace the button when pressed. Usually used for "+ Add" button.

<figure>
  <phi-button variant="dotted">
    <span slot="icon">＋</span>
    Add item here
  </phi-button>
</figure>

### Color variants
#### `danger` color

Suitable for irreversible actions (that usually cause data loss), so that users should be thoughtful before pressing the button.

<figure>
  <phi-button variant="primary" danger>
    <span slot="icon">🗑️</span>
    Delete
  </phi-button>
</figure>

## Usage
### Preact

``` jsx
import { Button } from "phi-components";

<Button icon="🍺">
  Cheers!
</Button>
```

#### Supported properties

| Property   | Type                       | Default    | Description                        |
|------------|----------------------------|------------|------------------------------------|
| `onClick`  | `() => void`               | (required) | A handler function called on click |
| `danger`   | `boolean`                  | `false`    | Toggle danger color variant        |
| `variant`  | `default\|primary\|dotted` | `default`  | Switch style variants              |
| `icon`     | `ComponentChildren`        |            | An icon DOM element                |
| `children` | `ComponentChildren`        |            | Button text                        |

### Custom Element

``` jsx
import register from "phi-components/custom-element"
register();

<phi-button variant="default">
  <span slot="icon">🍺</span>
  Cheers!
</phi-button>
```

#### Supported fields

| Slot      | Category  | Type                       | Default     |
|-----------|-----------|----------------------------|-------------|
| `onClick` | Prop      | `() => void\|undefined`    | `undefined` |
| `danger`  | Prop/Attr | `boolean`                  | `false`     |
| `variant` | Prop/Attr | `default\|primary\|dotted` | `default`   |
| `icon`    | Slot      |                            |             |

#### Supported events

Following events are confirmed to work as expected. Some other events may also work.

| Event   | Description           |
|---------|-----------------------|
| `click` | Emitted on user click |

### Pure-CSS

``` html
<button class="phi-button default">
  <span class="icon">🍺</span>
  <span>Cheers!</span>
</button>
```
