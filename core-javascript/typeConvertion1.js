// set up the logger
const logger = require('../logger');


// string convertion
let val1 = true;
console.log(`the type of the ${val1} is : ${typeof(val1)}`);
logger.log('INFO',`the type of the ${val1} is : ${typeof(val1)}`);

