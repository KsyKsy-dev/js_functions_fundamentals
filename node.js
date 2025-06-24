const EventEmitter = require("events");

const Logger = require("./logger");
const logger = new Logger();
logger.on("evName", (e) => {
  console.log("My event ", e);
});
logger.log("message");
