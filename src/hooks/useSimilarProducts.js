import { useQuery } from "@tanstack/react-query";
import { getSimilarProducts } from "../api/productApi";

export const useSimilarProducts = (id) => {
  return useQuery({
    queryKey: ["similar-products", id],
    queryFn: () => getSimilarProducts(id),
    enabled: !!id,
  });
};
