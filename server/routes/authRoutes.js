import express from "express";
import { registerUser } from "../controllers/registerController.js";
import { LoginUser } from "../controllers/loginController.js";
const router = express.Router();

router.post("/register", registerUser);
router.post("/login", LoginUser);

export default router;
