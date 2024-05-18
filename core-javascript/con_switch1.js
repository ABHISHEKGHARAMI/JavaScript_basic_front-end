// importing the switch

const logger = require('../logger');


let choice = 4 ;


switch(choice){
    case 1:
        console.log(`This is Sunday.`);
        logger.log(`This is Sunday.`)
        break;

    case 2:
        console.log(`This is Monday.`);
        logger.log(`This is Monday.`);
        break;

    case 3:
        console.log(`This is Wednesday.`);
        logger.log(`This is Wednesday.`)
        break;

    case 4:
        console.log(`This is Tuesday.`);
        logger.log(`This is Tuesday.`);
        break;

    case 5:
        console.log(`This is Thursday.`);
        logger.log(`This is Thursday.`);
        break;

    case 6:
        console.log(`This is Friday.`);
        logger.log(`This is Friday.`);
        break;

    case 7:
        console.log(`This is Saturday.`);
        logger.log(`This is Saturday.`);
        break;

    default:
        console.log(`This is default.`);
        logger.log('This is default.');

}