import Banner from "./Banner";
import Category from "./Category";
import Offers from "./Offers";
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
        </div>
    );
};

export default Home;