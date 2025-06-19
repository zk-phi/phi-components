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
        { text: "Inputs and forms", link: "/usage/inputs-and-forms" },
        { text: "Dark mode", link: "/usage/darkmode" },
      ],
    }, {
      text: "Principles",
      items: [
        { text: "サービス人格", link: "/principles/characteristics" },
      ],
    }, {
      text: "Components",
      items: [{
        text: "Buttons",
        items: [
          { text: "Button", link: "/components/buttons/Button/" },
          { text: "IconButton", link: "/components/buttons/IconButton/" },
          { text: "TextButton", link: "/components/buttons/TextButton/" },
        ],
      }, {
        text: "Inputs",
        items: [
          { text: "TextInput", link: "/components/inputs/TextInput/" },
          { text: "NumberInput", link: "/components/inputs/NumberInput/" },
          { text: "Checkbox", link: "/components/inputs/Checkbox/" },
          { text: "Option", link: "/components/inputs/Option/" },
          { text: "Radio", link: "/components/inputs/Radio/" },
        ],
      }, {
        text: "Layout",
        items: [
          { text: "Group", link: "/components/layout/Group/" },
          { text: "Stack", link: "/components/layout/Stack/" },
        ],
      }, {
        text: "Others",
        items: [
          { text: "ColorSwatch", link: "/components/others/ColorSwatch/" },
          { text: "Icon", link: "/components/others/Icon/" },
        ],
      }],
    },
  ]},
});
