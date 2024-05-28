// number
const logger = require('../../logger');
let x=3;
let y=4;

var data = Math.pow(x,y);

console.log(`The power of the ${x} and ${y} is : ${data}`);

logger.log('INFO',`The power of the ${x} and ${y} is : ${data}`)
