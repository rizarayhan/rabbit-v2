import { useMutation } from "@tanstack/react-query";
import { createCheckout } from "../api/checkoutApi";

export const useCheckout = () => {
  return useMutation({
    mutationFn: createCheckout,
  });
};
