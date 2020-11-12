import express from "express";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { stream } from "config/winston";
import infoRoute from "core/routes/info";
import {
  clientErrorHandler,
  errorHandler,
  logErrors,
} from "core/handlers/error";

const app = express();

app.use(morgan("combined", { stream }));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use(infoRoute);

app.use(logErrors);
app.use(clientErrorHandler);
app.use(errorHandler);

export default app;
