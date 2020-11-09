#!/usr/bin/env node

import { createServer } from "http";
import app from "../src/index";
import { name as projectName } from "../package.json";

const { PORT = 3000 } = process.env;

const log = (outPut: any) => console.log(`[${projectName}] ${outPut}`);
const logerr = (outPut: any) => console.error(`[${projectName}] ${outPut}`);

app.set("port", PORT);
const server = createServer(app);

server.listen(PORT);
server.on("error", logerr);
server.on("listening", () => {
  log(`Listening on: ${PORT}`);
});
