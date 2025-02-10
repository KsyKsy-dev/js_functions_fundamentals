const EventEmitter = require("events");
console.log(typeof EventEmitter);
const emmiter = new EventEmitter();
emmiter.on("myEvent", function (eventArg) {
  console.log("This event is the fire ", eventArg);
});
emmiter.emit("myEvent", { id: "user", url: "http//www..." });
