// importing logger
const logger = require('../logger');

// checking with the if condition
let val1, val2;

val1 = 2;
val2 = 3;

// if condition

if(val1>val2){
    console.log(`${val1} is greater than ${val2}`);
    logger.log('INFO',`${val1} is greater than ${val2}`);
}else{
    console.log(`${val2} is greater than ${val1}`);
    logger.log('INFO',`${val2} is greater than ${val1}`);
}

// but we can do the same thing with the '?' operator

let result = (val1 > val2) ? val1 : val2 ;

console.log(`The bigger number is : ${result}`);
logger.log('INFO',`the bigger number is : ${result}`);


//using the multiple ?

let age = 22;

let message = (age > 3)? "Hi baby !" : (age < 20) ? "Hello there!" : (age < 30) ? "Welcome there" : " Go the other place";

console.log(`The message is : ${message}`);
logger.log("INFO",`The message is : ${message}`);


// now time to use the if else if and else

message = "Employee";

if (message == "Employee"){
  console.log(`welcome to the employee site .`);
  logger.log(`welcome to the employee site.`);
}else if(message == "Manager"){
   console.log(`welcome to the manager site .`);
   logger.log(`welcome to the manager site.`); 
}
else{
    console.log(`welcome to the help site .`);
    logger.log(`welcome to the help site.`);
}
  

