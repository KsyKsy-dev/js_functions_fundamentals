const os = require("os");

const totalMemory = os.totalmem;
const freeMem = os.freemem;

console.log(`Total mem is: ${totalMemory}`);
console.log(`Free mem is : ${freeMem}`);
