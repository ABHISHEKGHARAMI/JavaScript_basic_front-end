// arrow function for the js
const logger = require('../../logger');

let a = n => n*2;

console.log(`the value of the arrow function : ${a(2)}`);
logger.log('INFO',`the value of the arrow function : ${a(2)}`);