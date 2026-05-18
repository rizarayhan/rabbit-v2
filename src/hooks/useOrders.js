import { useQuery } from "@tanstack/react-query";
import { getUserOrders } from "../api/orderApi";

export const useOrders = () => {
  return useQuery({
    queryKey: ["orders"],
    queryFn: getUserOrders,
  });
};
