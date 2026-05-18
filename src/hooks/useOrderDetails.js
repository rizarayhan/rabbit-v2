import { useQuery } from "@tanstack/react-query";
import { getOrderDetails } from "../api/orderApi";

export const useOrderDetails = (orderId) => {
  return useQuery({
    queryKey: ["order-details", orderId],
    queryFn: () => getOrderDetails(orderId),
    enabled: !!orderId,
  });
};
