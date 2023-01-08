import Path from "path";
import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "ja-JP",
  title: "phi-components",
  srcDir: Path.resolve("src"),
  outDir: Path.resolve("doc"),
  base: "/phi-components/",
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: tag => tag.includes("-"),
      },
    },
  },
  vite: {
    esbuild: {
      jsxFactory: "h",
      jsxFragment: "Fragment",
      jsxInject: `import { h, Fragment } from "preact"`,
    },
  },
  themeConfig: {
    sidebar: [{
      text: "Getting Started",
      items: [
        { text: "Installation", link: "/installation" },
      ],
    }, {
      text: "Usage",
      items: [
        { text: "Form elements", link: "/usage/formelements" },
        { text: "Boolean attributes", link: "/usage/boolean" },
        { text: "Dark mode detection", link: "/usage/darkmode" },
      ],
    }, {
      text: "Components",
      items: [{
        text: "Form",
        items: [
          { text: "Button", link: "/components/Button/" },
          { text: "Input", link: "/components/Input/" },
          { text: "Checkbox", link: "/components/Checkbox/" },
        ],
      }, {
        text: "Other",
        items: [
          { text: "GlobalStyles", link: "/components/GlobalStyles/" },
          { text: "Icon", link: "/components/Icon/" },
        ],
      }],
    },
  ]},
});
