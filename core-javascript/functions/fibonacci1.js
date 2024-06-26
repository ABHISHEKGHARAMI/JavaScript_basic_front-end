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

function fibo_series(n){
   let series = [];
   if(n == 0){
      series.push(0)
   }
   if(n==1){
      series.push(1);
   }
   
   for(let i =2;i<=n;i++){
      series.push(fibo_series(n-1)+fibo_series(n-2));
   }
   return series;
}

console.log(`the fibonacci series is`);
logger.log(`the fibonacci series is :`);

let a = fibonacci(12);

console.log(`${a}`);
logger.log(`${a}`);

let b = fibo_series(12);
console.log(`The fibo series will be : ${b}`);
logger.log('INFO',`The fibo series will be : ${b}`);

