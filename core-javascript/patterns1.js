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

// another pattern
for(i=5;i>0;i--){
    let row = "";
    for(j=i-1;j>0;j--){
     row += " ";
    }
    for(j=0;j<5-i-1;j++){
        row += "*";
    }
    console.log(row);
    logger.log('INFO',row);
}