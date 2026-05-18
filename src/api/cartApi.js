import api from "./axios";

export const getCartApi = async ({ userId, guestId }) => {
  const response = await api.get("/api/cart", {
    params: {
      userId,
      guestId,
    },
  });

  return response.data;
};

export const addToCartApi = async (cartData) => {
  const response = await api.post("/api/cart", cartData);

  return response.data;
};

export const updateCartItemApi = async (cartData) => {
  const response = await api.put("/api/cart", cartData);

  return response.data;
};

export const removeFromCartApi = async (cartData) => {
  const response = await api.delete("/api/cart", {
    data: cartData,
  });

  return response.data;
};

export const mergeCartApi = async (mergeData) => {
  const response = await api.post("/api/cart/merge", mergeData);

  return response.data;
};
