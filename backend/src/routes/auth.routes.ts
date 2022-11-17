import express from "express";
import { createSessionHandler, refreshAccessTokenHandler } from "../controllers/auth.controller";
import validateResource from "../middleware/validateResource";
import { createSessionSchema } from "../schemas/auth.schema";

const router = express.Router();

router.post("/api/sessions", validateResource(createSessionSchema), createSessionHandler);

router.post("/api/sessions/refresh", refreshAccessTokenHandler);

export default router;
