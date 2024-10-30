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

let obj = {};
console.log(obj.n === undefined);
