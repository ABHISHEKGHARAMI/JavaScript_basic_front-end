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