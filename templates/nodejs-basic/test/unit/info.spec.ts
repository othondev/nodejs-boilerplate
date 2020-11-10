import supertest from "supertest";
import app from "core/index";
import { version, author } from "../../package.json";
import * as errorHandler from "core/handlers/error";
import * as appInfo from "core/util/appInfo";

const request = supertest(app);

test("Should call errors handlers", async () => {

  await request.get("/healthcheck");

  const errorHandlersSpy = spyOn(errorHandler, "clientErrorHandler");

  expect(errorHandlersSpy).toHaveBeenCalledTimes(1);
});

test("/GET healthcheck", async () => {
  const response = await request.get("/healthcheck");
  expect(response.status).toBe(200);
  expect(response.body).toMatchObject({
    uptime: expect.any(Number),
    timestamp: expect.any(Number),
    info: {
      version: expect.stringMatching(version),
      author: expect.stringMatching(author),
    },
  });
});
