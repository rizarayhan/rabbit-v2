import api from "./axios";

export const loginUser = async (userData) => {
  const response = await api.post("/api/users/login", userData);

  return response.data;
};

export const registerUser = async (userData) => {
  const response = await api.post("api/users/register", userData);

  return response.data;
};
