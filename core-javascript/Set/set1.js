// logger file for the setting 
const logger = require('../../logger');

let set1 = new Set(['sumit','sumit','allo']);

console.log(set1);
logger.log('INFO',set1);


let set2 = new Set([10,10,10,20,20,30,30,40,40]);

console.log(set2);
logger.log('INFO',set2);