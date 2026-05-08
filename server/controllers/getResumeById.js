import Resume from "../models/Resume.js";
export const getUserResumeById = async (req, res) => {
  try {
    const resume = await Resume.findById(req.params.id);
    if (!resume) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    const formattedResume = {
      personalInfo: {
        name: resume.name,
        email: resume.email,
        phone: resume.number,
        location: resume.location,
        profession: resume.profession,
        linkedIn: resume.linkedInProfile,
        website: resume.website,
      },

      summary: resume.professionalSummary,

      experience: resume.experience,

      education: resume.education,

      projects: resume.projects,

      skills: resume.skills,
    };

    res.status(200).json({
      success: true,
      data: formattedResume,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
