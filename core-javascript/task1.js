// setting up the logger

let logger = require('../logger');

let admin , name;

name = 'John';

admin = name;

console.log(admin);
logger.log('INFO',admin);