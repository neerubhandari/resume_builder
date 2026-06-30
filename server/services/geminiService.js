import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
dotenv.config();
const genAI = new GoogleGenerativeAI(process.env.VITE_GEMINI_API_KEY);

// Create model once and reuse it
const model = genAI.getGenerativeModel({
  model: "gemini-3.5-flash",
});

/**
 * Enhance or summarize text using Gemini
 */
export async function enhanceSummary(text) {
  if (!text) throw new Error("Text is required");

  const prompt = `
You are a professional summarization AI.

Improve and refine the following summary. Make it:
- Clear and concise
- Well structured
- Easy to understand
- Remove redundancy
- Keep key meaning intact

Text:
${text}
`;

  const result = await model.generateContent(prompt);
  const response = await result.response;

  return response.text();
}
