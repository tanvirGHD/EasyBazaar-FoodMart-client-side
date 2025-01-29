import Banner from "./Banner";
import Category from "./Category";
import HotDeal from "./HotDeal";
import Offers from "./Offers";
import OurProducts from "./OurProducts";
import TrendingProducts from "./TrendingProducts";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-8/12 mx-auto">
            <Offers></Offers>
            <Category></Category>
            <TrendingProducts></TrendingProducts>
            </div>
            <HotDeal></HotDeal>
            <div className="w-8/12 mx-auto">
            <OurProducts></OurProducts>
            </div>
        </div>
    );
};

export default Home;