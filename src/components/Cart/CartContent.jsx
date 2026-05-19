import { RiDeleteBin2Line } from "react-icons/ri";
import { useCartStore } from "../../store/cartStore";
import { useAuthStore } from "../../store/authStore";

const CartContent = () => {
  const cart = useCartStore((state) => state.cart);
  const user = useAuthStore((state) => state.user);
  const guestId = useAuthStore((state) => state.guestId);

  console.log("cart: ", cart);

  const updateCartItem = useCartStore((state) => state.updateCartItem);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const handleUpdateCartItem = async (
    productId,
    delta,
    quantity,
    size,
    color,
  ) => {
    const newQuantity = quantity + delta;

    if (newQuantity >= 1) {
      await updateCartItem({
        productId,
        quantity: newQuantity,
        guestId,
        userId: user?._id,
        size,
        color,
      });
    }
  };

  const handleRemoveFromCart = async (productId, size, color) => {
    await removeFromCart({
      productId,
      guestId,
      userId: user?._id,
      size,
      color,
    });
  };

  return (
    <div>
      {cart?.products?.map((product) => (
        <div
          key={product.productId}
          className="flex items-start justify-between py-4 border-b"
        >
          <div className="flex items-start">
            <img
              src={product.image}
              alt={product.name}
              className="w-20 h-24 object-cover mr-4 rounded"
            />
            <div>
              <h3>{product.name}</h3>
              <p className="text-sm text-gray-500">
                size: {product.size} | color: {product.color}
              </p>
              <div className="flex items-center mt-2">
                <button
                  onClick={() =>
                    handleUpdateCartItem(
                      product.productId,
                      -1,
                      product.quantity,
                      product.size,
                      product.color,
                    )
                  }
                  className="border rounded px-2 py-1 text-xl font-medium"
                >
                  -
                </button>
                <span className="mx-4">{product.quantity}</span>
                <button
                  onClick={() =>
                    handleUpdateCartItem(
                      product.productId,
                      1,
                      product.quantity,
                      product.size,
                      product.color,
                    )
                  }
                  className="border rounded px-2 py-1 text-xl font-medium"
                >
                  +
                </button>
              </div>
            </div>
          </div>
          <div>
            <p>${product.price}</p>
            <button
              onClick={() =>
                handleRemoveFromCart(
                  product.productId,
                  product.size,
                  product.color,
                )
              }
            >
              <RiDeleteBin2Line className="h-6 w-6 mt-2 text-red-600" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartContent;
