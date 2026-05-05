import express from "express";
import { registerUser } from "../controllers/authController.js";
const router = express.Router();
console.log("REGISTER HIT from routes");
router.post("/register", registerUser);

export default router;
