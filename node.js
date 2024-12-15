const EventEmitter = require("events");
const logger = require("./logger");
console.log(logger);
logger();
const emitter = new EventEmitter();
emitter.on("event name", (arg) => {
  console.log(arg);
});
emitter.emit("event name", { id: 1 });
