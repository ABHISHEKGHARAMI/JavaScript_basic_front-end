// all string operation for the string object
const logger = require('../../logger');


// go for the string ops
let str1 = new String("Hello there am i using the geeks for geeks.");

// using the string literal
let str = "template literal string";
let newStr = `String created using the ${str}`;


console.log(newStr);
logger.log('INFO',newStr);

// length of the string
let strlen = str.length;

console.log(`the length of the string is : ${strlen}`);
logger.log('INFO',`the length of the string is : ${strlen}`);