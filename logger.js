let EventEmitter = requires("events");

let emitter = new EventEmitter();
// Register event
emitter.on("Event name");
// Rise an event
emitter.emit("Event name");
