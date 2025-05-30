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
      entry: "src/preact.ts",
      name: "phi-components",
      fileName: "preact",
      cssFileName: "style"
      formats: ["es", "umd"],
    },
    rollupOptions: {
      external: ["preact", "preact/jsx-runtime"],
    },
  },
})
