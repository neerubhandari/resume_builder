import type { ResumeFormData } from "../types/resume";

export const initialResumeFormData: ResumeFormData = {
  personalInfo: {
    name: "",
    email: "",
    phone: "",
    location: "",
    profession: "",
    linkedIn: "",
    website: "",
    profilePicture: null,
  },
  summary: "",
  experience: [],
  education: [],
  projects: [],
  skills: [],
  template: "classic",
};
