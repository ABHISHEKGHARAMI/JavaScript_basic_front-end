// print the fibonacci of a given number
const logger = require('../logger');


function fibonacci(n,memo = {}){
   if(n in memo){
      return memo[n];
   }
   if (n==0){
      return 0;
   }
   if(n==1){
      return 1;
   }
   else{
      memo[n] =  fibonacci(n-1,memo) + fibonacci(n-2,memo);
      return memo[n];
   }
}

console.log(`the fibonacci series is`);
logger.log(`the fibonacci series is :`);

let a = fibonacci(12);

console.log(`${a}`);
logger.log(`${a}`);

