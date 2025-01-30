import { useState, useEffect } from "react";
import { FaHeart, FaCartPlus, FaEye } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating"; 

import "@smastrom/react-rating/style.css";

const Categorys = () => {
  const [products, setProducts] = useState([]);

  // Fetch products from JSON file
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch("/products.json");
        if (!response.ok) throw new Error("Failed to fetch products");
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <div className="category-container flex space-x-6 p-6 overflow-hidden">
      {/* Categories and Filters Section */}
      <div className="categories-and-filters w-1/4 bg-white p-6 rounded-lg shadow-lg flex-shrink-0">
        <h1 className="text-2xl font-semibold mb-6">Categories</h1>
        {["Fresh fruits", "Organic wine", "Organic juice", "Fresh meat"].map(
          (category, index) => (
            <div
              key={index}
              className="category-item py-2 px-4 my-2 bg-gray-50 rounded-lg hover:bg-gray-200 cursor-pointer transition"
            >
              <strong>{category}</strong>
            </div>
          )
        )}

        {/* Filters Section */}
        <div className="filters mt-8">
          <h2 className="text-xl font-semibold mb-4">Price Range</h2>
          <div className="price-range flex space-x-4">
            <input
              type="number"
              placeholder="From"
              className="w-1/2 p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              placeholder="To"
              className="w-1/2 p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Size Filter */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Size</h2>
          <div className="size-filter space-y-2">
            {["1 kg", "2 kg", "3 kg", "5 kg"].map((size, index) => (
              <label key={index} className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" />
                <strong>{size}</strong>
              </label>
            ))}
          </div>

          {/* Material Filter */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Material</h2>
          <div className="material-filter space-y-2">
            {["Canada", "Germany", "Greece", "India"].map((material, index) => (
              <label key={index} className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" />
                <strong>{material}</strong>
              </label>
            ))}
          </div>

          {/* Brand Filter */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Brand</h2>
          <div className="brand-filter space-y-2">
            {["Vegiat", "Retail"].map((brand, index) => (
              <label key={index} className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" />
                <strong>{brand}</strong>
              </label>
            ))}
          </div>

          {/* Availability Filter */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Availability</h2>
          <div className="availability-filter space-y-2">
            {["In stock", "Out of stock"].map((availability, index) => (
              <label key={index} className="flex items-center cursor-pointer">
                <input type="checkbox" className="mr-2" />
                <strong>{availability}</strong>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Products List Section */}
      <div className="product-list w-3/4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">{products.length} Products</h2>
        <div className="product-items grid grid-cols-3 gap-6">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                className="product-card bg-white rounded-lg overflow-hidden hover:shadow-xl transition-all"
              >
                <div className="product-image relative">
                  <img
                    src={product.image || "/fallback-image.jpg"}
                    alt={product.name}
                    className="w-full h-60 object-cover"
                  />
                  <div className="absolute top-4 right-4 flex space-x-2">
                    <button className="wishlist-btn p-2 bg-white rounded-full text-xl text-gray-700 hover:text-red-500">
                      <FaHeart />
                    </button>
                    <button className="add-to-cart-btn p-2 bg-white rounded-full text-xl text-gray-700 hover:text-green-500">
                      <FaCartPlus />
                    </button>
                    <button className="quick-view-btn p-2 bg-white rounded-full text-xl text-gray-700 hover:text-blue-500">
                      <FaEye />
                    </button>
                  </div>
                </div>
                <div className="product-details p-4 space-y-2">
                  <h3 className="text-xl font-bold">{product.name}</h3>
                  <p className="text-gray-600 text-sm">
                    Price: <strong>€{product.price}</strong>
                  </p>
                  <div className="flex items-center">
                    <Rating
                      value={product.rating} // Set product's rating
                      readOnly // Makes it non-interactive
                      className="text-yellow-400 h-6 w-7 mr-25 md:mr-44" 
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading products...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categorys;
