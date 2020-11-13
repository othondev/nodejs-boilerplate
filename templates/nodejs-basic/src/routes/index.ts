import express from "express";
import infoRoute from "core/routes/info";

const router = express.Router();

/**
 * @swagger
 *
 * /healthcheck:
 *   get:
 *     description: Returns healthcheck object
 *     produces:
 *      - application/json
 *     responses:
 *       200:
 *         description: healthcheck
 *         schema:
 *           $ref: '#/definitions/Info'
 */
router.use("/healthcheck", infoRoute);

export default router;
