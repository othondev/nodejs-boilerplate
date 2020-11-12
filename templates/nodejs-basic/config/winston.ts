import winston, { format } from "winston";
import { name } from "../package.json";

const { LOG: level = "info", LOG_MAXSIZE_MB = 1 } = process.env;

const maxsize = 1e6 * (LOG_MAXSIZE_MB as number);

const logger = winston.createLogger({
  format: format.combine(
    format.errors({ stack: level === "debug" }),
    format.timestamp(),
    format.json()
  ),
  level,
  transports: [
    new winston.transports.File({
      filename: `logs/${name}.log`,
      maxsize,
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
