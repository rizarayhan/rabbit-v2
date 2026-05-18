import api from "./axios";

export const getUserOrders = async () => {
  const response = await api.get("/api/orders/my-orders");

  return response.data;
};

export const getOrderDetails = async (orderId) => {
  const response = await api.get(`/api/orders/${orderId}`);

  return response.data;
};
