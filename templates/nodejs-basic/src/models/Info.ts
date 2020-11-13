/**
 * @swagger
 *
 * definitions:
 *   Info:
 *     type: object
 *     properties:
 *       uptime:
 *         type: number
 *       timestamp:
 *         type: number
 *       info:
 *         type: object
 *         properties:
 *           author:
 *             type: string
 *           environment:
 *             type: string
 *           version:
 *             type: string
 *           logLevel:
 *             type: string
 *
 */
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

