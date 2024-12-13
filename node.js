const EventEmitter = require("events"); // class
const emitter = new EventEmitter(); // obj
console.log(emitter);

//register listener
emitter.on("messageLogger", function () {
  console.log("Message is logged");
});
//Raise an event tslate emit: make a noise produse a signal
emitter.emit("messageLogger");
