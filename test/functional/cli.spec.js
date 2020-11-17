const fs = require("fs");
const util = require("util");
const exec = util.promisify(require("child_process").exec);

const WORKDIR = "/tmp/workspace-nodejs";
const APP_NAME = "app_test";

afterAll(async () => {
  await exec(`rm -rf ${WORKDIR}`);
});
beforeAll(async () => {
  await exec(`mkdir ${WORKDIR}`);
});
afterEach(async () => {
  await exec(`rm -rf ${WORKDIR}/${APP_NAME}`);
});

test("copy all files", async () => {
  const { stdout } = await exec(
    `node ./bin/build-project.js -p ${WORKDIR} ${APP_NAME}`
  );
  const files = fs.readdirSync(`${WORKDIR}/${APP_NAME}`);
  expect(files).toEqual(
    expect.arrayContaining([
      ".env",
      ".gitignore",
      "README.md",
      "bin",
      "config",
      "package.json",
      "src",
      "test",
      "tsconfig.json",
    ])
  );
});

test("Replace the variable on files", async () => {
  const author = 'User Test'
  const { stdout } = await exec(
    `node ./bin/build-project.js -p ${WORKDIR} ${APP_NAME} -a '${author}'`
  );
  const packageJson = fs.readFileSync(`${WORKDIR}/${APP_NAME}/package.json`).toString();
  const readmeFile = fs.readFileSync(`${WORKDIR}/${APP_NAME}/README.md`).toString();

  expect(packageJson).toMatch(`"name": "${APP_NAME}"`)
  expect(packageJson).toMatch(`"author": "${author}"`)
  expect(readmeFile).toMatch(`# ${APP_NAME}`)
});

