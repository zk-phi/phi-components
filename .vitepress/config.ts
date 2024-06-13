import Path from "path";
import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "ja-JP",
  title: "phi-components",
  srcDir: Path.resolve("src_atomico"),
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
        text: "Layout",
        items: [
          { text: "VSpace", link: "/components/layout/VSpace/" },
          { text: "Center", link: "/components/layout/Center/" },
        ],
      }, {
        text: "Form",
        items: [
          { text: "Button", link: "/components/form/Button/" },
          { text: "Input", link: "/components/form/Input/" },
          { text: "Checkbox", link: "/components/form/Checkbox/" },
        ],
      }, {
        text: "Other",
        items: [
          { text: "GlobalStyles", link: "/components/other/GlobalStyles/" },
          { text: "Icon", link: "/components/other/Icon/" },
          { text: "Popover", link: "/components/other/Popover/" },
        ],
      }],
    },
  ]},
});
