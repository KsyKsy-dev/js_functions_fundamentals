let fs = require("fs");
let files = fs.readdirSync("./");
console.log(files);
fs.readdir("./", function (err, files) {
  if (err) {
    console.log("ERR!");
  } else {
    console.log("FILES: ", files);
  }
});
