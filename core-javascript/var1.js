let logger = require('../logger');


let name = "Abhishek";
let age = 25;
let year = '6-7-1998';

console.log(`candidate name is ${name}, age is ${age} and date of birth is : ${year}`);
logger.log('INFO',`candidate name is ${name}, age is ${age} and date of birth is : ${year}`);


console.log(`type of ${name} is : ${typeof(name)}`);
logger.log(`type of ${name} is : ${typeof(name)}`)
console.log(`type of ${age} is : ${typeof(age)}`);
logger.log(`type of ${age} is : ${typeof(age)}`)
console.log(`type of ${year} is : ${typeof(year)}`);
logger.log(`type of ${year} is : ${typeof(year)}`)