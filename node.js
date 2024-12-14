const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("event", function () {
  console.log("Message is logged!");
});
emitter.emit("event");
