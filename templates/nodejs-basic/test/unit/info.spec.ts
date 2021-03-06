import supertest from "supertest";
import { version, author } from "../../package.json";
import app from "core/index";
const request = supertest(app);

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
