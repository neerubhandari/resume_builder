export const formatParsedResume = (parsedData) => {
  return {
    name: parsedData.personalInfo?.name || "",
    email: parsedData.personalInfo?.email || "",
    number: parsedData.personalInfo?.phone || "",
    location: parsedData.personalInfo?.location || "",
    profession: parsedData.personalInfo?.profession || "",
    linkedInProfile: parsedData.personalInfo?.linkedIn || "",
    website: parsedData.personalInfo?.website || "",

    summary: parsedData.summary || "",
    // ✅ EXPERIENCE FIXED
    experience: Array.isArray(parsedData.experience)
      ? parsedData.experience.filter(Boolean).map((exp) => {
          if (typeof exp === "string") {
            return {
              jobTitle: "",
              companyName: "",
              startDate: "",
              endDate: "",
              description: exp,
            };
          }

          return {
            companyName: exp.companyName || exp.company || "",
            jobTitle: exp.jobTitle || exp.role || "",
            startDate: exp?.startDate || "",
            endDate: exp?.endDate || "",
            description: exp.description || "",
          };
        })
      : [],

    // ✅ EDUCATION SAFE + PARSE FIX
    education: Array.isArray(parsedData.education)
      ? parsedData.education.filter(Boolean).map((edu) => {
          if (typeof edu === "string") {
            const parts = edu.split("|");

            return {
              institutionName: parts[0]?.trim() || "",
              degreeName: parts[1]?.trim() || "",
              fieldOfStudy: "",
              endDate: parts[2]?.trim() || "",
              gpaScore: "",
            };
          }

          return {
            institutionName: edu.institutionName || "",
            degreeName: edu.degreeName || "",
            fieldOfStudy: edu.fieldOfStudy || "",
            endDate: edu.endDate || "",
            gpaScore: edu.gpaScore || "",
          };
        })
      : [],

    // ✅ PROJECTS SAFE
    projects: Array.isArray(parsedData.projects)
      ? parsedData.projects.filter(Boolean).map((project) => {
          if (typeof project === "string") {
            return {
              title: "",
              description: project,
              technologies: [],
            };
          }

          return {
            title: project.title || "",
            description: project.description || "",
            technologies: project.technologies || [],
          };
        })
      : [],

    // ✅ SKILLS SAFE
    skills: Array.isArray(parsedData.skills)
      ? parsedData.skills.filter(Boolean).map((skill) => ({
          skillSet:
            typeof skill === "string"
              ? skill
              : skill.skillSet || skill.name || "",
        }))
      : [],
  };
};
