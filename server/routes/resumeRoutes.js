import express from "express";
import { createResume } from "../controllers/createResume.js";
import { protect } from "../middleware/authMiddleware.js";
import { getUserResume } from "../controllers/getResume.js";
import { getUserResumeById } from "../controllers/getResumeById.js";
import { updateResume } from "../controllers/updateResume.js";

const router = express.Router();
router.post("/create", protect, createResume);
router.get("/get-resume", protect, getUserResume);
router.get("/:id", protect, getUserResumeById);
router.put("/:id", protect, updateResume);
export default router;
