const EventEmitter = require("events");

class Logger extends EventEmitter {
  log(message) {
    console.log(message);
    //rise an event
    this.emit("evName", "arg");
  }
}

module.exports = Logger;
