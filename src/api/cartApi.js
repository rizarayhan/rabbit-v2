import api from "./axios";

export const getCart = async ({ userId, guestId }) => {
  const response = await api.get("/api/cart", {
    params: {
      userId,
      guestId,
    },
  });

  return response.data;
};

export const addToCart = async (cartData) => {
  const response = await api.post("/api/cart", cartData);

  return response.data;
};

export const updateCartItem = async (cartData) => {
  const response = await api.put("/api/cart", cartData);

  return response.data;
};

export const removeCartItem = async (cartData) => {
  const response = await api.delete("/api/cart", {
    data: cartData,
  });

  return response.data;
};

export const mergeCart = async (mergeData) => {
  const response = await api.post("/api/cart/merge", mergeData);

  return response.data;
};
