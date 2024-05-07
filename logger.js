// logger.js

const fs = require('fs')
const path = require('path')


const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARNING: 2,
  ERROR: 3
};

let logLevel = LOG_LEVELS.INFO;
let logFilePath = path.join("D:/javascripts_basics/JavaScript_basic_front-end", 'logs', 'logger.log'); // Define the path to the log file

function setLogLevel(level) {
  if (LOG_LEVELS.hasOwnProperty(level.toUpperCase())) {
    logLevel = LOG_LEVELS[level.toUpperCase()];
  } else {
    console.error(`Invalid log level: ${level}. Defaulting to INFO.`);
  }
}

function log(level, message) {
  if (LOG_LEVELS[level] >= logLevel) {
    const logEntry = `[${new Date().toISOString()}] [${level}] ${message}\n`;
    fs.appendFile(logFilePath, logEntry, (err) => {
      if (err) {
        console.error('Error writing to log file:', err);
      }
    });
  }
}

module.exports = {
  setLogLevel,
  log
};