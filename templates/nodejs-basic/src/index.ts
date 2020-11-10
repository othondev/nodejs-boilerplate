import express from "express";
import morgan from "morgan";
import { stream } from "config/winston";
import info from "core/routes/info";
import { clientErrorHandler, errorHandler, logErrors } from "core/handlers/error"

const app = express();

app.use(morgan("combined", { stream }));

app.use(express.json())
app.use(info);

app.use(logErrors)
app.use(clientErrorHandler)
app.use(errorHandler)

export default app;
