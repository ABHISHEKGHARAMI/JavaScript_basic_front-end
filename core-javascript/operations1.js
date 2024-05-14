// setup the logger
const logger = require('../logger');


// here we go for the different operations

// 1: Urinary Operation

let x = 2;

x = -x;

console.log(`After Urinary operation the value will be : ${x}`);
logger.log('INFO',`After Urinary operation the value will be : ${x}`);


// 2: Binary Operation

let y = 3;

let val = y - x;

console.log(`the value will be : ${val}`);
logger.log('INFO',`the value will be : ${val}`);

// different types of the math operations

// exponentials for the math

let val2 = y**3;

console.log(`the power of the ${y} of 3 is : ${val2}`);
logger.log('INFO',`the power of the ${y} of 3 is : ${val2}`);


// string concatenations
let str1 = "hello";
let str2 = "there";

let str3 = str1 + str2;

console.log(`After concatenation the final string will be : ${str3}`);
logger.log('INFO',`After concatenation the final string will be : ${str3}`);