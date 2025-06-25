import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import path from "path";

const entry = process.env.ENTRY || "src/index.ts";
const outDir = process.env.OUTDIR || "dist";

const isUtils = outDir.endsWith("/utils") || outDir === "dist/utils";

export default defineConfig({
  build: {
    lib: {
      entry,
      name: "Component",
      formats: ["es", "iife"],
      fileName: (format) => `index.${format}.js`,
    },
    outDir,
    emptyOutDir: false,
    sourcemap: true,
  },
  plugins: [
    dts({
      entryRoot: path.dirname(entry),
      outDir,
      insertTypesEntry: true,
      rollupTypes: false,
    }),
  ],
  publicDir: isUtils ? false : "public",
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
