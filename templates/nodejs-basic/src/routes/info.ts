import express, { Request, Response } from "express";
import { version, author } from "../../package.json";

const { NODE_ENV = "dev" } = process.env;
const router = express.Router();

router.get("/healthcheck", (_request: Request, response: Response) => {
  response.status(200).send({
    uptime: process.uptime(),
    timestamp: Date.now(),
    info: {
      author,
      environment: NODE_ENV,
      version,
    }
  });
});

export default router;
