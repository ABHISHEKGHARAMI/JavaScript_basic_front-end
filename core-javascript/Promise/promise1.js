// promise for the js

// first up the promise for the js

const logger = require('../../logger');

const promise = new Promise(function(resolve,reject){
    const x = "geeksforgeeks";
    const y = "geeksforgeeks";
    if(x===y){
        resolve();
    }else{
        reject();
    }
});

promise.then(function(){
    console.log(`Success of the greek.`);
    logger.log(`Success of the geeks.`);
}).catch(function(){
    console.log(`Some error has occured.`);
    logger.log('INFO','Some error has occured.');
});