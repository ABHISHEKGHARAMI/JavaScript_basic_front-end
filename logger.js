const fs = require('fs');
const path = require('path');

const LOG_LEVELS = {
  DEBUG: 0,
  INFO: 1,
  WARNING: 2,
  ERROR: 3
};

let logLevel = LOG_LEVELS.INFO;
let logFilePath = path.join(__dirname, 'logs', 'logger.log'); // Default log file path

function setLogLevel(level) {
  if (LOG_LEVELS.hasOwnProperty(level.toUpperCase())) {
    logLevel = LOG_LEVELS[level.toUpperCase()];
  } else {
    console.error(`Invalid log level: ${level}. Defaulting to INFO.`);
  }
}

function setLogFile(filePath) {
  logFilePath = filePath;
}

function log(level, message) {
  if (LOG_LEVELS[level] >= logLevel) {
    let logEntry = `[${new Date().toISOString()}] [${level}] ${message}`;
    
    // Use Error object to capture the filename
    const callerFile = new Error().stack.split('\n')[2].split('(')[1].split(')')[0];
    const filename = path.basename(callerFile);

    if (filename) {
      logEntry += ` (File: ${filename})`;
    }
    logEntry += '\n';
    
    // Ensure the directory exists before writing to the log file
    fs.mkdir(path.dirname(logFilePath), { recursive: true }, (err) => {
      if (err) {
        console.error('Error creating log directory:', err);
      } else {
        fs.appendFile(logFilePath, logEntry, (err) => {
          if (err) {
            console.error('Error writing to log file:', err);
          }
        });
      }
    });
  }
}

module.exports = {
  setLogLevel,
  setLogFile,
  log
};
