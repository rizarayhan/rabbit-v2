import { create } from "zustand";
import {
  getCartApi,
  addToCartApi,
  updateCartItemApi,
  removeFromCartApi,
  mergeCartApi,
} from "../api/cartApi";
import { persist } from "zustand/middleware";

export const useCartStore = create(
  persist(
    (set) => ({
      cart: {
        products: [],
      },
      loading: false,
      error: null,

      getCart: async ({ userId, guestId }) => {
        try {
          set({
            loading: true,
            error: null,
          });

          const data = await getCartApi({ userId, guestId });

          set({
            cart: data,
            loading: false,
          });
        } catch (error) {
          set({
            error: error.response?.data?.message || "Failed to fetch cart",
            loading: false,
          });
        }
      },

      addToCart: async (payload) => {
        try {
          set({
            loading: true,
            error: null,
          });

          const data = await addToCartApi(payload);
          set({
            cart: data,
            loading: false,
          });

          return data;
        } catch (error) {
          set({
            error: error.response?.data?.message || "Failed to add cart",
            loading: false,
          });

          throw error;
        }
      },

      updateCartItem: async (payload) => {
        try {
          set({
            loading: true,
            error: null,
          });

          const data = await updateCartItemApi(payload);
          set({
            cart: data,
            loading: false,
          });

          return data;
        } catch (error) {
          set({
            error: error.response?.data?.message || "Failed to update cart",
            loading: false,
          });

          throw error;
        }
      },

      removeFromCart: async (payload) => {
        try {
          set({
            loading: true,
            error: null,
          });

          const data = await removeFromCartApi(payload);
          set({
            cart: data,
            loading: false,
          });

          return data;
        } catch (error) {
          set({
            error: error.response?.data?.message || "Failed to remove item",
            loading: false,
          });

          throw error;
        }
      },

      mergeCart: async (guestId, userId) => {
        try {
          set({
            loading: true,
            error: null,
          });

          const data = await mergeCartApi(guestId, userId);
          set({
            cart: data,
            loading: false,
          });

          return data;
        } catch (error) {
          set({
            error: error.response?.data?.message || "Failed to merge cart",
            loading: false,
          });

          throw error;
        }
      },

      clearCart: () => {
        set({
          cart: {
            products: [],
          },
        });
      },
    }),
    {
      name: "cart-storage",
    },
  ),
);
