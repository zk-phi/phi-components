# TextButton

An in-text button component, that looks like links.

## Examples
### Color variants
#### default color

<figure>
  Please <phi-text-button>
    👆 Click me
  </phi-text-button>
</figure>

#### `danger` color

Suitable for buttons which users should be thoughtful before pressing.

<figure>
  You should not <phi-text-button danger>
    💀 Click this
  </phi-text-button>
</figure>

## Usage
### Preact

``` jsx
import { TextButton } from "phi-components";

<TextButton danger>
💀 Don't click me
</TextButton>
```

#### Supported properties

| Property   | Type                | Default    | Description                        |
|------------|---------------------|------------|------------------------------------|
| `onClick`  | `() => void`        | (required) | A handler function called on click |
| `danger`   | `boolean`           | `false`    | Toggle danger color variant        |
| `children` | `ComponentChildren` |            | Icon elementent                    |

### Custom Element

``` jsx
import register from "phi-components/custom-element"
register();

<phi-text-button danger>
  💀 Don't click me
</phi-text-button>
```

#### Supported fields

| Slot      | Category    | Type                    | Default     |
|-----------|-------------|-------------------------|-------------|
| `onClick` | Prop        | `() => void\|undefined` | `undefined` |
| `danger`  | Prop / Attr | `boolean`               | `false`     |

#### Supported events

Following events are confirmed to work as expected. Some other events may also work.

| Event   | Description           |
|---------|-----------------------|
| `click` | Emitted on user click |

### Pure-CSS

``` html
<button class="phi-text-button danger">
  💀 Don't click me
</button>
```
