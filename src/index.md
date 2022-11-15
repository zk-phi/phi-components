# phi-components

A component library by zk-phi.

- reasonably lightweight
- builds fast
- framework agnostic (available as both Web Components and Preact components)

### Design Principles

- Happy, positive and warm vibe
- Not too fancy, meeting wide range of purposes
- No animations, yes interactions
  - All interactive elements are always distinguishable from plain texts, without need to hover
  - All interactive elements are colored when hovered
  - All interactive elements look different when active

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
