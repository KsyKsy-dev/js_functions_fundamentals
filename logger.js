const EventEmitter = require("events");
const emitter = new EventEmitter();

function log() {
  console.log("Message is logged!");

  emitter.emit("My event", prop);
}
module.exports.log;
