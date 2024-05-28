//  importing the logger
const logger = require('../logger');

for(let i = 0 ;i <=50;i=i+5 ){
  console.log(`The number is : ${i}`);
  logger.log('INFO',`The number is : ${i}`);
}