import { useMutation } from "@tanstack/react-query";
import { updateProduct } from "../api/productApi";

export const useUpdateProduct = () => {
  return useMutation({
    mutationFn: updateProduct,
  });
};
