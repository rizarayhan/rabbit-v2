import api from "./axios";

export const getUsers = async () => {
  const response = await api.get("/api/admin/users");

  return response.data;
};

export const createUser = async (userData) => {
  const response = await api.post("/api/admin/users", userData);

  return response.data;
};

export const editUser = async ({ id, name, email, role }) => {
  const response = await api.put(`/api/admin/users/${id}`, {
    name,
    email,
    role,
  });

  return response.data;
};

export const removeUser = async (id) => {
  await api.delete(`/api/admin/users/${id}`);

  return id;
};
