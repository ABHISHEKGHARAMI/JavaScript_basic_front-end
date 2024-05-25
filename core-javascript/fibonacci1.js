// print the fibonacci of a given number
const logger = require('../logger');


function fibonacci(n){
 let a = 0;
 let b = 1;
 if (n == 0 || n == 1){
    return a;
 }
 else{
    return fibonacci(n-1) + fibonacci(n-2)
 }
}

let n = 12;

console.log(`the fibonacci series is`);
logger.log(`the fibonacci series is :`);

let a = fibonacci(n);

console.log(`${a}`);
logger.log(`${a}`);

