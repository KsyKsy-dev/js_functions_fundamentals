let EventEmitter = require("events");

let emitter = new EventEmitter();
// Register event
emitter.on("Event name", function (arg) {
  console.log(" Event is rised: ", arg);
});
// Rise an event
emitter.emit("Event name", { url: "http://www.sist.orc", permission: 1 });
