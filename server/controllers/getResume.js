import Resume from "../models/Resume.js";
export const getUserResume = async (req, res) => {
  try {
    const resume = await Resume.find({
      user: req.user.id,
    });
    console.log(resume, "resume");
    res.status(200).json({
      message: "Resume fetched successfully",
      resume,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
