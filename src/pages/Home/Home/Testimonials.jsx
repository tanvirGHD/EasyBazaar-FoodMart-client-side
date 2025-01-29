// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper modules
import { Navigation, Autoplay } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";  

const Testimonials = () => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    fetch("/reviews.json")
      .then((res) => res.json())
      .then((data) => {
        setReviews(data);
      });
  }, []);

  return (
    <section className="my-20">
      <h2 className="text-3xl font-bold text-center my-10">What Our Customers Say</h2>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay]}
        className="mySwiper"
        spaceBetween={30} // Space between slides
        slidesPerView={2} // Show two reviews per slide
        autoplay={{
          delay: 3000, // 3 seconds delay before next slide
          disableOnInteraction: false, // Keep autoplay even when interacting with the carousel
        }}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review._id}>
            <div className="w-10/12 mx-auto flex flex-col items-center text-center space-y-4 border border-gray-300 p-4">
            <img src="https://img.icons8.com/?size=100&id=463&format=png&color=000000" className="bg-yellow-400 border p-2 rounded-full h-14 w-16"></img>
              <p className="text-3xl font-bold text-orange-400">{review.name}</p>
              <p>{review.details}</p>
              <Rating style={{ maxWidth: 100 }} value={review.rating} readOnly />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
