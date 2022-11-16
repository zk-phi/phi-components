# phi-components

A **WIP** component library.

### Goals

- reasonably lightweight
- builds fast
- framework agnostic (available as both Web Components and Preact components)
- supports dark mode out of the box

### Design Principles

- Happy, positive and warm vibe
- Not too fancy, meeting wide range of purposes
- No animations, yes interactions
  - All interactive elements are always distinguishable from plain texts, without need to hover
  - All interactive elements are colored when hovered
  - All interactive elements look different when active

### Technologies

- Language: `Typescript`
- Bundler: `Vite`
- DOM manipulation: `Preact`
- Style injection: `Goober`
- Web Components wrapper: `preactement`
- Documentation: `Vitepress` / `Vue`

### Limitations / notices

- For Web Components, boolean attr values cannot be omitted like `<phi-button danger>`, but must be specified like `<phi-button danger=1>`
  - we may need to modify `preactement` package to fix this

### Copyright

Built with ♡ by zk-phi

<small>Peace, Love, Unity, Respect 🫶</small>
