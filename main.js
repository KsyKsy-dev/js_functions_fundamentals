"use strict";
//ptime number
// first step :get number from 2 to n;
// second step: check each number if it is prime

// function checkUpTo_n(n) {
//   for (let i = 2; i <= n; i++) {
//     if (IsPrime(i)) {
//       console.log(i, "N is not prime");
//     } else {
//       console.log("is prime ", i);
//     }
//   }
// }

// function IsPrime(number) {
//   for (let i = 2; i < number; i++) {
//     if (number % i == 0) {
//       console.log(i);
//       return false;
//     } else return true;
//   }
// }
// checkUpTo_n(7);

// check age options
// function checkAge(age) {
//   return age > 18 || confirm(" did you get permition of your parrents?");
// }
// checkAge(17);

// min number
// function min(a, b) {
//   return a > b ? b : a;
// }
// console.log(min(1, 2));

// pow(a,b)

// function pow(a, b) {
//   if (a <= 1 || b <= 1) return false;
//   let c = a;
//   for (let i = 0; i < b; i++) {
//     a *= c;
//     console.log(a);
//   }
//   console.log(a);
// }
// pow(2, 2);

// let fExpresion = function (n) {
//   console.log("test");
//   return n;
// };
// let f1 = fExpresion;
// let f2 = fExpresion(2);
// f1(2);
// console.log(f2);
//  arrow functions
//
// computed properties

// let prop = prompt("add values name", "ertie");
// let obj = {
//   ["prop" + prop]: 6,
// };
// console.log(obj.propertie);

// variaables as a propety names

// function askName(name, age) {
//   return {
//     name,
//     age,
//   };
// }
// let obj = askName("j", 20);
// console.log(obj.name);

// let obj = {};
// console.log(obj.v === undefined);

// loop for in

// let obj = {
//   one: 1,
//   2: 2,
// };
// for (let key in obj) {
//   console.log(key);
// }

// integer properies
// let telCode = {
//   "+49": "German",
//   "+44": "Swizz",
//   "+1": "USA",
// };
// for (let code in telCode) {
//   console.log(+code);
// }

// check obj emptyes

// let obj = {
//   0: 0,
// };
// function check(obj) {
//   for (let key in obj) {
//     return false;
//   }
//   return true;
// }
// console.log(check());

// sum obj's properyes

//
// obj equality
// let a = {};
// let b = a;
// console.log(a == b, a === b);

// let d = {};
// let e = {};
// console.log(e == d, d === e);

// obj cloning

// // Object.assign mrthod
// let obj = {
//   a: 2,
// };
// let obj1 = { c: 2 };
// let obj2 = { d: 1 };

// Object.assign(obj, obj1, obj2);
// console.log(obj);

// let clone = Object.assign({}, obj);
// console.log(clone);

// structoring clone for creating tottaly separated objects

// let obj = {
//   a: 0,
// };
// let obj1 = obj;
// obj1.a = 2;
// console.log(obj, obj1);
// let obj2 = structuredClone(obj);
// obj2.a = 3;
// console.log(obj, obj2);

//interlinked objects
function marry(man, woman) {
  woman.husbent = man;
  man.wife = woman;
  return {
    father: man,
    mother: woman,
  };
}

let family = marry({ name: "John" }, { name: "Ann" });
console.log(family);
