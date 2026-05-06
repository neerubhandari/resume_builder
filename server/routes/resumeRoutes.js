import express from "express";
import { createResume } from "../controllers/createResume.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();
router.post("/create", protect, createResume);
export default router;
