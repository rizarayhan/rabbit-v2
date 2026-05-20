import api from "./axios";

export const createCheckout = async (checkoutData) => {
  const response = await api.post("/api/checkout", checkoutData);

  return response.data;
};

export const payCheckout = async ({ checkoutId, paymentDetails }) => {
  const response = await api.put(`/api/checkout/${checkoutId}/pay`, {
    paymentStatus: "paid",
    paymentDetails,
  });

  return response.data;
};

export const finalizeCheckout = async (checkoutId) => {
  const response = await api.post(`/api/checkout/${checkoutId}/finalize`);

  return response.data;
};
