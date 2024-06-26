// setting up the logger file
const logger = require('../../logger');

// objects for the js

let obj1 = {
    int_prop : 5,
    set_prop : "Geeksforgeeks",
    obj_prop : new Date(),
    inner_prop : {
        int_prop : 6,
    },
    func_prop : function(){
        console.log('Welcome to geeksforgeeks');
        logger.log('INFO','Welcome to geeksforgeeks');
    }
}

// testing our property

console.log(`Integer  property : ${obj1.int_prop}`);
logger.log('INFO',`Integer property : ${obj1.int_prop}`);

console.log(`String property : ${obj1.set_prop}`);
logger.log('INFO',`String Property : ${obj1.set_prop}`);

console.log(`Object property : ${obj1.obj_prop}`);
logger.log('INFO',`Object Property : ${obj1.obj_prop}`);

console.log(`Inner property : ${obj1.inner_prop.int_prop}`);
logger.log('INFO',`Inner property : ${obj1.inner_prop.int_prop}`);

obj1.func_prop();