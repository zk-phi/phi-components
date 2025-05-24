import { defineConfig } from "vite"
import preact from "@preact/preset-vite"
import { analyzer } from "vite-bundle-analyzer";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact(),
    analyzer(),
  ],
  build: {
    outDir: "dist",
    lib: {
      entry: "src/index.ts",
      name: "phi-components",
      fileName: "index",
      formats: ["es", "umd"], // default の設定と同じ
    },
    rollupOptions: {
      external: ["preact", "preact/jsx-runtime"],
    },
  },
})
