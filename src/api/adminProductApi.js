import api from "./axios";

export const getAdminProducts = async () => {
  const response = await api.get("/api/admin/products");

  return response.data;
};

export const addProduct = async (productData) => {
  const response = await api.post("/api/products", productData);

  return response.data;
};

export const editProduct = async ({ id, productData }) => {
  const response = await api.put(`/api/products/${id}`, productData);

  return response.data;
};

export const removeProduct = async (id) => {
  await api.delete(`/api/products/${id}`);

  return id;
};
