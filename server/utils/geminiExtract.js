import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export const extractResumeWithGemini = async (text) => {
  console.log({
    hasKey: !!process.env.GEMINI_API_KEY,
    length: process.env.GEMINI_API_KEY?.length,
  });
  const model = genAI.getGenerativeModel({
    model: "gemini-2.5-flash",
    generationConfig: {
      responseMimeType: "application/json",
    },
  });
  const prompt = `
You are a resume parser.

Extract structured JSON from this resume text.

RULES:
- Do NOT invent data
- Normalize skills into arrays
- Keep missing values as empty strings or empty arrays
- Output ONLY valid JSON

SCHEMA:
{
  "personalInfo": {
    "firstName": "",
    "lastName": "",
    "email": "",
    "phone": "",
    "location": "",
    "linkedin": "",
    "github": "",
    "website": ""
  },
  "summary": "",
  "skills": [],
  "experience": [
    {
      "company": "",
      "position": "",
      "startDate": "",
      "endDate": "",
      "location": "",
      "description": []
    }
  ],
  "education": [],
  "projects": [],
  "certifications": [],
  "languages": []
}

RESUME TEXT:
${text}
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;
  const raw = response.text();

  return JSON.parse(raw);
};
