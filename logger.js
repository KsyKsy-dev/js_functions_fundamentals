const EventEmitter = require("events");
const emitter = new EventEmitter();
function log(message) {
  console.log(message);
  //rise an event
  emitter.emit("evName", "arg");
}
module.exports = log;
