# phi-components

A component library by zk-phi.

- lightweight
- builds fast
- available as both Web Components and Preact components

### Design Principles

- Simple enough to meet wide range of purposes
- No animations, yes interactions
  - Interactive elements are always distinguishable from plain texts, without need to hover
  - Interactive elements are colored when hovered
  - Interactive elements look different when active
- Happy, positive and warm vibe

### Technology overview

- Language: `Typescript`
- Bundler: `Vite`
- DOM Manipulation: `Preact`
- Style injection: `Goober`
- Web Components Wrapper: `preactement`
- Documentation: `Vitepress`

### Limitations / notices

- For Web Components, boolean attr values cannot be omitted like `<phi-button danger>`, but must be specified like `<phi-button danger=1>`
  - we may need to modify `preactement` package to fix this
