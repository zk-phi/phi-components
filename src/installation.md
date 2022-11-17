# Installation
## Browser
### UMD

```html
<script src="path/to/phi-components.umd.js"></script>
<script>
PhiComponents.register();
</script>
```

### ES Modules

```html
<script type="module">
import { register } from "path/to/phi-components.es.js";
register();
</script>
```

## Node
### Install

``` shell
npm install "zk-phi/phi-components#release"
```

### Import as Web Components

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

### Import as Preact components

```javascript
// Raw Preact components are also exported
import { Button } from "phi-components";
```
