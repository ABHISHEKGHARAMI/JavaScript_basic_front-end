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

let len1 = arr1.length();

console.log(`the length of the array is : ${len1}`);
logger.log('INFO',`the length of the array is : ${len1}`);