import { name, version } from "../package.json";

export default {
  apis: ["src/models/*", "src/routes/*"],
  definition: {
    info: {
      title: `${name} API Specification`,
      version,
    },
  },
  openapi: "3.0.0",
};
