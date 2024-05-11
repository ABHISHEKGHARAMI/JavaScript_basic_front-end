/* 

There are 8 different type of datatypes are present in the javascript

1. Number
2. BigInt
3. String
4. Boolean
5. Null value
6. Undefined value
7. symbol
8. object

Here we go for one by one .


 */

// setting up the logger
let logger = require('../logger');
// first is number

let n = 123;

// change the value of the n like
n = 12.36;

console.log(`the number value is : ${n} and the type of the number is : ${typeof(n)}`);
logger.log('INFO',`the number value is : ${n} and the type of the number is : ${typeof(n)}`)


// adding the infinity for repo .

let a ,b;

a = 5, b = 0;

console.log(`the division of ${a} by the number of ${b} is : ${a/b}`);
logger.log('INFO',`the division of ${a} by the number of ${b} is : ${a/b}`)

// Infinity has two values one is positive and other is negative first example is
//positive  Infinity and now i will show you the negative Infinity


a = -5 , b = 0;

console.log(`the division of ${a} by the number of ${b} is : ${a/b}`);
logger.log('INFO',`the division of ${a} by the number of ${b} is : ${a/b}`)


// here we learn about another datatype Nan

let c = NaN

console.log(`the value of c is : ${c} and the type of the variable is : ${typeof(c)}`);
logger.log('INFO',`the value of c is : ${c} and the type of the variable is : ${typeof(c)}`)

// it will always return the Nan when it operates with another value

let sum = c + 56;

console.log(`the value of the sum of ${c} and 56 : ${sum}`);
logger.log(`the value of the sum of ${c} and 56 : ${sum}`);


// BigInt for the datatypes
let big1 = 1234567;
let big2 = 45678900;

console.log(`the value of ${big1} and ${big2} sum is : ${big1 + big2}`);
logger.log('INFO',`the value of ${big1} and ${big2} sum is : ${big1 + big2}`);



// String datatypes for the datatypes


let str1 = "hello there!!"
let str2 = "Amina";

let str3 = str1 + str2;

console.log(`the value of string is : ${str3}`);
logger.log(`the value of string is : ${str3}`);


// boolean in datatypes

let bool1 = true;
let bool2 = false;

console.log(`the var value is : ${bool1} and type of the var is : ${typeof(bool1)}`);
logger.log('INFO',`the var value is : ${bool1} and type of the var is : ${typeof(bool1)}`);


console.log(`the var value is : ${bool2} and type of the var is : ${typeof(bool2)}`);
logger.log('INFO',`the var value is : ${bool2} and type of the var is : ${typeof(bool2)}`);

