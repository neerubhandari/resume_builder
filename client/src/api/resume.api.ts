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
