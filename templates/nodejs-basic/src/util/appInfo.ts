import { author, version } from "../../package.json";
import { IApplicationInfo } from "core/models/Info";
const { NODE_ENV = "", LOG = "" } = process.env;

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
