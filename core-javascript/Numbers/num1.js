// logger
const logger = require('../../logger');

let a = 123e6;
let b = 123e-6;


console.log(`The first number is : ${a}`);
logger.log('INFO',`the first number is : ${a}`);


console.log(`The second number is : ${b}`);
logger.log('INFO',`The second number is : ${b}`);
