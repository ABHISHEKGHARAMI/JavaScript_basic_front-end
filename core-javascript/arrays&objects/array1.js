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

//console.log(`After size increase the array will be : ${arr1}`);
//logger.log('INFO',`After size increase the array will be : ${arr1}`);


// iterating through the array
console.log(`iterating the array :`);
for(let i =0 ;i < arr1.length;i++){
    console.log(`The ${i}th element is : ${arr1[i]}`);
    logger.log('INFO',`The ${i}th element is : ${arr1[i]}`);
}

// using the forEach

arr1.forEach(function(x){
    console.log(x);
});

// have to concat other array
let arr2 = new Array();

arr2.push('python');
arr2.push('django');
arr2.push('flask');
arr2.push('docker');
arr2.push('aws');
arr2.push('ngnix');
arr2.push('mqtt');

// checking the new array
console.log(`the new array will be : ${arr2}`);
logger.log('INFO',`the new array will be : ${arr2}`);


// now concat

arr1.concat(arr2);

console.log(`After concating with  the first array with the second one is : ${arr1}`);
logger.log('INFO',`After concating with  the first array with the second one is : ${arr1}`);

console.log(`the new length will be : ${arr1.length}`);
logger.log('INFO',`the new length will be : ${arr1.length}`);