let EventEmitter = require("events");
let emitter = new EventEmitter(1);
let url = "https://www.log.org";

emitter.emit("loggin", { id: 1, url: "https://www.dd.orc" });
let log = function (arg) {
  console.log(arg);
};
module.exports = log;
