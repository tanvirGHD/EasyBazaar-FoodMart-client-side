import { useState, useEffect } from "react";
import { FaHeart, FaCartPlus, FaEye } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Categorys = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceRange: { min: 0, max: 100 },
    sizes: [],
    categories: [],
    brands: [],
    availability: [],
    weights: [],  // Added weight filter
  });

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

  // Handle filter changes
  const handleFilterChange = (filterType, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterType]: value,
    }));
  };

  // Filter products based on selected criteria
  const filteredProducts = products.filter((product) => {
    return (
      product.price >= filters.priceRange.min &&
      product.price <= filters.priceRange.max &&
      (filters.sizes.length === 0 || filters.sizes.some(size => product.sizes && product.sizes.includes(size))) &&
      (filters.categories.length === 0 || filters.categories.includes(product.category)) &&
      (filters.brands.length === 0 || filters.brands.includes(product.brand)) &&
      (filters.availability.length === 0 || filters.availability.includes(product.stock > 0 ? "In stock" : "Out of stock")) &&
      (filters.weights.length === 0 || filters.weights.includes(product.weight)) // Added weight filter condition
    );
  });

  // Extract unique categories from products
  const categories = [...new Set(products.map(product => product.category))];

  return (
    <div className="category-container flex space-x-6 p-6 overflow-hidden">
      {/* Categories and Filters Section */}
      <div className="categories-and-filters w-1/5 bg-white p-6 rounded-lg shadow-lg flex-shrink-0">
        <h1 className="text-2xl font-semibold mb-6">Categories</h1>
        {categories.map((category, index) => (
          <div
            key={index}
            className="category-item py-2 px-4 my-2 bg-gray-50 rounded-lg hover:bg-gray-200 cursor-pointer transition"
            onClick={() => {
              const newCategories = filters.categories.includes(category)
                ? filters.categories.filter((c) => c !== category)
                : [...filters.categories, category];
              handleFilterChange("categories", newCategories);
            }}
          >
            <strong>{category}</strong>
          </div>
        ))}

        {/* Filters Section */}
        <div className="filters mt-8">
          {/* Price Range Filter */}
          <h2 className="text-xl font-semibold mb-4">Price Range</h2>
          <div className="price-range flex space-x-4">
            <input
              type="number"
              placeholder="From"
              value={filters.priceRange.min}
              onChange={(e) =>
                handleFilterChange("priceRange", {
                  ...filters.priceRange,
                  min: parseInt(e.target.value, 10),
                })
              }
              className="w-1/2 p-2 border border-gray-300 rounded-lg"
            />
            <input
              type="number"
              placeholder="To"
              value={filters.priceRange.max}
              onChange={(e) =>
                handleFilterChange("priceRange", {
                  ...filters.priceRange,
                  max: parseInt(e.target.value, 10),
                })
              }
              className="w-1/2 p-2 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Weight (KG) Filter */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Weight (KG)</h2>
          <div className="weight-filter space-y-2">
            {["1", "2", "3", "5", "10"].map((weight, index) => (
              <label key={index} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.weights.includes(weight)}
                  onChange={(e) => {
                    const newWeights = e.target.checked
                      ? [...filters.weights, weight]
                      : filters.weights.filter((w) => w !== weight);
                    handleFilterChange("weights", newWeights);
                  }}
                  className="mr-2"
                />
                <strong>{weight} KG</strong>
              </label>
            ))}
          </div>

          {/* Availability Filter */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Availability</h2>
          <div className="availability-filter space-y-2">
            {["In stock", "Out of stock"].map((availability, index) => (
              <label key={index} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.availability.includes(availability)}
                  onChange={(e) => {
                    const newAvailability = e.target.checked
                      ? [...filters.availability, availability]
                      : filters.availability.filter((a) => a !== availability);
                    handleFilterChange("availability", newAvailability);
                  }}
                  className="mr-2"
                />
                <strong>{availability}</strong>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Products List Section */}
      <div className="product-list w-3/4 bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-6">{filteredProducts.length} Products</h2>
        <div className="product-items grid grid-cols-3 gap-6">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
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
                      value={product.rating}
                      readOnly
                      className="text-yellow-400 h-6 w-7 mr-25 md:mr-44"
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>No products match the selected filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categorys;
