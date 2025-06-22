// 1 create class prod
// 2 create metod print cl prodact
// 3 create method calc taxes to print prduct price with  taxes

// class Product {
//   constructor(productType, price) {
//     this.productType = productType;
//     this.price = price;
//   }

//   printProductPropertyes() {
//     console.log(`Product ${this.productType}`);
//     console.log(`Price ${this.price}`);
//   }
//   calcProductTaxes(salesTax) {
//     return this.price + this.price * salesTax;
//   }
// }
// const salesTax = 0.05;
// const prod1 = new Product("Sofa", 1000);
// prod1.printProductPropertyes();

// const total = prod1.calcProductTaxes(salesTax);
// console.log(`Total price with taxes ${total}`);
const EventEmitter = require("events");
const emitter = new EventEmitter();
emitter.on("Eventname", (prop) => {
  console.log("Async event statys is: ", prop);
});
emitter.emit("Eventname", "Go!");
