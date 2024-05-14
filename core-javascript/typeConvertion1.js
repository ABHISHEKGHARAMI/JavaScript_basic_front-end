// set up the logger
const logger = require('../logger');


// string convertion
let val1 = true;
console.log('before convertion :');
logger.log("before convertion :")
console.log(`the type of the ${val1} is : ${typeof(val1)}`);
logger.log('INFO',`the type of the ${val1} is : ${typeof(val1)}`);

// now convert the val1 to string
val1 = String(val1)
console.log("After  convertion :");
logger.log('INFO',"After convertion :")
console.log(`the type of the ${val1} is : ${typeof(val1)}`);
logger.log('INFO',`the type of the ${val1} is : ${typeof(val1)}`);


// number convertion

let numStr1 = "123";

console.log(`the ${numStr1} is : ${typeof(numStr1)}`);
logger.log('INFO',`the ${numStr1} is : ${typeof(numStr1)}`);


// after convertion

numStr1 = Number(numStr1);

console.log(`the ${numStr1} is ${typeof(numStr1)}`);
logger.log('INFO',`After convertion the type of ${numStr1} is : ${typeof(numStr1)}`);