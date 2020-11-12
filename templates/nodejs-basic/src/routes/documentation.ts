import express, { Request, Response } from "express";
import { getApplicationInfo } from "core/util/appInfo";

const router = express.Router();

router.get("/docs", (_request: Request, response: Response) => {
  response.status(200).send(getApplicationInfo());
});

export default router;
