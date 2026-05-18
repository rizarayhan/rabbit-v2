import { useQuery } from "@tanstack/react-query";
import { getCart } from "../api/cartApi";

export const useCart = ({ userId, guestId }) => {
  return useQuery({
    queryKey: ["cart", userId, guestId],
    queryFn: () =>
      getCart({
        userId,
        guestId,
      }),
    enabled: !!guestId || !!userId,
  });
};
