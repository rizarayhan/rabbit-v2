import api from "./axios";

export const uploadImage = async (formData) => {
  const response = await api.post(`/api/upload`, formData);

  return response.data;
};
