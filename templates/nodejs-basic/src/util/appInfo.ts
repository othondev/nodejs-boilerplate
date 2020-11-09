import { version, author } from "../../package.json";
const { NODE_ENV = "dev" } = process.env;

interface ApplicationInfo {
  uptime: Number;
  timestamp: Number;
  info: {
    author: string;
    environment: string;
    version: string;
  };
}
export function getApplicationInfo(): ApplicationInfo {
  return {
    uptime: process.uptime(),
    timestamp: Date.now(),
    info: {
      author,
      environment: NODE_ENV,
      version,
    },
  };
}
