import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../api/productApi";

export const useProducts = (filters) => {
  return useQuery({
    queryKey: ["products", filters],
    queryFn: () => getProducts(filters),
  });
};
