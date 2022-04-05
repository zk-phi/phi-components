import Path from "path";
import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "ja-JP",
  title: "phi-components",
  outDir: Path.resolve("dist"),
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
    sidebar: [
      { text: "Installation", link: "/installation" },
      {
        text: "Components",
        children: [
          { text: "Hello", link: "/components/Hello/" },
        ],
      }
    ],
  },
});
