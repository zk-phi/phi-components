import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import { analyzer } from "vite-bundle-analyzer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    analyzer({
      analyzerMode: "static",
      fileName: "stats.custom-elements.html",
    }),
  ],
  build: {
    outDir: "dist",
    emptyOutDir: false,
    sourcemap: true,
    lib: {
      entry: "src/custom-elements.ts",
      name: "registerPhiComponents",
      fileName: "custom-elements",
      formats: ["es", "umd"],
    },
  },
})
