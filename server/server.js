import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/db.js";
const app = express();
const PORT = process.env.PORT || 3000;
app.use(express.json());
app.use(cors());
app.get("/", (req, res) => res.send("Server is live"));
app.post("/api/resume", (req, res) => {
  const newResume = req.body;
  console.log("received data", newResume);
  res.status(201).json({ message: "Resume Created", data: newResume });
});
connectDB();
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
