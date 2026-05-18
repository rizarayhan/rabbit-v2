import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addToCart } from "../api/cartApi";

export const useAddToCart = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: addToCart,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["cart", variables.userId, variables.guestId],
      });
    },
  });
};
