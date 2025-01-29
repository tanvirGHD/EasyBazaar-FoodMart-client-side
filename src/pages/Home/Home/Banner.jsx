import { useState, useEffect } from 'react';
import banner1 from '../../../assets/01.jpg';
import banner2 from '../../../assets/02.jpg';
import banner3 from '../../../assets/03.png'; 

const Banner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const banners = [banner1, banner2, banner3];

    // Function to go to the next image
    const nextBanner = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    // Function to go to the previous image
    const prevBanner = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + banners.length) % banners.length);
    };

    // Automatically change banner every 3 seconds
    useEffect(() => {
        const interval = setInterval(nextBanner, 3000); // Change image every 3 seconds
        return () => clearInterval(interval); // Cleanup on component unmount
    }, []);

    return (
        <div className="relative">
            <div className="w-full h-[300px] md:h-[700px] overflow-hidden">
                <img
                    src={banners[currentIndex]}
                    alt="Banner"
                    className="w-full h-full  transition-all duration-500"
                />
            </div>
            {/* Left Arrow */}
            <button
                onClick={prevBanner}
                className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                &#60;
            </button>
            {/* Right Arrow */}
            <button
                onClick={nextBanner}
                className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full"
            >
                &#62;
            </button>
        </div>
    );
};

export default Banner;
