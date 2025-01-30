import { useState, useEffect } from "react";
import { FaHeart, FaCartPlus, FaEye } from "react-icons/fa";
import Rating from "react-rating"; // Assuming you're using a third-party library for star ratings

const Categorys = () => {
  const [products, setProducts] = useState([]);
  const [filters, setFilters] = useState({
    priceFrom: "",
    priceTo: "",
    size: [],
    material: [],
    brand: [],
    availability: []
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
  const handleFilterChange = (e, category) => {
    const { value, checked } = e.target;
    setFilters(prevState => {
      const updatedFilters = { ...prevState };
      if (checked) {
        updatedFilters[category].push(value);
      } else {
        updatedFilters[category] = updatedFilters[category].filter(item => item !== value);
      }
      return updatedFilters;
    });
  };

  const filteredProducts = products.filter(product => {
    let isValid = true;

    // Price Range filter
    if (
      (filters.priceFrom && product.price < filters.priceFrom) ||
      (filters.priceTo && product.price > filters.priceTo)
    ) {
      isValid = false;
    }

    // Size filter
    if (filters.size.length > 0 && !filters.size.includes(product.size)) {
      isValid = false;
    }

    // Material filter
    if (filters.material.length > 0 && !filters.material.includes(product.material)) {
      isValid = false;
    }

    // Brand filter
    if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
      isValid = false;
    }

    // Availability filter
    if (filters.availability.length > 0 && !filters.availability.includes(product.availability)) {
      isValid = false;
    }

    return isValid;
  });

  return (
    <div className="category-container flex space-x-6 p-6 overflow-hidden">

      {/* Categories and Filters Section */}
      <div className="categories-and-filters w-1/4 bg-white p-6 rounded-lg shadow-lg flex-shrink-0">
        <h1 className="text-2xl font-semibold mb-6">Categories</h1>
        {["Fresh fruits", "Organic wine", "Organic juice", "Fresh meat"].map((category, index) => (
          <div
            key={index}
            className="category-item py-2 px-4 my-2 bg-gray-50 rounded-lg hover:bg-gray-200 cursor-pointer transition"
          >
            <strong>{category}</strong>
          </div>
        ))}

        {/* Filters Section */}
        <div className="filters mt-8">
          {/* Price Range */}
          <h2 className="text-xl font-semibold mb-4">Price Range</h2>
          <div className="price-range flex space-x-4">
            <input
              type="number"
              placeholder="From"
              className="w-1/2 p-2 border border-gray-300 rounded-lg"
              value={filters.priceFrom}
              onChange={(e) => setFilters({ ...filters, priceFrom: e.target.value })}
            />
            <input
              type="number"
              placeholder="To"
              className="w-1/2 p-2 border border-gray-300 rounded-lg"
              value={filters.priceTo}
              onChange={(e) => setFilters({ ...filters, priceTo: e.target.value })}
            />
          </div>

          {/* Size */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Size</h2>
          <div className="size-filter space-y-2">
            {["1 kg", "2 kg", "3 kg", "5 kg"].map((size) => (
              <label key={size} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value={size}
                  checked={filters.size.includes(size)}
                  onChange={(e) => handleFilterChange(e, "size")}
                  className="mr-2"
                />
                <strong>{size}</strong>
              </label>
            ))}
          </div>

          {/* Material */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Material</h2>
          <div className="material-filter space-y-2">
            {["Canada", "Germany", "Greece", "India"].map((material) => (
              <label key={material} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value={material}
                  checked={filters.material.includes(material)}
                  onChange={(e) => handleFilterChange(e, "material")}
                  className="mr-2"
                />
                <strong>{material}</strong>
              </label>
            ))}
          </div>

          {/* Brand */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Brand</h2>
          <div className="brand-filter space-y-2">
            {["Vegiat", "Retail"].map((brand) => (
              <label key={brand} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value={brand}
                  checked={filters.brand.includes(brand)}
                  onChange={(e) => handleFilterChange(e, "brand")}
                  className="mr-2"
                />
                <strong>{brand}</strong>
              </label>
            ))}
          </div>

          {/* Availability */}
          <h2 className="text-xl font-semibold mt-6 mb-4">Availability</h2>
          <div className="availability-filter space-y-2">
            {["In stock", "Out of stock"].map((availability) => (
              <label key={availability} className="flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  value={availability}
                  checked={filters.availability.includes(availability)}
                  onChange={(e) => handleFilterChange(e, "availability")}
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
                    <span className="font-semibold">SKU:</span> {product.sku}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Price:</span> ${product.price}
                  </p>
                  <p className="text-gray-700">
                    <span className="font-semibold">Discount:</span> {product.discount}%
                  </p>
                  <p className="text-gray-500">{product.description}</p>
                  <div className="rating">
                    <Rating
                      initialRating={product.rating}
                      readonly
                      emptySymbol="fa fa-star-o"
                      fullSymbol="fa fa-star"
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div>No products found matching your filters</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Categorys;
