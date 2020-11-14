#!/usr/bin/env node
const { copy } = require("fs-extra");

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
    const replace = {
      __PROJECT_NAME__: projectName,
      __USER_NAME__: author,
    };
    const dst = `${__dirname}/../templates/${template}`
    const src =  `${path}/${projectName}`

    copy(dst,src)
    console.log({dst,src})

    console.log({argv});
  }
).argv;
