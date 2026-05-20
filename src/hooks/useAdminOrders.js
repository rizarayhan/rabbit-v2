import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  editOrderStatus,
  getAllOrders,
  removeOrder,
} from "../api/adminOrderApi";

export const useAdminOrders = () => {
  return useQuery({
    queryKey: ["admin-orders"],
    queryFn: getAllOrders,
  });
};

export const useUpdateOrderStatus = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: editOrderStatus,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-orders"],
      });
    },
  });
};

export const useDeleteOrder = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: removeOrder,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["admin-orders"],
      });
    },
  });
};
