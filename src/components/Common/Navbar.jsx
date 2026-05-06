import { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Searchbar from "./Searchbar";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };
  return (
    <>
      <nav className="container mx-auto flex text-center justify-between px-6 py-4">
        {/* Left - Logo */}
        <div>
          <Link to="/" className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>

        {/* Center - Navigation */}
        <div className="hidden md:flex text-gray-700 text-sm font-medium space-x-6 items-center">
          <Link to="#" className="hover:text-black uppercase">
            Men
          </Link>
          <Link to="#" className="hover:text-black uppercase">
            Women
          </Link>
          <Link to="#" className="hover:text-black uppercase">
            Top Wear
          </Link>
          <Link to="#" className="hover:text-black uppercase">
            Bottom Wear
          </Link>
        </div>

        {/* Right - Icons */}
        <div className="flex items-center space-x-4">
          <Link
            to="/admin"
            className="bg-black block text-white text-sm rounded px-2 hover:bg-gray-700"
          >
            Admin
          </Link>
          <Link to="/profile">
            <HiOutlineUser className="h-6 w-6 hover:text-black text-gray-700" />
          </Link>
          <button className="relative cursor-pointer">
            <HiOutlineShoppingBag className="h-6 w-6 hover:text-black text-gray-700" />
            <span className="absolute -top-1 bg-rabbit text-white text-xs rounded-full px-2 py-0.5">
              4
            </span>
          </button>

          {/* Searchbar */}
          <div className="overflow-hidden">
            <Searchbar />
          </div>

          {/* Mobile toggle nav */}
          <button onClick={toggleNav} className="md:hidden cursor-pointer">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700 hover:text-black" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <div
        className={`w-3/4 sm:w-1/2 bg-white h-full fixed md:hidden top-0 left-0 shadow-lg transform transition-transform duration-300 z-50
        ${isNavOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNav} className="cursor-pointer">
            <IoMdClose className="h-6 w-6 text-gray-700 hover:text-black" />
          </button>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold mb-4">Menu</h2>
          <nav className="space-y-4">
            <Link
              to="#"
              onClick={toggleNav}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to="#"
              onClick={toggleNav}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to="#"
              onClick={toggleNav}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to="#"
              onClick={toggleNav}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
