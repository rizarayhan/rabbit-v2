import { useMutation } from "@tanstack/react-query";
import {
  createCheckout,
  finalizeCheckout,
  payCheckout,
} from "../api/checkoutApi";

export const useCreateCheckout = () => {
  return useMutation({
    mutationFn: createCheckout,
  });
};

export const usePayCheckout = () => {
  return useMutation({
    mutationFn: payCheckout,
  });
};

export const useFinalizeCheckout = () => {
  return useMutation({
    mutationFn: finalizeCheckout,
  });
};
