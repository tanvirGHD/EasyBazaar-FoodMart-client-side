import offer1 from "../../../assets/food_11.png";
import offer2 from "../../../assets/food_17.png";

const Offers = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mt-14 mb-20">
            {/* Card 1 */}
            <div
                className="relative bg-pink-50 p-6 rounded-xl shadow-md h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${offer2})` }}
            >
                <div className="absolute top-4 left-4 bg-green-500 text-white text-sm px-3 py-1 rounded-full">
                    30% OFF
                </div>
                <div className="absolute bottom-4 left-4">
                    <h2 className="text-lg font-semibold">Vegetable eggplant</h2>
                    <p className="text-gray-600">100% fresh food</p>
                    <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg">
                        Shop now
                    </button>
                </div>
            </div>
            {/* Card 2 */}
            <div
                className="relative bg-green-50 p-6 rounded-xl shadow-md h-64 bg-cover bg-center"
                style={{ backgroundImage: `url(${offer1})` }}
            >
                <div className="absolute top-4 left-4 bg-red-500 text-white text-sm px-3 py-1 rounded-full">
                    20% OFF
                </div>
                <div className="absolute bottom-4 left-4">
                    <h2 className="text-lg font-semibold">Fresh fruit, vegetable</h2>
                    <p className="text-gray-600">on our product</p>
                    <button className="mt-4 bg-yellow-400 hover:bg-yellow-500 text-white px-4 py-2 rounded-lg">
                        Shop now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Offers;

