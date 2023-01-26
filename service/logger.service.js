const winston = require("winston");
const dotenv = require("dotenv");
dotenv.config();

const dateFormat = () => {
  return Date(Date.now().toLocaleString());
};

class LoggerService {
  constructor(route) {
    this.route = route;
    this.logger = winston.createLogger({
      level: "info",
      format: winston.format.printf(
        (info) =>
          `${dateFormat()} | ${info.level.toUpperCase()} | ${info.message}`
      ),
      transports: [
        new winston.transports.Console(),
        new winston.transports.File({
          filename: `${process.env.LOG_FILE_PATH}/${route}.log`,
        }),
      ],
    });
  }

  info(message) {
    this.logger.info(message);
  }

  error(message) {
    this.logger.error(message);
  }

  warn(message) {
    this.logger.warn(message);
  }

  debug(message) {
    this.logger.debug(message);
  }
}

module.exports = LoggerService;
