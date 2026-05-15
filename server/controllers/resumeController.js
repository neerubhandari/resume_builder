import Resume from "../models/Resume.js";
import dotenv from "dotenv";
import OpenAI from "openai";
import { ObjectId } from "mongodb";

dotenv.config();

// OpenAI setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const createResume = async (req, res) => {
  try {
    const {
      personalInfo,
      summary,
      experience,
      education,
      projects,
      skills,
      template,
    } = req.body;

    const { name, email, phone, location, profession, linkedIn, website } =
      personalInfo;

    const resume = await Resume.create({
      user: req.user.id,

      name,
      email,
      number: phone,
      location,
      profession,
      linkedInProfile: linkedIn,
      website,
      professionalSummary: summary,
      template,
      experience,
      education,
      projects,
      skills,
    });
    console.log("TEMPLATE:", req.body.template);
    res.status(201).json({
      message: "Resume created",
      resume,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const generateResumeSummary = async (req, res) => {
  try {
    const { summary } = req.body;

    if (!summary || !Array.isArray(summary)) {
      return res.status(400).json({
        message: "Summary points are required",
      });
    }

    const prompt = `
You are a professional resume writer.

Convert the following bullet points into a concise and professional resume summary:

${summary.join("\n")}
`;

    // GPT CALL
    const response = await openai.chat.completions.create({
      model: "gpt-4o-mini",
      messages: [
        {
          role: "system",
          content: "You are an expert resume writer.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const summaryResponse = response.choices[0].message.content;

    res.status(200).json({
      message: "Summary generated",
      summaryResponse,
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

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
      template: resume.template,
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

export const updateResume = async (req, res) => {
  try {
    const {
      personalInfo,
      summary,
      experience,
      education,
      projects,
      skills,
      template,
    } = req.body;

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
        template,
        experience,
        education,
        projects,
        skills,
      },
      { new: true },
    );
    console.log("TEMPLATE:", req.body.template);

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
      template: updatedResume.template,
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

export const deleteResume = async (req, res) => {
  try {
    const id = req.params.id;

    const result = await Resume.deleteOne({
      _id: new ObjectId(id),
    });

    if (result.deletedCount === 0) {
      return res.status(404).json({
        success: false,
        message: "Resume not found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Resume deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
