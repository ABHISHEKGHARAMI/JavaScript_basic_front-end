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
logger.log('INFO',`the value will be : ${val}`)