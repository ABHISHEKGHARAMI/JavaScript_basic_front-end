// setting up the logger file
const logger = require('../../logger');

// creating map
let map1 = new Map([
    [1,10],
    [2,20],[3,56],
    [5,90]
]);


// executing the map for the js
console.log(map1);
logger.log('INFO',map1);

let map2 = new Map();

map2.set("FirstName","Abhishek");
map2.set("LastName","Gharami");
map2.set("Age",24);

console.log(map2);
logger.log('INFO',map2);