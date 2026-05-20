import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "../api/orderApi";
import { useAuthStore } from "../store/authStore";

export const useOrders = () => {
  const user = useAuthStore((state) => state.user);

  return useQuery({
    queryKey: ["orders"],
    queryFn: getUserOrders,
    enabled: !!user,
  });
};
