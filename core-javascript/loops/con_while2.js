// importing the logger file
const logger = require('../logger');

// doing the while statement

let num1 = 0;

while (num1 <= 10){
    console.log(`The number is ${num1}`);
    logger.log('INFO',`The number is ${num1}`);
    num1 += 1;
}