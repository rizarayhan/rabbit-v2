import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useProductDetails } from "../../hooks/useProductDetails";
import { useUpdateProduct } from "../../hooks/useAdminProducts";
import { useUploadImage } from "../../hooks/useUpload";

const EditProductPage = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: product, isLoading, error } = useProductDetails(id);
  const { mutateAsync: updateProductMutation, isPending } = useUpdateProduct();
  const { mutateAsync: uploadImageMutation, isPending: isUploading } =
    useUploadImage();

  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [],
  });

  useEffect(() => {
    if (product) {
      setProductData(product);
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleImageUpload = async (e) => {
    try {
      const file = e.target.files[0];

      if (!file) return;

      const formData = new FormData();
      formData.append("image", file);

      const data = await uploadImageMutation(formData);

      setProductData((prev) => ({
        ...prev,
        images: [
          ...prev.images,
          {
            url: data.imageUrl,
            altText: "",
          },
        ],
      }));
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateProductMutation({
        id,
        productData,
      });

      navigate("/admin/products");
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <p>Loading...</p>;

  if (error) {
    return <p>Error loading product</p>;
  }

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Product Name</label>
          <input
            type="text"
            name="name"
            value={productData.name}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-md py-2"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Description</label>
          <textarea
            name="description"
            value={productData.description}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-md p-2"
            rows={4}
            required
          ></textarea>
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Price</label>
          <input
            type="number"
            name="price"
            value={productData.price}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Count in Stock</label>
          <input
            type="number"
            name="countInStock"
            value={productData.countInStock}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">SKU</label>
          <input
            type="text"
            name="sku"
            value={productData.sku}
            onChange={handleChange}
            className="w-full border border-gray-200 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Sizes (comma-separated)
          </label>
          <input
            type="text"
            name="sizes"
            value={productData.sizes.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              })
            }
            className="w-full border border-gray-200 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">
            Colors (comma-separated)
          </label>
          <input
            type="text"
            name="colors"
            value={productData.colors.join(", ")}
            onChange={(e) =>
              setProductData({
                ...productData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              })
            }
            className="w-full border border-gray-200 rounded-md p-2"
            required
          />
        </div>
        <div className="mb-6">
          <label className="block font-semibold mb-2">Upload Image</label>
          <input type="file" onChange={handleImageUpload} />

          {isUploading && <p>Uploading...</p>}

          <div className="flex gap-4 mt-4">
            {productData.images.map((image, index) => (
              <div key={index}>
                <img
                  src={image.url}
                  alt={image.altText || "Product Image"}
                  className="w-20 h-20 object-cover rounded-md shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          {isPending ? "Updating..." : "Update Product"}
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
