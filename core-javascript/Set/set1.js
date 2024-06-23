// logger file for the setting 
const logger = require('../../logger');

let set1 = new Set(['sumit','sumit','allo']);

console.log(set1);
logger.log('INFO',set1);


let set2 = new Set([10,10,10,20,20,30,30,40,40]);

console.log(set2);
logger.log('INFO',set2);


// adding the new values for the set
set1.add('james');
set1.add('Charles');
set1.add('longing');

set2.add(50);
set2.add(50);
set1.add(40);

//updating the set for different value
console.log(set1);
logger.log('INFO',set1);

console.log(set2);
logger.log('INFO',set2);

let c2;
c2 = set2.entries();

console.log(c2);
logger.log('INFO',c2);