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
  code() {
    console.log(`${this.name} is coding for ${this.experience} of yesrs`);
  }
}
let dev1 = new Dev("Ann", 46, 6);
const dev2 = new Dev("Jane", 33, 12);
dev2.code();
const devs = [new Dev("Jacky", 45, 10), new Dev("Lucia", 43, 18)];

function printDevs(programmers) {
  for (let programmer of programmers) {
    programmer.code();
  }
}
printDevs(devs);
