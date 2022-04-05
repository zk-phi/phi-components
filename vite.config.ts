import Path from "path";
import { defineConfig } from "vite";

export default defineConfig({
  root: "src",
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from "preact"`,
  },
  build: {
    outDir: Path.resolve(__dirname, "dist"),
    lib: {
      entry: Path.resolve(__dirname, "src/main.ts"),
      name: "PhiComponents",
      fileName: (format) => `phi-components.${format}.js`,
    },
  },
});
