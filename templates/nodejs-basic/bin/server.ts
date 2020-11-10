#!/usr/bin/env node

import { createServer } from "http";
import logger from "../config/winston"
import app from "../src/index";

const { PORT = 3000 } = process.env;

app.set("port", PORT);
const server = createServer(app);

server.listen(PORT);
server.on("error", logger.error);
server.on("listening", () => {
  logger.info(`Listening on: ${PORT}`);
});
