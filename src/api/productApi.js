import api from "./axios";

export const getProducts = async (filters) => {
  const query = new URLSearchParams();

  Object.entries(filters).forEach(([key, value]) => {
    if (value) {
      query.append(key, value);
    }
  });

  const response = await api.get(`/api/products?${query.toString()}`);

  return response.data;
};

export const updateProduct = async ({ id, productData }) => {
  const response = await api.put(`/api/products/${id}`, productData);

  return response.data;
};

export const getProductDetails = async (id) => {
  const response = await api.get(`/api/products/${id}`);

  return response.data;
};

export const getSimilarProducts = async (id) => {
  const response = await api.get(`/api/products/similar/${id}`);

  return response.data;
};

export const getNewArrivals = async () => {
  const response = await api.get("/api/products/new-arrivals");

  return response.data;
};

export const getBestSeller = async () => {
  const response = await api.get("/api/products/best-seller");

  return response.data;
};
