import { useQuery } from "@tanstack/react-query";
import { getBestSeller } from "../api/productApi";

export const useBestSellerProducts = () => {
  return useQuery({
    queryKey: ["best-seller"],
    queryFn: getBestSeller,
  });
};
