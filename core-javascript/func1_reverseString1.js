// setting up the logger file
const logger = require('../logger');

// q4 : reverse a  string

function reverse(str1){
    str2 = "";
    for(let i = str1.length - 1;i>=0;i--){
        str2+=str1[i];
    }

    return str2;
}

let str1 = 'hello there!';

console.log(`The reverse of the string ${str1} is ${reverse(str1)}`);
logger.log('INFO',`The reverse of the string ${str1} is ${reverse(str1)}`);


//q4: Create a program to get sum of all digits of a number.
function sum(num){
    let rem = 0;
    while(num!=0){
        rem = rem * 10 + (num%10);
        num = parseInt(num / 10);
    }
    return rem;
}

let num4 = 1456;
console.log(`The sum of the number ${num4} is : ${sum(num4)}`);

logger.log('INFO',`The sum of the number ${num4} is : ${sum(num4)}`);