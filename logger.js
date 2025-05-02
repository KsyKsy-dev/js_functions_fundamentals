const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("Event", (arg) => {
  console.log("let's ", arg, " to be!");
});
emitter.emit("Event", "the action!!!");
