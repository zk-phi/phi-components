import { defineConfig } from "vitepress";

export default defineConfig({
  lang: "ja-JP",
  title: "phi-components",
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
      { text: "Introduction", link: "/" },
      {
        text: "Components",
        link: "/components/",
        children: [
          { text: "Hello", link: "/components/Hello/" },
        ],
      }
    ],
  },
});
