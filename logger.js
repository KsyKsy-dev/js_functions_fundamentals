const EventEmitter = require("events");
const emmiter = new EventEmitter();
emmiter.on("myEvent", function () {
  console.log("This event is the fire");
});
emmiter.emit("myEvent");
