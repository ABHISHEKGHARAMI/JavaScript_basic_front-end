// setting up the logger

const logger = require('../logger');


let name = prompt("enter the name :"," ");

console.log(`The name of name is : ${name}`);
logger.log('INFO',`the name of the gentleman is : ${name}`);