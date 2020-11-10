jest.mock("core/routes/info", () => {
  return {
    __esModule: true,
    default: jest.fn(() => {
      throw new Error("Mocked Error");
    }),
  };
});

import supertest from "supertest";
import app from "core/index";
const request = supertest(app);

beforeEach(() => {
  jest.resetModules();
});

test("Should received a general error", async () => {
  const response = await request.get("/healthcheck");

  expect(response.status).toBe(500);
  expect(response.body).toHaveProperty("error");
});

test("Should received a client error", async () => {
  const response = await request
    .get("/healthcheck")
    .set("X-Requested-With", "XMLHttpRequest");

  expect(response.status).toBe(500);
  expect(response.body).toHaveProperty("message");
});
