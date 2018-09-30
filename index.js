const os = require("os");
const path = require("path");

let platform = os.platform();
// patch for compatibilit with electron-builder, for smart built process.
if (platform === "darwin") {
  platform = "mac";
} else if (platform === "win32") {
  platform = "win";
}
// adding browser, for use case when module is bundled using browserify. and added to html using src.
if (
  platform !== "linux" &&
  platform !== "mac" &&
  platform !== "win" &&
  platform !== "browser"
) {
  console.error("Unsupported platform.", platform);
  process.exit(1);
}

const arch = os.arch();
if (platform === "mac" && arch !== "x64") {
  console.error("Unsupported architecture.");
  process.exit(1);
}

const aria2cPath = path.join(
  __dirname,
  "bin",
  platform,
  arch,
  platform === "win" ? "aria2c.exe" : "aria2c"
);

exports.path = aria2cPath;
