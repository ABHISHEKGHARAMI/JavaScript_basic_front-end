// import logger

const logger = require('../logger');

/*  

 here goes the code for the logical operators

 1. And   2. Or 3. Not

*/

// And operator

console.log(`0 and 0 : ${0&&0}`);
logger.log("INFO",`0 and 0 : ${0&&0}`);
console.log(`1 and 0 : ${1&&0}`);
logger.log("INFO",`1 and 0 : ${1&&0}`);
console.log(`0 and 1 : ${0&&1}`);
logger.log("INFO",`0 and 1 : ${0&&1}`);
console.log(`1 and 1 : ${1&&1}`);
logger.log("INFO",`1 and 1 : ${1&&1}`);


// logical or operator
console.log(`0 or 0 : ${0||0}`);
logger.log('INFO',`0 or 0 : ${0||0}`);
console.log(`0 or 1 : ${0||1}`);
logger.log('INFO',`0 or 1 : ${0||1}`);
console.log(`1 or 0 : ${1||0}`);
logger.log('INFO',`1 or 0 : ${1||0}`);
console.log(`1 or 1 : ${1||1}`);
logger.log('INFO',`1 or 1 : ${1||1}`);