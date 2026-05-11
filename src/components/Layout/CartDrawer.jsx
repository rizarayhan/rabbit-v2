import { IoMdClose } from "react-icons/io";
import CartContent from "../Cart/CartContent";

const CartDrawer = ({ drawerOpen, toggleCartDrawer }) => {
  return (
    <div
      className={`fixed top-0 right-0 w-3/4 sm:w-1/2 md:w-100 h-full bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50
        ${drawerOpen ? "translate-x-0" : "translate-x-full"}`}
    >
      {/* close button */}
      <div
        onClick={toggleCartDrawer}
        className="flex justify-end p-4 cursor-pointer"
      >
        <IoMdClose className="h-6 w-6" />
      </div>

      {/* cart content */}
      <div className="grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Your Cart</h2>
        {/* component for Cart Content */}
        <CartContent />
      </div>

      {/* Checkout button fixed at the bottom */}
      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full bg-black text-white py-3 rounded-lg font-semibold transition hover:bg-gray-800 cursor-pointer">
          Checkout
        </button>
        <p className="text-sm tracking-tighter text-gray-500 mt-2 text-center ">
          Shipping, taxes, and discount codes calculated at checkout.
        </p>
      </div>
    </div>
  );
};

export default CartDrawer;
