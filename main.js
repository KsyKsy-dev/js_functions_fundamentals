"use strct";
//ptime number

function checkIfIsPrime(n) {
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      console.log(" not ptime", i, n);
    } else {
      console.log("is prime", i, n);
    }
  }
}
checkIfIsPrime(7);
