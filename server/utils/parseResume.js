import { parseSkills } from "./skillParser.js";

export const parseResume = (text) => {
  const lines = text
    .split("\n")
    .map((l) => l.trim())
    .filter(Boolean);

  const emailRegex = /\S+@\S+\.\S+/;
  const phoneRegex = /(\+?\d[\d\s-]{8,})/;

  const email = text.match(emailRegex)?.[0] || "";
  const phone = text.match(phoneRegex)?.[0] || "";

  // safer name extraction (avoid grabbing "Resume" or headers)
  const name =
    lines.find((line) => {
      const clean = line.trim();

      const isValidLength = clean.length >= 3 && clean.length <= 50;
      const hasNoEmail = !emailRegex.test(clean);
      const hasNoPhone = !phoneRegex.test(clean);
      const isNotNoise = !/resume|curriculum|vitae|profile|cv/i.test(clean);
      const isNotAllCapsBlock = clean.split(" ").length <= 5;

      return (
        isValidLength &&
        hasNoEmail &&
        hasNoPhone &&
        isNotNoise &&
        isNotAllCapsBlock
      );
    }) || "";

  const skills = parseSkills(text);
  return {
    personalInfo: {
      name,
      email,
      phone,
      location: "",
      profession: "",
      linkedIn: "",
      website: "",
    },
    summary: "",
    experience: [],
    education: [],
    projects: [],
    skills,
  };
};
