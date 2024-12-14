const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("event", function (eventArg) {
  console.log("Message is logged!", eventArg);
});

emitter.emit("event", { id: 1, name: "Jony" });
