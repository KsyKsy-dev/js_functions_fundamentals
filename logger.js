const fileS = require("fs");
const readDir = fileS.readdirSync("./");
console.log(readDir);
