import api from "./axios";

export const createCheckout = async (checkoutData) => {
  const response = await api.post("/api/checkout", checkoutData);

  return response.data;
};
