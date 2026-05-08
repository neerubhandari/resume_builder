import Resume from "../models/Resume.js";

export const updateResume = async (req, res) => {
  try {
    const updatedResume = await Resume.findByIdAndUpdate(
      req.params.id,
      req.body,
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
