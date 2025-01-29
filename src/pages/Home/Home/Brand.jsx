import Marquee from 'react-fast-marquee';
import brand1 from "../../../assets/brand1.png";
import brand2 from "../../../assets/brand2.png";
import brand3 from "../../../assets/brand3.png";
import brand4 from "../../../assets/brand4.png";
import brand5 from "../../../assets/brand5.png";
import brand6 from "../../../assets/brand6.png";
import brand7 from "../../../assets/brand7.png";
import brand8 from "../../../assets/brand8.png";
import brand9 from "../../../assets/brand9.png";

const brands = [brand1, brand2, brand3, brand4, brand5, brand6, brand7, brand8, brand9];

const Brand = () => {
    return (
        <div className="my-12">
            <h2 className="text-center text-3xl font-semibold mb-8">Our Brands</h2>

            <Marquee speed={50} gradient={false} pauseOnHover loop={0}>
                <div className="flex space-x-12">
                    {brands.concat(brands).map((brand, index) => (
                        <img key={index} src={brand} alt={`Brand ${index + 1}`} className="h-24" />
                    ))}
                </div>
            </Marquee>
        </div>
    );
};

export default Brand;
