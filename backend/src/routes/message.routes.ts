import express from "express";
import { createMessageHandler } from "../controllers/message.controller";
import requireUser from "../middleware/requireUser";

const router = express.Router();

router.post("/api/message", requireUser, createMessageHandler);

export default router;
