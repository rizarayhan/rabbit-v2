import { create } from "zustand";
import { persist } from "zustand/middleware";

const createGuestId = () => `guest_${new Date().getTime()}`;

export const useAuthStore = create(
  persist(
    (set) => ({
      user: null,
      token: null,
      guestId: createGuestId(),

      setAuth: (data) =>
        set({
          user: data.user,
          token: data.token,
        }),
      logout: () =>
        set({
          user: null,
          token: null,
          guestId: createGuestId(),
        }),

      generateGuestId: () =>
        set({
          guestId: createGuestId(),
        }),
    }),
    {
      name: "auth-storage",

      partialize: (state) => ({
        user: state.user,
        token: state.token,
        guestId: state.guestId,
      }),
    },
  ),
);
