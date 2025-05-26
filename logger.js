let EventEmitter = require("events");
let emitter = new EventEmitter();
emitter.on("loggin", (arg) => {
  console.log(" Loggin data: ", arg);
});
let log = require("./node");
log("message");
