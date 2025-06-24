const EventEmitter = require("events");
const emitter = new EventEmitter();

function log(message) {
  console.log("User is ", message);

  emitter.emit("My event", prop);
}
module.exports = log;

class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  describe() {
    console.log(`Im ${this.name} and I am ${this.age} old`);
  }
}
let person1 = new Person("Lia", 45);
console.log(person1);

class Dev extends Person {
  constructor(name, age, experience) {
    super(name, age);
    // castomprop
    this.experience = experience;
  }
}
let dev1 = new Dev("Ann", 46, 6);
console.log(dev1);
dev1.describe();
