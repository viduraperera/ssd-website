import express from "express";
import user from "./user.routes";
import auth from "./auth.routes";
import file from "./files.routes";
import messages from "./message.routes";

const router = express.Router();

router.get("/healthcheck", (_, res) => res.sendStatus(200));

router.use(user);
router.use(auth);
router.use(file);
router.use(messages);

export default router;
