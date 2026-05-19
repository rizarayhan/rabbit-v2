import { useQuery } from "@tanstack/react-query";
import { getNewArrivals } from "../api/productApi";

export const useNewArrivalsProducts = () => {
  return useQuery({
    queryKey: ["new-arrivals"],
    queryFn: getNewArrivals,
  });
};
