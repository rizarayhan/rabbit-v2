import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";
import ProductGrid from "../components/Products/ProductGrid";
import FilterSidebar from "../components/Products/FilterSidebar";
import SortOption from "../components/Products/SortOption";
import { useParams, useSearchParams } from "react-router-dom";
import { useProducts } from "../hooks/useProducts";

const CollectionPage = () => {
  const { collection } = useParams();
  const [searchParams] = useSearchParams();
  const queryParams = Object.fromEntries([...searchParams]);

  const {
    data: products,
    isLoading,
    error,
  } = useProducts({
    collection,
    ...queryParams,
  });

  const sidebarRef = useRef(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleClickOutside = (e) => {
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return document.removeEventListener("mousedown", handleClickOutside);
  });

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Mobile filter button */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden border border-gray-200 p-2 flex justify-center items-center"
      >
        <FaFilter className="mr-2" /> Filters
      </button>

      {/* Sidebar filter */}
      <div
        ref={sidebarRef}
        className={`fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0
            ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        {/* Filter Sidebar */}
        <FilterSidebar />
      </div>
      <div className="grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collection</h2>

        {/* Sort Option */}
        <SortOption />

        {/* Product Grid */}
        <ProductGrid products={products} loading={isLoading} error={error} />
      </div>
    </div>
  );
};

export default CollectionPage;
