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

console.log(result);
logger.log('INFO',result);

// q3 : Create a program to find if the number is positive, negative or zero.
let num1 = 2;

switch(true){
    case (num1 > 0):
        console.log(`${num1} is greater than zero.`);
        logger.log('INFO',`${num1} is greater than zero.`);
        break;
    case (num1==0):
        console.log(`${num1} is equal to zero.`);
        logger.log('INFO',`${num1} is equal to zero.`);
        break;
    case (num1 < 0):{
        console.log(`${num1} is lesser than zero.`);
        logger.log('INFO',`${num1} is lesser than zero.`);
        break;
    }
}

// q3 : hcf and gcd of the number]
let num2 =10;
let num3 = 15;
let gcd = 0;
for(let i = 1;i<=num2 && i <=num3;i++){
    if( num2 %i ==0 && num3 % i ==0){
        gcd = i;
    }
}

console.log(`The gcd of ${num2} and ${num3} is : ${gcd}`);
logger.log('INFO',`The gcd of ${num2} and ${num3} is : ${gcd}`);

console.log(`The hcf of ${num2} and ${num3} is : ${(num2*num3)/gcd}`);
logger.log('INFO',`The hcf of ${num2} and ${num3} is : ${(num2*num3)/gcd}`);