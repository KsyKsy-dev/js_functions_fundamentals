"use strict";
//ptime number
// first step :get number from 2 to n;
// second step: check each number if it is prime

function checkUpTo_n(n) {
  for (let i = 2; i <= n; i++) {
    if (IsPrime(i)) {
      console.log(i, "N is not prime");
    } else {
      console.log("is prime ", i);
    }
  }
}

function IsPrime(number) {
  for (let i = 2; i < number; i++) {
    if (number % i == 0) {
      console.log(i);
      return false;
    } else return true;
  }
}
checkUpTo_n(7);
