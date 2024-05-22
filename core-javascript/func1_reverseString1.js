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