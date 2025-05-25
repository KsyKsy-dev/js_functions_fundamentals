let EventEmitter = require("events");

let emitter = new EventEmitter();
// Register event
emitter.on("Event name", " Event is rised");
// Rise an event
emitter.emit("Event name");
