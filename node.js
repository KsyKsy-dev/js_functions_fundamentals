const EventEmitter = require("events");
const emitter = new EventEmitter();

emitter.on("evName", (e) => {
  console.log("My event ", e);
});
const log = require("./logger");
log("message");
