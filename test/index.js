const it = require("tape");
const fs = require("fs");
const aria2c = require("..");

it("should find aria2c", t => {
  const stats = fs.statSync(aria2c.path);
  t.ok(stats.isFile(aria2c.path));
  t.end();
});
