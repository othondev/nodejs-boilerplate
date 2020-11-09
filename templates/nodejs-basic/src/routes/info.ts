import express, { Request, Response } from "express";
import { getApplicationInfo } from "../util/appInfo"

const router = express.Router();

router.get("/healthcheck", (_request: Request, response: Response) => {
  response.status(200).send(getApplicationInfo());
});

export default router;
