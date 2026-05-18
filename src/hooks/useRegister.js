import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../store/authStore";
import { registerUser } from "../api/authApi";

export const useRegister = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: registerUser,

    onSuccess: (data) => {
      setAuth(data);
    },

    onError: (error) => {
      console.log(error);
    },
  });
};
