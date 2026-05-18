import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateCartItem } from "../api/cartApi";

export const useUpdateCartItem = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: updateCartItem,
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({
        queryKey: ["cart", variables.userId, variables.guestId],
      });
    },
  });
};
