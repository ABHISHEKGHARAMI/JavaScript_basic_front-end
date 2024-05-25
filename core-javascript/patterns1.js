// printing the pattern for the js
const logger = require('../logger');

// printing the patterns

let i,j;

for(i=0;i<=5;i++){
    let row = "";
    for(j=0;j<=i;j++){
        row += "*";
    }
    console.log(row);
    logger.log('INFO',row);
}