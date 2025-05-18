let fs = require("fs");
let files = fs.readdirSync("fs");

fs.readdir("./", function (err, files) {
  if (err) {
    console.log("err ", err);
  } else {
    console.log("Files:", files);
  }
});
