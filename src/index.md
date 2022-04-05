# phi-components

Sample Vite + Web Components (Preact/Typescript) + Goober component library.

## Installation
### Web Components

- Browser

```html
<script src="path/to/phi-components.umd.js"></script>
<script>
PhiComponents.register();
</script>
```

- Browser (ES Modules)

```html
<script type="module">
import { register } from "path/to/phi-components.es.js";
register();
</script>
```

- Node

```javascript
import { register } from "path/to/phi-components.es.js";
register();
```

### Preact components

```javascript
// Raw Preact components are also exported
import { Button } from "path/to/phi-components.es.js";
```
