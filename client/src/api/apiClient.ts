const API_URL = import.meta.env.VITE_API_URL;

type ApiOptions = Omit<RequestInit, "body"> & {
  body?: any;
};

export const apiClient = async (endpoint: string, options: ApiOptions = {}) => {
  const token = localStorage.getItem("token");

  const isFormData = options.body instanceof FormData;

  const response = await fetch(`${API_URL}${endpoint}`, {
    ...options,
    headers: {
      ...(isFormData ? {} : { "Content-Type": "application/json" }),
      Authorization: token ? `Bearer ${token}` : "",
      ...options.headers,
    },
    body: isFormData
      ? options.body
      : options.body
        ? JSON.stringify(options.body)
        : undefined,
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Something went wrong");
  }

  return data;
};
