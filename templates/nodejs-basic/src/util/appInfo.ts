import { author, version } from "../../package.json";
const { NODE_ENV = "", LOG = "" } = process.env;

export interface IApplicationInfo {
  uptime: number;
  timestamp: number;
  info: {
    author: string;
    environment: string;
    version: string;
    logLevel: string
  };
}
export function getApplicationInfo(): IApplicationInfo {
  return {
    info: {
      author,
      environment: NODE_ENV,
      version,
      logLevel: LOG,
    },
    timestamp: Date.now(),
    uptime: process.uptime(),
  };
}
