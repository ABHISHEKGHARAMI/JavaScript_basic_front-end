// setting up the logger file
const logger = require('../logger');


// here we write the code for the condition given

let rain = true;
let temp = 12;

if(temp>= -20 || temp <= 20){
   if(rain==true){
    console.log(`Stay inside and  don't play.`);
    logger.log('INFO',"Stay inside and don't play" );
   }else{
    console.log(`Stay inside and play .`);
    logger.log('INFO',`Stay inside and play .`);
   }
}else if(temp >=18 || temp<=20){
    if(rain==true){
        console.log(`Stay inside and play .`);
        logger.log('INFO',`Stay inside and play .`);
    }
    else{
       console.log(`Go outside and play .`);
       logger.log('INFO',`SGo outside and play .`); 
    }
}

// can do this using the ternary operators
//Create a program to print the result as pass if the marks obtained is greater than or equal to 40 using ternary operator.


let marks = 45;

let result = marks > 40? `${marks} greater than 40.` : `${marks} lesser than 40.`