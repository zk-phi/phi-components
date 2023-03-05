# Installation
## Quick Start

Just add a `script` tag,

```html
<script src="https://cdn.jsdelivr.net/gh/zk-phi/phi-components@release/dist/phi-components.umd.js"></script>
```

and register all components by calling `PhiComponents.register()`.

```html
<script>
PhiComponents.register();
</script>
```

## Hosting your own

Pre-built version is available in the `release` branch of this repository.

https://github.com/zk-phi/phi-components/tree/release

You may also build from the source as follows.

``` shell
git clone https://github.com/zk-phi/phi-components.git
npm install
npm run build:module
```

## ES Modules version

ESM version is also available as `*.es.js` (instead of `*.umd.js`).

Use `import` statement to load `register` function.

```html
<script type="module">
import { register } from "path/to/phi-components.es.js";
register();
</script>
```

## Including in your bundles

If you are using a bundler to build your application and you want to include this library in your bundle, install `release` branch of this repository as a package,

``` shell
npm install "zk-phi/phi-components#release"
```

and import from you application.

```javascript
import { register } from "phi-components";
register();
```

You may also import raw Preact components, which may be useful if you are building your app with Preact.

```javascript
// Raw Preact components are also exported
import { Button } from "phi-components";
```
