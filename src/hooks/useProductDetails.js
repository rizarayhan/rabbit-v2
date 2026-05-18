import { useQuery } from "@tanstack/react-query";
import { getProductDetails } from "../api/productApi";

export const useProductDetails = (id) => {
  return useQuery({
    queryKey: ["product", id],
    queryFn: () => getProductDetails(id),

    enabled: !!id,
  });
};
