import express from "express";
import morgan from "morgan";
import { stream } from "../config/winston";
import info from "./routes/info";

const app = express();

app.use(morgan("combined", { stream }));
app.use(info);

export default app;
