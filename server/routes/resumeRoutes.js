import express from "express";
import { protect } from "../middleware/authMiddleware.js";
import {
  createResume,
  createResumeTitle,
  deleteResume,
  generateResumeSummary,
  getUserResumeById,
  getUserResumesTitle,
  updateResume,
  uploadResume,
} from "../controllers/resumeController.js";
import { upload } from "../utils/fileUpload.js";

const router = express.Router();
router.post("/create", protect, createResume);
router.post("/generate-summary", protect, generateResumeSummary);
router.post("/create-title", protect, createResumeTitle);
router.get("/get-resume", protect, getUserResumesTitle);
router.get("/:id", protect, getUserResumeById);
router.put("/:id", protect, updateResume);
router.delete("/:id", protect, deleteResume);
router.post("/upload-resume", protect, upload.single("resume"), uploadResume);
export default router;
