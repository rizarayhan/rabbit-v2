import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import { useBestSellerProducts } from "../hooks/useBestSellerProducts";
import { useProducts } from "../hooks/useProducts";

const Home = () => {
  const { data: bestSeller, isLoading: isLoadingBestSeller } =
    useBestSellerProducts();
  const { data: products, isLoading } = useProducts({
    gender: "Women",
    category: "Bottom Wear",
    limit: 8,
  });
  return (
    <div>
      {/* Hero */}
      <Hero />
      {/* Gender Collection */}
      <GenderCollectionSection />
      {/* New Arrivals */}
      <NewArrivals />
      {/* Best Seller */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      {!isLoadingBestSeller ? (
        <ProductDetails productId={bestSeller._id} />
      ) : (
        <p className="text-center">Loading best seller product...</p>
      )}
      {/* Top wear for women */}
      <div className="container mx-auto ">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wear for Women
        </h2>
        {!isLoading ? (
          <ProductGrid products={products} />
        ) : (
          <p className="text-center">Loading product...</p>
        )}
      </div>
      {/* Features section */}
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
