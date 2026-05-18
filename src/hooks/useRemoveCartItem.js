import { useMutation, useQueryClient } from "@tanstack/react-query";
import { removeCartItem } from "../api/cartApi";

export const useRemoveCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeCartItem,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["cart", variables.userId, variables.guestId],
      });
    },
  });
};
