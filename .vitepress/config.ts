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
      text: "Components",
      items: [
        { text: "Button", link: "/components/Button/" },
        { text: "Input", link: "/components/Input/" },
        { text: "Icon", link: "/components/Icon/" },
      ],
    }
  ]},
});
