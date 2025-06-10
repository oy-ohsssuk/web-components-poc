import { defineConfig } from "vite";
import { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "index.ts"),
      name: "ReviewComponent",
      fileName: "review-component",
      formats: ["iife", "es", "cjs"],
    },
  },
});
