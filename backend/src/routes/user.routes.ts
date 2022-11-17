import express from "express";
import { createUserHandler, getCurrentUserHandler } from "../controllers/user.controller";
import requireUser from "../middleware/requireUser";
import validateResource from "../middleware/validateResource";
import { createUserSchema } from "../schemas/user.schema";

const router = express.Router();

router.post("/api/users", validateResource(createUserSchema), createUserHandler);

router.get("/api/users/me", requireUser, getCurrentUserHandler);

export default router;
