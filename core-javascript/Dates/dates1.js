// logger file
import logger from '../../logger';

// getting the date
let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let time = date.getTime();

let timezone = date.getTimezoneOffset();

let fdate = new Intl.DateTimeFormat('en-us').format(date);

console.log(`year : ${year},month : ${month},time : ${time}, timezone :${timezone}`);
logger.log('INFO',`year : ${year},month : ${month},time : ${time}, timezone :${timezone}`);

