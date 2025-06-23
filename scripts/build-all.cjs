const { execSync } = require("child_process");
const fs = require("fs");
const path = require("path");

const distDir = path.resolve(__dirname, "../dist");
if (fs.existsSync(distDir)) {
  fs.rmSync(distDir, { recursive: true, force: true });
  console.log("dist 디렉토리 전체 삭제 완료");
}

const appDir = path.resolve(__dirname, "../src/app");
fs.readdirSync(appDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .forEach((dirent) => {
    const entry = path.join(appDir, dirent.name, "index.ts");
    if (fs.existsSync(entry)) {
      console.log(`Building ${dirent.name}...`);
      execSync(`ENTRY=${entry} OUTDIR=dist/${dirent.name} yarn build`, { stdio: "inherit" });
    }
  });
