// setting up the logger
const logger = require('../../logger');

// new explict type of function

function toGreet(){
    console.log('Hello there.');
    logger.log('INFO','Hello There.');
}

let myObj = {
    greet : toGreet,
    byWhom : function(){
        console.log(`By geeksforgeeks`);
        logger.log('INFO','By geeksforgeeks');
    }
}