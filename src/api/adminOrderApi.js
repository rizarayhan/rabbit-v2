import api from "./axios";

export const getAllOrders = async () => {
  const response = await api.get("/api/admin/orders");

  return response.data;
};

export const editOrderStatus = async ({ id, status }) => {
  const response = await api.put(`/api/admin/orders/${id}`, { status });

  return response.data;
};

export const removeOrder = async (id) => {
  await api.delete(`/api/admin/orders/${id}`);

  return id;
};
