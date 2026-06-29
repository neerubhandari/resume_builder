import { parseToDate } from "./parseToDate";

const ensureArray = (value) => {
  if (!value) return [];
  if (Array.isArray(value)) return value;
  if (typeof value === "object") return [value];
  return [];
};

const normalizeDescription = (description) =>
  Array.isArray(description) ? description.join("\n") : description || "";

const buildFullName = (personalInfo = {}) => {
  const { firstName = "", lastName = "", name = "" } = personalInfo;
  return [firstName, lastName].filter(Boolean).join(" ") || name;
};

const formatExperience = (experience) =>
  ensureArray(experience).map((exp) => ({
    companyName: exp.company || exp.companyName || "",
    jobTitle: exp.role || exp.jobTitle || "",
    startDate: parseToDate(exp.startDate),
    endDate: parseToDate(exp.endDate),
    description: normalizeDescription(exp.description),
  }));

const formatEducation = (education = []) =>
  education.map((edu) => ({
    institutionName: edu.institution || "",
    degreeName: edu.degree || "",
    startDate: parseToDate(edu.startDate),
    endDate: parseToDate(edu.endDate),
    fieldOfStudy: edu.studyField || "",
  }));

const formatProjects = (projects = []) =>
  projects.map((proj) => ({
    projectName: proj.name || "",
    projectDescription: normalizeDescription(proj.description),
    technologies: proj.technologies || [],
  }));

const formatSkills = (skills = []) =>
  skills.map((skill) => {
    if (typeof skill === "string") {
      return { skillSet: skill };
    }
    if (skill && typeof skill === "object") {
      return { skillSet: skill.skillSet || skill.name || skill.title || "" };
    }
    return { skillSet: "" };
  });

export const formatParsedResume = (parsedData) => {
  const { personalInfo = {} } = parsedData;

  return {
    number: personalInfo.phone || "",
    location: personalInfo.location || "",
    profession: personalInfo.profession || "",
    linkedInProfile: personalInfo.linkedIn || "",
    website: personalInfo.website || "",
    fullName: buildFullName(personalInfo),

    summary: parsedData.summary || "",
    template: parsedData.template || "classic",

    experience: formatExperience(parsedData.experience),
    education: formatEducation(parsedData.education),
    projects: formatProjects(parsedData.projects),
    skills: formatSkills(parsedData.skills),
  };
};
