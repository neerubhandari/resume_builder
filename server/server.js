import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./config/db.js";

dotenv.config();

const app = express();

// middleware
app.use(cors());
app.use(express.json());

// test route
app.get("/", (req, res) => {
  res.send("Server is live 🚀");
});

// resume test route
app.post("/api/resume", (req, res) => {
  console.log("🔥 RESUME API HIT:", req.body);
  return res.status(201).json({
    success: true,
    message: "Resume received",
    data: req.body,
  });
});

// connect DB first, then start server
connectDB().then(() => {
  const PORT = process.env.PORT || 3000;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
  });
});
