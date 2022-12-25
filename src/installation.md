# Installation
## Browser

Pre-built version is available in the `release` branch of this repository.

https://github.com/zk-phi/phi-components/tree/release

You may also use CDNs to load the library directly from.

```html
<script src="https://cdn.jsdelivr.net/gh/zk-phi/phi-components@release/dist/phi-components.umd.js"></script>
```

If you want to build this library from the source, clone this repository

``` shell
git clone https://github.com/zk-phi/phi-components.git
```

and run `npm install` then `npm run build:module`.

### UMD (*.umd.js)

`PhiComponents` is defined when loaded.

```html
<script src="path/to/phi-components.umd.js"></script>
<script>
PhiComponents.register();
</script>
```

### ES Modules (*.es.js)

You may also `import` the library explicitly as an ESM.

```html
<script type="module">
import { register } from "path/to/phi-components.es.js";
register();
</script>
```

## Node

Just install `release` branch of this repository as a package.

``` shell
npm install "zk-phi/phi-components#release"
```

### Import as Web Components

```javascript
import { register } from "phi-components";
register();
```

Note that you may need to skip registration during SSR.

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
