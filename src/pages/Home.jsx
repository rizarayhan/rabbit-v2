import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";

const Home = () => {
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
      <ProductDetails />
      {/* Also like */}
      {/* Top wear for women */}
      {/* Features section */}
    </div>
  );
};

export default Home;
