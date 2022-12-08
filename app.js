// ********** First Example **********
// function name (name, age) {
// console.log("My name is " + name);
// console.log(`Age = ${age}`);
// }
//name('Fahad' , 34);


// ********** Module **********
// console.log(module);

// ********** Loading a Module **********
// const logger = require("./logger");

// logger("Fahad");

// ********** Path Module **********

// const path = require('path');

// const obj = path.parse(__filename);
// const obj2 = path.parse(__dirname);

// console.log(obj);
// console.log(obj2);

// ********** OS Module **********

// const os = require('os');

// let freeMemory = os.freemem();
// let totalMemory = os.totalmem();

// console.log('Total Memory: ' + totalMemory);
// console.log(`Free Memory: ${freeMemory}`);


// ********** FileSystem Module **********

const fs = require('fs');

const files = fs.readdirSync('./');

console.log(files);