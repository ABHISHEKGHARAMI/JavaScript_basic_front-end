// setting up the logger file
const logger = require('../../logger');

// creating map
let map1 = new Map([
    [1,10],
    [2,20],[3,56],
    [5,90]
]);


// executing the map for the js
console.log(`After the map : ${map1(2)}`);
logger.log('INFO',`After the map : ${map1(2)}`);