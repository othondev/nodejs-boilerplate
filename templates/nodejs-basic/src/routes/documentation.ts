import express from "express";
import swaggerJSDoc from "swagger-jsdoc";
import swaggerOption from "config/swagger";
import swaggerUi from "swagger-ui-express";

const router = express.Router();
const swaggerSpec = swaggerJSDoc(swaggerOption);

router.use("/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export default router;
