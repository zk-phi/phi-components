import Path from "path";
import { defineConfig } from "vite";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig(({ mode }) => ({
  root: "src",
  esbuild: {
    jsxFactory: "h",
    jsxFragment: "Fragment",
    jsxInject: `import { h, Fragment } from "atomico"`,
  },
  build: {
    outDir: Path.resolve("dist"),
    lib: {
      entry: Path.resolve(__dirname, "src_atomico/main.ts"),
      name: "PhiComponents",
      fileName: (format) => `phi-components.${format}.js`,
    },
    sourcemap: true,
    rollupOptions: {
      plugins: [
        mode === "analyze" && visualizer({
          open: true,
          filename: "dist/stats.html",
          gzipSize: true,
          brotliSize: true,
        }),
      ],
    },
  },
}));
