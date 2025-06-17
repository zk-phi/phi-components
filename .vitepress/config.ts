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
  themeConfig: {
    sidebar: [{
      text: "Usage",
      items: [
        { text: "Installation", link: "/usage/installation" },
        { text: "Properties and attributes", link: "/usage/props-and-attrs" },
        { text: "Boolean attributes", link: "/usage/boolean-attributes" },
        { text: "Dark mode", link: "/usage/darkmode" },
      ],
    }, {
      text: "Components",
      items: [{
        text: "Inputs",
        items: [
          { text: "Button", link: "/components/inputs/Button/" },
          { text: "IconButton", link: "/components/inputs/IconButton/" },
          { text: "TextButton", link: "/components/inputs/TextButton/" },
        ],
      }, {
        text: "Layout",
        items: [
          { text: "Group", link: "/components/layout/Group/" },
          { text: "Stack", link: "/components/layout/Stack/" },
        ],
      }],
    },
  ]},
});
