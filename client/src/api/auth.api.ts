import { apiClient } from "./apiClient";

export const registerUser = (registerData: any) => {
  return apiClient("/auth/register", {
    method: "POST",
    body: registerData,
  });
};

export const loginUser = (loginData: any) => {
  return apiClient("/auth/login", {
    method: "POST",
    body: loginData,
  });
};
