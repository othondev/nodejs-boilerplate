#!/usr/bin/env node
const prompts = require("prompts");
const signale = require("signale");
const { copySync } = require("fs-extra");
const { writeFileSync, readFileSync, readdirSync, existsSync } = require("fs");
const { basename } = require("path");
const { userInfo } = require("os");

const defaultProjectName = basename(process.cwd());
const defaultPath = process.cwd();
const defaultAuthor = userInfo().username;

require("yargs").command(
  "$0 [projectName]",
  "generate project",
  (yargs) => {
    yargs
      .positional("projectName", {
        describe: "Project name",
        default: defaultProjectName,
      })
      .option("path", {
        alias: "p",
        type: "String",
        default: defaultPath,
        description: "path where the project will be generated",
      })
      .option("author", {
        alias: "a",
        type: "string",
        default: defaultAuthor,
        description: "Author name",
      })
      .option("template", {
        alias: "t",
        type: "string",
        default: "nodejs-basic",
        description: "Template name",
      })
      .option("force", {
        alias: "f",
        type: "boolean",
        default: false,
        description: "Override all files and folder",
      });
  },
  async (argv) => {
    const { author, projectName, path, template } = argv;
    let { force } = argv;
    const src = `${__dirname}/../templates/${template}`;
    const dst = `${path}/${projectName}`;

    const isEmpty = !existsSync(dst) || readdirSync(dst).lenght <= 0;

    if (isEmpty || force || (await forcePrompt())) {
      generateProject(src, dst, { projectName, author });
    } else {
      signale.error("Process aborted");
    }
  }
).argv;

async function forcePrompt() {
  const force = await prompts({
    type: "confirm",
    name: "value",
    message: "Folder isn't empty. Can it override?",
    initial: false,
  });
  return force.value;
}
function generateProject(src, dst, { projectName, author }) {
  copySync(src, dst);
  signale.complete("Template applied");
  replaceFiles(author, projectName, dst);
  signale.complete("Replaced variable on template files");
  signale.success("Project generated");
}
function replaceFiles(author, projectName, dst) {
  const files = [`${dst}/README.md`, `${dst}/package.json`];
  const option = { encoding: "utf8" };
  for (file of files) {
    const text = readFileSync(file, option);
    const newFile = text
      .replace(/__PROJECT_NAME__/g, projectName)
      .replace(/__USER_NAME__/g, author);
    writeFileSync(file, newFile, option);
  }
}
