import { useEffect, useState } from "react";
import Slider from "react-slick";
import { FaHeart, FaCartPlus, FaEye } from "react-icons/fa";
import { Rating } from "@smastrom/react-rating"; // Importing the Rating component
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@smastrom/react-rating/style.css"; // Import styles for the rating component
import useAuth from "../../../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";

const OurProducts = () => {
  const {user} = useAuth();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);



  const handleAddToCart =  (product) => {
    if(user && user.email){
      //TODO: send cart item to the database
      const cartItem = {
        menuId: product._id, 
        email: user.email,
        name: product.name,
        image: product.image,
        price: product.price,
        weight: product.weight,
    };
      axios.post('http://localhost:5000/carts', cartItem)
      .then(res =>{
        console.log(res.data)
        if(res.data.insertedId){
          toast.success(`${product.name} added to your cart`);
        }
      })
    }
    else{
      Swal.fire({
        title: "You are not Logged In?",
        text: "Please login to add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login!"
      }).then((result) => {
        if (result.isConfirmed) {
         // sent the user to the login page 
         navigate('/login', {sate: {from: location}});
        }
      });
    }
  }


  // Slice the first 6 products
  const remainingProducts = products.slice(6);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Default: Show 3 items at a time
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024, // For medium-sized devices (tablets)
        settings: {
          slidesToShow: 2, // Show 2 items on tablets
        },
      },
      {
        breakpoint: 640, // For mobile devices
        settings: {
          slidesToShow: 1, // Show 1 item on mobile
        },
      },
    ],
  };

  return (
    <div className="container mx-auto">
      <h2 className="text-center text-3xl font-semibold my-8">Our Products</h2>

      {remainingProducts.length > 0 && (
        <div className="mt-10 px-4">
          <Slider {...sliderSettings}>
            {/* Render product pairs in a grid layout */}
            {remainingProducts.map((product, index) => {
              // Create pairs of products to show 2 per slide
              if (index % 2 === 0 && index + 1 < remainingProducts.length) {
                return (
                  <div key={index} className="px-2">
                    <div className="grid grid-rows-2 gap-4">
                      {[remainingProducts[index], remainingProducts[index + 1]].map(
                        (product) => (
                          <div
                            key={product.id}
                            className="relative group bg-white shadow-lg rounded-lg overflow-hidden"
                          >
                            <div className="product-image relative">
                              <img
                                src={product.image}
                                alt={product.name}
                                className="w-full h-60 object-cover"
                              />
                              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-opacity-50 p-2 rounded-md">
                                <button className="p-2 cursor-pointer bg-white rounded-full text-xl text-gray-700 hover:text-red-500">
                                  <FaHeart />
                                </button>
                                {/* add card */}
                                <button
                                  onClick={() => handleAddToCart(product)}
                                 className="p-2 cursor-pointer bg-white rounded-full text-xl text-gray-700 hover:text-green-500">
                                  <FaCartPlus />
                                </button>
                                <button className="p-2 cursor-pointer bg-white rounded-full text-xl text-gray-700 hover:text-blue-500">
                                  <FaEye />
                                </button>
                              </div>
                            </div>
                            <div className="p-4 space-y-1">
                              <h3 className="text-xl font-semibold">{product.name}</h3>
                              <p className="text-gray-600">Price: ${product.price}</p>

                              {/* Display dynamic star rating */}
                              <div className="flex items-center justify-start">
                                <Rating
                                  value={product.rating} // Set product's rating
                                  readOnly // Makes it non-interactive
                                  className="text-yellow-400 h-6 w-7 mr-25 md:mr-44" // Added margin-right to create gap between stars
                                />
                              </div>
                            </div>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                );
              }
              return null; // Return null for items not forming a pair
            })}
          </Slider>
        </div>
      )}
    </div>
  );
};

export default OurProducts;
