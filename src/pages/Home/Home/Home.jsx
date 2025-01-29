import Banner from "./Banner";
import Brand from "./Brand";
import Category from "./Category";
import Coupon from "./Coupon";
import HotDeal from "./HotDeal";
import Offers from "./Offers";
import OurProducts from "./OurProducts";
import Testimonials from "./Testimonials";
import TrendingProducts from "./TrendingProducts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="md:w-8/12 w-10/12 mx-auto">
            <Offers></Offers>
            <Category></Category>
            <TrendingProducts></TrendingProducts>
            </div>
            <HotDeal></HotDeal>
            <div className="md:w-8/12 w-10/12 mx-auto">
            <OurProducts></OurProducts>
            <Testimonials></Testimonials>
            </div>
            <Coupon></Coupon>
            <div className="md:w-8/12 w-10/12 mx-auto">
            <Brand></Brand>
            </div>
        </div>
    );
};

export default Home;