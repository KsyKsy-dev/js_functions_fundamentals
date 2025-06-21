let EventEmitter = require("events");
let emitter = new EventEmitter(1);
let url = "https://www.log.org";

emitter.emit("loggin", { id: 1, url: "https://www.dd.orc" });
let log = function (arg) {
  console.log(arg);
};
module.exports = log;

class Example {
  constructor(var1, var2) {
    this.var1 = var1;
    this.var2 = var2;
  }
  exMethod() {
    console.log(`print class's vars ${this.var1} and ${this.var2}`);
  }
}
const exampleInstance1 = new Example("str", "nmbr");
exampleInstance1.exMethod();

// 1 create class prod
// 2 create metod print cl prodact
// 3 create method calc taxes to print prduct price with  taxes

class Product {
  constructor(productType, price) {
    this.productType = productType;
    this.price = price;
  }

  printProductPropertyes() {
    console.log(`Product ${this.productType}`);
    console.log(`Price ${this.price}`);
  }
  calcProductTaxes(salesTax) {
    return this.price + this.price * salesTax;
  }
}
const salesTax = 0.05;
const prod1 = new Product("Sofa", 1000);
prod1.printProductPropertyes();

const total = prod1.calcProductTaxes(salesTax);
console.log(`Total price with taxes ${total}`);
