// power of a number

const logger = require('../logger');

function power(x,n){
    if(n==0){
        return 1;
    }
    else{
        return x * power(x,n-1);
    }
}


let b = power(2,6);

console.log(`The power of 2 for 8 is : ${b}`);
logger.log('INFO',`The power of 2 for 8 is : ${b}`);