import express from "express";
import infoRoute from "core/routes/info";
import documentationRoute from "core/routes/info";

const router = express.Router();

router.use("/healthcheck", infoRoute);
router.use("/docs", documentationRoute);

export default router;
