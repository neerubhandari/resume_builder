import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createResume,
  createResumeTitle,
  generateResumeSummary,
  getUserResumeById,
  getUserResumesTitle,
  updateResume,
} from "../controllers/resumeController.js";

const router = express.Router();
router.post("/create", protect, createResume);
router.post("/generate-summary", protect, generateResumeSummary);
router.post("/create-title", protect, createResumeTitle);
router.get("/get-resume", protect, getUserResumesTitle);
router.get("/:id", protect, getUserResumeById);
router.put("/:id", protect, updateResume);
export default router;
