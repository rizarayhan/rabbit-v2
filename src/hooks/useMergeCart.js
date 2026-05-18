import { useMutation, useQueryClient } from "@tanstack/react-query";
import { mergeCart } from "../api/cartApi";

export const useMergeCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: mergeCart,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["cart"],
      });
    },
  });
};
