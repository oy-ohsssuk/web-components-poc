const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const distDir = path.resolve(__dirname, "../dist");
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
}

const appDir = path.resolve(__dirname, "../src/app");
fs.readdirSync(appDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .forEach((dirent) => {
    const entry = path.join(appDir, dirent.name, "index.ts");
    if (fs.existsSync(entry)) {
      execSync(`ENTRY=${entry} OUTDIR=dist/${dirent.name} vite build`, { stdio: "inherit" });
    }
  });

const srcPublic = path.resolve(__dirname, "../public");
const distPublic = path.resolve(__dirname, "../dist/public");
if (fs.existsSync(srcPublic)) {
  fs.cpSync(srcPublic, distPublic, { recursive: true });
}
