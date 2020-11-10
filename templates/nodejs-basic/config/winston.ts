import winston, { format } from "winston";
import { name } from "../package.json";

const { logLevel: level = "info" } = process.env;
const FIVE_MB = 5242880;

const logger = winston.createLogger({
  format: format.combine(
    format.errors({ stack: true }),
    format.timestamp(),
    format.json()
  ),
  level,
  transports: [
    new winston.transports.File({
      filename: `logs/${name}.log`,
      maxsize: FIVE_MB,
    }),
    new winston.transports.Console({
      format: winston.format.combine(
        format.colorize({ all: true }),
        format.simple()
      ),
    }),
  ],
});

export default logger;
export const stream = { write: (output: any) => logger.info(output) };
