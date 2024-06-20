// setting up the logger

const logger = require('../../logger');

console.log(`Boolean 10 is : ${Boolean(10)}`);
logger.log('INFO',`Boolean 10 is : ${Boolean(10)}`);


console.log(`Boolean of String is : ${Boolean('GeeksforGeeks')}`);
logger.log('INFO',`Boolean of String is : ${Boolean('GeeksforGeeks')}`);

console.log(`Boolean of Decimal of : ${Boolean(2.74)}`);
logger.log('INFO',`Boolean of Decimal of : ${Boolean(2.74)}`);


console.log(`Boolean of 1 < 2 : ${Boolean(1<2)}`);
logger.log('INFO',`Boolean of the 1 < 2 : ${Boolean(1<2)}`);