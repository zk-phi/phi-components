# Installation
## Web Components

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
import { register } from "phi-components";
register();
```

Note that you may need to bypass registration during SSR.

```diff
+if (typeof window !== "undefined") {
   register();
+}
```

## Preact components

```javascript
// Raw Preact components are also exported
import { Button } from "phi-components";
```
