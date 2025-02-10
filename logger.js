const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("ev", (eventArg) => {
  console.log("Pass it to him the ", eventArg);
});

emitter.emit("ev", { data: "Message" });
