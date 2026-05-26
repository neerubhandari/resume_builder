import type { ResumeFormData } from "../types/resume";
import { apiClient } from "./apiClient";

export const createResume = (formData: any) => {
  return apiClient("/resume/create", {
    method: "POST",
    body: formData,
  });
};

export const createResumeTitle = (title: string) => {
  return apiClient("/resume/create-title", {
    method: "POST",
    body: { title },
  });
};

export const deleteResume = (id: string) => {
  return apiClient(`/resume/${id}`, {
    method: "DELETE",
  });
};

export const getResume = () => {
  return apiClient(`/resume/get-resume`, {
    method: "GET",
  });
};

export const getResumeById = (id: string) => {
  return apiClient(`/resume/${id}`, {
    method: "GET",
  });
};

export const updateResume = (id: string, formData: ResumeFormData) => {
  return apiClient(`/resume/${id}`, {
    method: "PUT",
    body: formData,
  });
};

export const uploadResumeData = (file: any) => {
  const formData = new FormData();
  formData.append("resume", file);
  return apiClient(`/resume/upload-resume`, {
    method: "POST",
    body: formData,
  });
};
