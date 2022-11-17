import express from "express";
import { uploadFile } from "../controllers/file.controller";
import upload from "../middleware/fileUpload";

const router = express.Router();

router.post("/api/files", upload.single("file"), uploadFile);

export default router;
