const EventEmitter = require("events");
const emitter = new EventEmitter();

function log(message) {
  console.log("User is ", message);

  emitter.emit("My event", prop);
}
module.exports = log;
