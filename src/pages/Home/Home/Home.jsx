import Banner from "./Banner";
import Offers from "./Offers";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="w-7/12 mx-auto">
            <Offers></Offers>
            </div>
        </div>
    );
};

export default Home;