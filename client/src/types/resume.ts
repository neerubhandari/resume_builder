// src/types/resume.ts

import type { Template } from "../components/ResumeForm";

export type PersonalInfo = {
  name: string;
  email: string;
  phone: string;
  location: string;
  profession: string;
  linkedIn: string;
  website: string;
  profilePicture: File | null;
};

export type ResumeFormData = {
  personalInfo: PersonalInfo;
  summary: string;
  experience: any[];
  education: any[];
  projects: any[];
  skills: any[];
  template: Template;
};

export type ExperienceItem = {
  id: string;
  jobTitle: string;
  companyName: string;
  startDate: string;
  endDate: string;
  description: string;
};

export type EducationItem = {
  id: string;
  institutionName: string;
  degreeName: string;
  fieldOfStudy: string;
  startDate?: string;
  endDate: string;
  gpaScore?: string;
};

export type SkillItem = {
  id: string;
  skillSet: string;
};

export type ProjectItem = {
  id: string;
  projectName: string;
  projectType: string;
  projectDescription: string;
};

export type PersonalInfoErrors = {
  name?: string;
  email?: string;
};

export type ResumeEntity = {
  _id: string;
  user: string;
  name: string;
  mail: string;
  number: string;
  location?: string;
  profession?: string;
  linkedInProfile?: string;
  website?: string;
  professionalSummary?: string;
  experience: ExperienceItem[];
  education: any[];
  projects: any[];
  skills: any[];
};
