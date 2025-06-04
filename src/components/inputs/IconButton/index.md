# IconButton

An icon-only button component.

## Examples
### Color variants
#### default color

<figure>
  <phi-icon-button>
    ＋
  </phi-icon-button>
</figure>

#### `danger` color

Suitable for buttons which users should be thoughtful before pressing.

<figure>
  <phi-icon-button danger>
    ＋
  </phi-icon-button>
</figure>

## Usage
### Preact

``` jsx
import { IconButton } from "phi-components";

<IconButton danger>
  ＋
</IconButton>
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

<phi-icon-button danger>
  ＋
</phi-icon-button>
```

#### Supported fields

| Slot      | Category  | Type        | Default    |             |
|-----------|-----------|-------------|------------|-------------|
| `onClick` | Prop      | `() => void | undefined` | `undefined` |
| `danger`  | Prop/Attr | `boolean`   | `false`    |             |

#### Supported events

Following events are confirmed to work as expected. Some other events may also work.

| Event   | Description           |
|---------|-----------------------|
| `click` | Emitted on user click |

### Pure-CSS

``` html
<button class="phi-icon-button danger">
  ＋
</button>
```
