import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path, { resolve } from "path";

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReviewComponent",
      fileName: (format) => (format === "es" ? "index.es.js" : "index.iife.js"),
      formats: ["es", "iife"],
    },
    outDir: "dist",
    emptyOutDir: true,
  },
  plugins: [
    dts({
      entryRoot: "src",
      outDir: "dist",
      insertTypesEntry: true,
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
