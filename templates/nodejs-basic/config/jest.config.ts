import { pathsToModuleNameMapper } from "ts-jest/utils";
import { compilerOptions } from "../tsconfig.json";

export default {
  clearMocks: true,
  coverageProvider: "v8",
  testEnvironment: "node",
  preset: "ts-jest",
  rootDir: "../",
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: "<rootDir>/",
  }),
};
