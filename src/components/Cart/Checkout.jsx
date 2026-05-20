import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCartStore } from "../../store/cartStore";
import { useAuthStore } from "../../store/authStore";
import {
  useCreateCheckout,
  useFinalizeCheckout,
  usePayCheckout,
} from "../../hooks/useCheckout";

const Checkout = () => {
  const navigate = useNavigate();
  const cart = useCartStore((state) => state.cart);
  const user = useAuthStore((state) => state.user);
  const { mutateAsync: createCheckoutMutation, isPending: isPendingCheckout } =
    useCreateCheckout();

  const { mutateAsync: payCheckoutMutation } = usePayCheckout();
  const { mutateAsync: finalizeChekcoutMutation } = useFinalizeCheckout();

  const [shippingAddress, setShippingAddress] = useState({
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    country: "",
    phone: "",
  });

  useEffect(() => {
    if (!cart?.products?.length) {
      navigate("/");
    }
  }, [cart, navigate]);

  const handleCreateCheckout = async (e) => {
    e.preventDefault();
    try {
      const data = await createCheckoutMutation({
        checkoutItems: cart.products,
        shippingAddress,
        paymentMethod: "Paypal",
        totalPrice: cart.totalPrice,
      });

      await handlePaymentSuccess(data._id);
    } catch (error) {
      console.error(error);
    }
  };

  const handlePaymentSuccess = async (checkoutId) => {
    try {
      await payCheckoutMutation({ checkoutId, paymentDetails: {} });

      const order = await finalizeChekcoutMutation(checkoutId);

      navigate(`/order-confirmation/${order._id}`);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-6 py-10 tracking-tighter">
      {/* left section */}
      <div className="bg-white rounded-lg p-6">
        <h2 className="text-2xl uppercase mb-6">Checkout</h2>
        <form onSubmit={handleCreateCheckout}>
          <h3 className="text-lg mb-4">Contact Details</h3>
          <div className="mb-4">
            <label className="block text-gray-50">Email</label>
            <input
              type="email"
              value={user ? user.email : ""}
              className="w-full p-2 border border-gray-200 rounded"
              disabled
            />
          </div>
          <h3 className="text-lg mb-4">Delivery</h3>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="bloack text-gray-700">First Name</label>
              <input
                type="text"
                value={shippingAddress.firstName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    firstName: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-200 rounded"
                required
              />
            </div>
            <div>
              <label className="bloack text-gray-700">Last Name</label>
              <input
                type="text"
                value={shippingAddress.lastName}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    lastName: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-200 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="bloack text-gray-700">Address</label>
              <input
                type="text"
                value={shippingAddress.address}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    address: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-200 rounded"
                required
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label className="bloack text-gray-700">City</label>
                <input
                  type="text"
                  value={shippingAddress.city}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      city: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-200 rounded"
                  required
                />
              </div>
              <div>
                <label className="bloack text-gray-700">Postal Code</label>
                <input
                  type="text"
                  value={shippingAddress.postalCode}
                  onChange={(e) =>
                    setShippingAddress({
                      ...shippingAddress,
                      postalCode: e.target.value,
                    })
                  }
                  className="w-full p-2 border border-gray-200 rounded"
                  required
                />
              </div>
            </div>
            <div className="mb-4">
              <label className="bloack text-gray-700">Country</label>
              <input
                type="text"
                value={shippingAddress.country}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    country: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-200 rounded"
                required
              />
            </div>
            <div className="mb-4">
              <label className="bloack text-gray-700">Phone</label>
              <input
                type="number"
                value={shippingAddress.phone}
                onChange={(e) =>
                  setShippingAddress({
                    ...shippingAddress,
                    phone: e.target.value,
                  })
                }
                className="w-full p-2 border border-gray-200 rounded"
                required
              />
            </div>
            <div className="mt-6">
              <button
                disabled={isPendingCheckout}
                type="submit"
                className="w-full bg-black text-white py-3 rounded hover:bg-gray-800"
              >
                {isPendingCheckout ? "Loading..." : "Continue to Payment"}
              </button>
            </div>
          </div>
        </form>
      </div>

      {/* right section */}
      <div className="bg-gray-100 p-6 rounded-lg">
        <h3 className="text-lg mb-4">Order Summary</h3>
        <div className="border-t border-gray-200 py-4 mb-4">
          {cart.products.map((product, index) => (
            <div
              key={index}
              className="flex items-center justify-between py-2 border-b border-gray-200"
            >
              <div className="flex items-start">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-24 object-cover mr-4"
                />
                <div>
                  <h3 className="text-md">{product.name}</h3>
                  <p className="text-gray-500">Size: {product.size}</p>
                  <p className="text-gray-500">Color: {product.color}</p>
                </div>
              </div>
              <p className="text-xl">${product.price}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Subtotal</p>
          <p>${cart.totalPrice.toFixed(2)}</p>
        </div>
        <div className="flex justify-between items-center text-lg mb-4">
          <p>Shipping</p>
          <p>Free</p>
        </div>
        <div className="flex justify-between items-center text-lg border-t border-gray-200 pt-2">
          <p>Total</p>
          <p>${cart.totalPrice.toFixed(2)}</p>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
