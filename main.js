"use strict";
//ptime number
// first step :get number from 2 to n;
// second step: check each number if it is prime

function checkUpTo_n(n) {
  for (i = 2; i < n; i++) {
    if (!IsPrime(i)) {
      console.log("N is not prime");
    }
    console.log("is prime ", i);
  }
}

function IsPrime(number) {
  for (i = 2; i < number; i++) {
    if (number % i != 0) {
      console.log(i, number, " is not prime");
      return false;
    } else return true;
  }
}
