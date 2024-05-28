// need the basic array
const logger = require('../../logger');

let arr1 = new Array();

arr1.push('html');
arr1.push('css');
arr1.push('bootstrap');
arr1.push('js');
arr1.push('react.js');

console.log(`the array is :${arr1}`);
logger.log('INFO',`the array is :${arr1}`);

let len1 = arr1.length;

console.log(`the length of the array is : ${len1}`);
logger.log('INFO',`the length of the array is : ${len1}`);


// print the certain pos of the array
let pos = arr1.at(4);

console.log(`the fourth position of the array is : ${pos}`);
logger.log('INFO',`the fourth position of the array is : ${pos}`);


// increasing the array length
arr1.length = 7;

console.log(`After size increase the array will be : ${arr1}`);
logger.log('INFO',`After size increase the array will be : ${arr1}`);