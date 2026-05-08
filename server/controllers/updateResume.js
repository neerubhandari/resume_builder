import Resume from "../models/Resume.js";

export const updateResume = async (req, res) => {
  try {
    const { personalInfo, summary, experience, education, projects, skills } =
      req.body;

    const { name, email, phone, location, profession, linkedIn, website } =
      personalInfo;

    const updatedResume = await Resume.findByIdAndUpdate(
      req.params.id,
      {
        name,
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
      },
      { new: true },
    );

    const formattedResume = {
      personalInfo: {
        name: updatedResume.name,
        email: updatedResume.email,
        phone: updatedResume.number,
        location: updatedResume.location,
        profession: updatedResume.profession,
        linkedIn: updatedResume.linkedInProfile,
        website: updatedResume.website,
      },

      summary: updatedResume.professionalSummary,

      experience: updatedResume.experience,

      education: updatedResume.education,

      projects: updatedResume.projects,

      skills: updatedResume.skills,
    };

    res.status(200).json({
      success: true,
      message: "Resume updated successfully",
      data: formattedResume,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
