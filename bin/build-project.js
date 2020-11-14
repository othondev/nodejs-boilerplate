#!/usr/bin/env node
const { copySync } = require("fs-extra");
const { writeFileSync, readFileSync } = require("fs");

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
      });
  },
  (argv) => {
    const { author, projectName, path, template } = argv;
    const src = `${__dirname}/../templates/${template}`;
    const dst = `${path}/${projectName}`;

    copySync(src, dst);
    replaceFiles(author, projectName, dst);
  }
).argv;

function replaceFiles(author, projectName, dst) {
  const files = [`${dst}/README.md`, `${dst}/package.json`];
  const option = { encoding: "utf8" };
  for (file of files) {
    const text = readFileSync(file, option);
    const newFile = text
      .replace(/__PROJECT_NAME__/g, projectName)
      .replace(/__USER_NAME__/g, author);
    console.log({ text, newFile, file });
    writeFileSync(file, newFile, option);
  }
}
