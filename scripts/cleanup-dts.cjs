const fs = require("fs");
const path = require("path");

const distDir = path.resolve(__dirname, "../dist");
fs.readdirSync(distDir, { withFileTypes: true })
  .filter((dirent) => dirent.isDirectory())
  .forEach((dirent) => {
    const dirPath = path.join(distDir, dirent.name);
    // page.d.ts → index.d.ts로 복사
    if (fs.existsSync(path.join(dirPath, "page.d.ts"))) {
      fs.copyFileSync(path.join(dirPath, "page.d.ts"), path.join(dirPath, "index.d.ts"));
    }
    // index.d.ts 아닌 .d.ts 모두 삭제
    fs.readdirSync(dirPath)
      .filter((f) => f.endsWith(".d.ts") && f !== "index.d.ts")
      .forEach((f) => {
        fs.unlinkSync(path.join(dirPath, f));
      });
  });
