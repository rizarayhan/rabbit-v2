import { useState } from "react";
import registerImage from "../assets/register.webp";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useRegister } from "../hooks/useRegister";
import { useAuthStore } from "../store/authStore";
import { useCartStore } from "../store/cartStore";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const guestId = useAuthStore((state) => state.guestId);

  const cart = useCartStore((state) => state.cart);
  const mergeCart = useCartStore((state) => state.mergeCart);

  const { mutateAsync: register, isPending, isError, error } = useRegister();

  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const registerData = await register({ name, email, password });

      if (cart?.products?.length > 0 && guestId) {
        await mergeCart({ guestId, user: registerData.user._id });
      }

      navigate(isCheckoutRedirect ? "/checkout" : "/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="flex">
      {/* Register form */}
      <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-8 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md bg-white p-8 border rounded-lg shadow-md"
        >
          <div className="flex justify-center mb-6">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="text-2xl text-center font-bold mb-6">Hey there!👋🏼</h2>
          <p className="text-center mb-6">
            Enter your name, username and password to register.
          </p>

          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter your name"
              onChange={(e) => setName(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              placeholder="Enter your email address"
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              placeholder="Enter your password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border rounded p-2"
              required
            />
          </div>
          <button
            disabled={isPending}
            type="submit"
            className="w-full bg-black hover:bg-gray-800 text-white font-semibold p-2 rounded-lg mb-4 cursor-pointer"
          >
            {isPending ? "Loading..." : "Sign Up"}
          </button>
          <p className="text-center text-sm">
            Have an account?{" "}
            <Link
              to={`/login?redirect=${encodeURIComponent(redirect)}`}
              className="text-blue-500"
            >
              Login
            </Link>
          </p>
          {isError && <p>{error.message}</p>}
        </form>
      </div>

      {/* Register image */}
      <div className="hidden md:block w-1/2 bg-gray-800">
        <img
          src={registerImage}
          alt="Register Image"
          className="h-[750px] w-full object-cover"
        />
      </div>
    </div>
  );
};

export default Register;
