"use strict";
//ptime number
function checkIfNumbrerIsPtrime(n) {
  // first step: get number second step: loop it to the number from 2 to n to check if it's prime
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      console.log(i, n, " is prime");
    } else {
      console.log(i, n, " isn't prime");
    }
  }
}
checkIfNumbrerIsPtrime(4);
