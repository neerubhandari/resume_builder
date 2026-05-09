import Resume from "../models/Resume.js";
export const createResumeTitle = async (req, res) => {
  try {
    const { title } = req.body;
    const resume = await Resume.create({
      user: req.user.id,
      title,
    });

    res.status(201).json({
      message: "Resume title created",
      resume,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserResumesTitle = async (req, res) => {
  try {
    const resumes = await Resume.find({ user: req.user.id }, { title: 1 });

    res.status(200).json({
      message: "Resumes fetched",
      resumes,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
