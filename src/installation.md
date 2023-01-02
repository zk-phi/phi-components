# Installation
## Browser
### Download

Pre-built version is available in the `release` branch of this repository.

https://github.com/zk-phi/phi-components/tree/release

You may also use CDNs, instead of hosting your own.

```html
<script src="https://cdn.jsdelivr.net/gh/zk-phi/phi-components@release/dist/phi-components.umd.js"></script>
```

### Build from source

If you want to build this library from the source, clone this repository

``` shell
git clone https://github.com/zk-phi/phi-components.git
```

and run `npm install` then `npm run build:module`.

### UMD build (*.umd.js)

Load with `script` tag, and call `PhiComponents.register` to register all components.

```html
<script src="path/to/phi-components.umd.js"></script>
<script>
PhiComponents.register();
</script>
```

### ES Modules build (*.es.js)

Import `register` from the module, and call it to register all components.

```html
<script type="module">
import { register } from "path/to/phi-components.es.js";
register();
</script>
```

## Node
### Install

Just install `release` branch of this repository as a package.

``` shell
npm install "zk-phi/phi-components#release"
```

### as Web Components

Import and call `register` to register all components.

```javascript
import { register } from "phi-components";
register();
```

### as Preact components

Import individual components from `phi-components`.

```javascript
// Raw Preact components are also exported
import { Button } from "phi-components";
```
