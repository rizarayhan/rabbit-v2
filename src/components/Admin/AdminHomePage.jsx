import { Link } from "react-router-dom";
import { useAdminProducts } from "../../hooks/useAdminProducts";
import { useAdminOrders } from "../../hooks/useAdminOrders";

const AdminHomePage = () => {
  const {
    data: products = [],
    isLoading: productsLoading,
    error: productsError,
  } = useAdminProducts();

  const {
    data: orders = [],
    isLoading: ordersLoading,
    error: ordersError,
  } = useAdminOrders();

  const totalOrders = orders.length;
  const totalSales = orders.reduce((acc, order) => acc + order.totalPrice, 0);

  if (productsLoading || ordersLoading) return <p>Loading...</p>;
  if (productsError) {
    return (
      <p className="text-red-500">
        Error fetching products: {productsError.message}
      </p>
    );
  }
  if (ordersError) {
    return (
      <p className="text-red-500">
        Error fetching orders: {ordersError.message}
      </p>
    );
  }
  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {/* Revenue */}
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Revenue</h2>
          <p className="text-2xl">{totalSales.toFixed(2)}</p>
        </div>
        {/* Orders */}
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-xl font-semibold">Total Orders</h2>
          <p className="text-2xl">{totalOrders}</p>
          <Link to="/admin/orders" className="text-blue-500 hover:underline">
            Manage Orders
          </Link>
        </div>
        {/* Products */}
        <div className="p-4 shadow-md rounded-lg">
          <h2 className="text-2xl font-semibold">Total Products</h2>
          <p className="text-2xl">{products.length}</p>
          <Link to="/admin/products" className="text-blue-500 hover:underline">
            Manage Products
          </Link>
        </div>
      </div>
      {/* Recent Orders */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Total</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {orders.length > 0 ? (
                orders.map((order) => (
                  <tr
                    key={order._id}
                    className="border-b border-gray-200 hover:bg-gray-50 cursor-pointer"
                  >
                    <td className="p-4">{order._id}</td>
                    <td className="p-4">{order.user?.name}</td>
                    <td className="p-4">{order.totalPrice?.toFixed(2)}</td>
                    <td className="p-4">{order.status}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={4} className="p-4 text-center text-gray-500 ">
                    No recent orders found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
