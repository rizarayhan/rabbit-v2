import Hero from "../components/Layout/Hero";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";

const placeholderProducts = [
  {
    _id: 5,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=5" }],
  },
  {
    _id: 6,
    name: "Product 2",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=6" }],
  },
  {
    _id: 7,
    name: "Product 3",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=7" }],
  },
  {
    _id: 8,
    name: "Product 4",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=8" }],
  },
  {
    _id: 9,
    name: "Product 1",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=9" }],
  },
  {
    _id: 10,
    name: "Product 2",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=10" }],
  },
  {
    _id: 11,
    name: "Product 3",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=11" }],
  },
  {
    _id: 12,
    name: "Product 4",
    price: 100,
    images: [{ url: "https://picsum.photos/500/500?random=12" }],
  },
];

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
      {/* Top wear for women */}
      <div className="container mx-auto ">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wear for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>
      {/* Features section */}
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  );
};

export default Home;
