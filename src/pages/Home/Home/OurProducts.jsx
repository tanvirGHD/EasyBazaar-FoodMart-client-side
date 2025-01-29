import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaHeart, FaCartPlus, FaEye } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TrendingProducts = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/products.json")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const remainingProducts = products.slice(6);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // একবারে ৩টি কলাম দেখাবে
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl font-semibold my-8">Our Products</h2>

      {remainingProducts.length > 0 && (
        <div className="mt-10 px-4">
          <Slider {...sliderSettings}>
            {/* ৩টি কলামের প্রতিটিতে ২টি করে প্রোডাক্ট দেখাবে */}
            {remainingProducts.map((_, index) => {
              if (index % 2 === 0 && index + 1 < remainingProducts.length) {
                return (
                  <div key={index} className="px-2">
                    <div className="grid grid-rows-2 gap-4">
                      {[remainingProducts[index], remainingProducts[index + 1]].map(
                        (product) => (
                          <div key={product.id} className="relative group bg-white shadow-lg rounded-lg overflow-hidden h-96">
                            <div className="product-image relative">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-60 object-cover"
                              />
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-opacity-50 p-2 rounded-md">
                                <button className="p-2 bg-white rounded-full text-xl text-gray-700 hover:text-red-500">
                                  <FaHeart />
                                </button>
                                <button className="p-2 bg-white rounded-full text-xl text-gray-700 hover:text-green-500">
                                  <FaCartPlus />
                                </button>
                                <button className="p-2 bg-white rounded-full text-xl text-gray-700 hover:text-blue-500">
                                  <FaEye />
                                </button>
                              </div>
                            </div>
                            <div className="p-4">
                              <h3 className="text-xl font-semibold">{product.name}</h3>
                              <p className="text-gray-600">Price: ${product.price}</p>
                              <p className="text-gray-500">{product.description}</p>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                );
              }
              return null;
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default TrendingProducts;
