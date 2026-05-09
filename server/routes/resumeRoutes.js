import express from "express";
import { createResume } from "../controllers/createResume.js";
import { protect } from "../middleware/authMiddleware.js";
import { getUserResumeById } from "../controllers/getResumeById.js";
import { updateResume } from "../controllers/updateResume.js";
import {
  createResumeTitle,
  getUserResumesTitle,
} from "../controllers/createResumeTitle.js";

const router = express.Router();
router.post("/create", protect, createResume);
router.post("/create-title", protect, createResumeTitle);
router.get("/get-resume", protect, getUserResumesTitle);
router.get("/:id", protect, getUserResumeById);
router.put("/:id", protect, updateResume);
export default router;
