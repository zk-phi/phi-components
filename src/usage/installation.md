# Installation

You may add `phi-components` to your project in three different levels:

1. as a CSS-only design system
2. as a framework-agnostic custom elements (Web Components)
3. as a Preact components

## 1. As a CSS-only design system
### With package manager

Add this package to your project:

``` json
{
  "dependencies": {
    "phi-components": "zk-phi/phi-components#<commit-or-branch-id>"
  }
}
```

and import CSS.

``` typescript
import "phi-components/style.css";
```

### Without package manager

Copy `dist/style.css` to your project,

```terminal
$ wget https://raw.githubusercontent.com/zk-phi/phi-components/refs/heads/master/dist/style.css -O styles.css
```

and load it.

``` html
<link rel="stylesheet" href="styles.css" />
```

## 2. As a framework-agnostic custom element library (Web Components)
### 2-a. Minimal installation (UMD)

Copy `dist/custom-elements.umd.js` and `dist/custom-elements.css` to your project,

```terminal
$ wget https://raw.githubusercontent.com/zk-phi/phi-components/refs/heads/master/dist/custom-elements.umd.js -O phi-components.umd.js
$ wget https://raw.githubusercontent.com/zk-phi/phi-components/refs/heads/master/dist/custom-elements.css -O styles.css
```

and load the CSS.

``` html
<link rel="stylesheet" href="styles.css" />
```

Then call `registerPhiComponents` to register components.

``` html
<script src="./phi-components.umd.js"></script>
<script>
  registerPhiComponents();
</script>
```

### 2-b. ES Modules (without package manager)

Copy `dist/custom-elements.js` and `dist/custom-elements.css` to your project,

```terminal
$ wget https://raw.githubusercontent.com/zk-phi/phi-components/refs/heads/master/dist/custom-elements.js -O phi-components.js
$ wget https://raw.githubusercontent.com/zk-phi/phi-components/refs/heads/master/dist/custom-elements.css -O styles.css
```

and load the CSS.

``` html
<link rel="stylesheet" href="styles.css" />
```

Then import and call the exported function to register components.

``` html
<script type="module">
  import register from "./phi-components.js";
  register();
</script>
```

### 2-c. With package manager

Add this package to your project.

``` json
{
  "dependencies": {
    "phi-components": "zk-phi/phi-components#<commit-or-branch-id>"
  }
}
```

Then import CSS and register components.

``` typescript
import registerPhiComponents from "phi-components/custom-elements";
import "phi-components/custom-elements/style.css";
registerPhiComponents();
```

## 3. As a Preact components library

Add this package to your project.

``` json
{
  "dependencies": {
    "phi-components": "zk-phi/phi-components#<commit-or-branch-id>"
  }
}
```

Then apply the CSS,

``` typescript
import "phi-components/style.css";
```

and import any component you want.

``` typescript
import { Button } from "phi-components";
```

## NOTICE

`phi-components` includes `destyle.css` to normalize browser default styles, which may affect existing app.

It's not recommended to mix different design systems together in a project.
