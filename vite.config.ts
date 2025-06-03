import { defineConfig } from "vite"
import preact from "@preact/preset-vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    preact(),
  ],
  optimizeDeps: {
    exclude: ['node_modules/.cache/storybook']
  },
})
