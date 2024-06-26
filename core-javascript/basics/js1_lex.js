/*

This is the first core javascript  for lexicographic order for the language .

Javascript has two types of datatypes

1. premitive : - Strings , Number etc
2. Objects :- Class , Objects


*/

const logger = require('../logger');

var s1 = "brown fox jump on the lazy dog.";

console.log(s1);
logger.log('INFO',s1);

console.log("the length of the string is :" + s1.length);
logger.log('INFO',"the length of the string is :" + s1.length);


let data = s1.charAt(0)

console.log(`the position of 0 is ${data}`);
logger.log('INFO',`the position of 0 is ${data}`)


// for substring
data = s1.substring(3,s1.length)

console.log(`the substring is : ${data}`);
logger.log('INFO',`the substring is : ${data}`)

data = s1.toUpperCase()

console.log(`After the upper case the string is : ${data}`);
logger.log('INFO',`After the upper case the string is : ${data} `)

// using the slice for the 

data = s1.slice(-3);

console.log(`After slicing the string will be : ${data}`);
logger.log('INFO',`After slicing the string will be : ${data}`)


// using the boolean value
if (true == 1){
    console.log(`This is true.`);
    logger.log('INFO',`this is true.`)
}else{
    console.log(`this is false.`);
    logger.log('INFO',`this is false.`);
}
