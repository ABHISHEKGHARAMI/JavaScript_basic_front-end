// print the fibonacci of a given number
const logger = require('../logger');


function fibonacci(n){
   if (n==0){
      return 0;
   }
   if(n==1){
      return 1;
   }
   else{
      return fibonacci(n-1) + fibonacci(n-2);
   }
}

console.log(`the fibonacci series is`);
logger.log(`the fibonacci series is :`);

let a = fibonacci(12);

console.log(`${a}`);
logger.log(`${a}`);

