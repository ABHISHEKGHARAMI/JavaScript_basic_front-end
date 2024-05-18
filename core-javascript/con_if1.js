// importing logger
const logger = require('../logger');

// checking with the if condition
let val1, val2;

val1 = 2;
val2 = 3;

// if condition

if(val1>val2){
    console.log(`${val1} is greater than ${val2}`);
    logger.log('INFO',`${val1} is greater than ${val2}`);
}else{
    console.log(`${val2} is greater than ${val1}`);
    logger.log('INFO',`${val2} is greater than ${val1}`);
}

