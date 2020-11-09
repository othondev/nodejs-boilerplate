import winston from "winston";
import { name } from "../package.json";

const { logLevel: level = "info" } = process.env;
const FIVE_MB = 5242880;

const logger = winston.createLogger({
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  level,
  transports: [
    new winston.transports.File({
      filename: `logs/${name}.log`,
      maxsize: FIVE_MB,
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        winston.format.colorize({ all: true }),
        winston.format.simple()
      ),
    })
  ],
});

export default logger;
export const stream = { write: (output: any) => logger.info(output) };
