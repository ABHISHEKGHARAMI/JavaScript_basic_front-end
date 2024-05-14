// setting up the logger

const logger = require('../logger');
const readline = require('readline');


// adding the readline
const r1 = readline.createInterface({
    input: process.stdin,
    output : process.stdout
});

r1.question('enter the name ?',(name)=>{
    console.log(`the name is : ${name}`);
    logger.log('INFO',`the name of the gentleman is : ${name}`);
    r1.close();
})