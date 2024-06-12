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

// string concatenation
let str2 = new String("My name is :");
let str3 = new String("Abhishek Gharami");

let str4 = str2.concat(str3);

console.log(`After concatenation the string is : ${str4}`);
logger.log('INFO',`After concatenation the string is : ${str4}`);

//checking the datatype and then get the substring

console.log(`The type of the concatinated is : ${typeof(str4)}`);
logger.log('INFO',`the type of the concatinated is : ${typeof(str4)}`);

//substring
let str5 = str4.substring(15,20);
console.log(`the substring is : ${str5}`);
logger.log('INFO',`the substring is : ${str5}`);