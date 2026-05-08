import Resume from "../models/Resume.js";
export const createResume = async (req, res) => {
  try {
    const { personalInfo, summary, experience, education, projects, skills } =
      req.body;

    const { name, email, phone, location, profession, linkedIn, website } =
      personalInfo;

    const resume = await Resume.create({
      user: req.user.id,

      name: name,
      email,
      number: phone,
      location,
      profession,
      linkedInProfile: linkedIn,
      website,
      professionalSummary: summary,

      experience,
      education,
      projects,
      skills,
    });

    res.status(201).json({
      message: "Resume created",
      resume,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
