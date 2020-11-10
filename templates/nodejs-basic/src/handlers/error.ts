import { ErrorRequestHandler, NextFunction, Request, Response } from "express";
import logger from "config/winston";

export function logErrors(
  error: ErrorRequestHandler,
  _request: Request,
  _response: Response,
  next: NextFunction
) {
  logger.error(error);
  next(error);
}

export function clientErrorHandler(
  error: ErrorRequestHandler,
  request: Request,
  response: Response,
  next: NextFunction
) {
  if (request.xhr) {
    response.status(500).send({ error: "An Unexpected Error Occurred" });
  } else {
    next(error);
  }
}

export function errorHandler(
  error: ErrorRequestHandler,
  _request: Request,
  response: Response,
  _next: NextFunction
) {
  response.status(500).send({ error });
}
