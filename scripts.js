const defaultAction = "clean";

const fs = require("fs-extra");

var args = process.argv.slice(2);
switch (args.length == 0 ? defaultAction : args.shift()) {
    case "clean":
        fs.removeSync("build");
        break;
    case "webpack":
        fs.copySync("electron/package.json", "build/package.json");
        fs.copySync("electron/main.js", "build/main.js");
        break;
    default:
        break;
}
