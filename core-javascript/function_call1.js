// import logger
const logger = require('../logger');

// different function calling
function isPrime(num1){
    let flag = 0;
    for(let i = 2;i<Math.sqrt(num1);i++){
        if(num1%i==0){
            flag = 1;
            break;
        }
    }
    if(flag == 0){
        return 0;
    }
    else{
        return 1;
    }
}

function sumPrime(num1){
    let sum = 0;

    for(let i=0;i<parseInt((num1)/2);i++){
        if(isPrime(i)==0 && isPrime(num1-i)==0){
            sum += i + (num-i);
        }
    }

    return sum;
}

//exe

let n = 15;

console.log(`the sum of first ${n} prime number is :${sumPrime(n)}`);
logger.log('INFO',`the sum of first ${n} prime number is :${sumPrime(n)}`);