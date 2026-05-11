import Resume from "../models/Resume.js";
import dotenv from "dotenv";
import OpenAI from "openai";

dotenv.config();

// OpenAI setup
const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export const createResume = async (req, res) => {
  try {
    const { personalInfo, summary, experience, education, projects, skills } =
      req.body;

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
