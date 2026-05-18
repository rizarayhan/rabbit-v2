import { useMutation } from "@tanstack/react-query";
import { useAuthStore } from "../store/authStore";
import { loginUser } from "../api/authApi";

export const useLogin = () => {
  const setAuth = useAuthStore((state) => state.setAuth);

  return useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      setAuth(data);
    },

    onError: (error) => {
      console.log(error);
    },
  });
};
