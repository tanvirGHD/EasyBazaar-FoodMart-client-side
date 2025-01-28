import category1 from "../../../assets/menu_1.png";
import category2 from "../../../assets/menu_2.png";
import category3 from "../../../assets/menu_3.png";
import category4 from "../../../assets/menu_4.png";
import category5 from "../../../assets/menu_5.png";
import category6 from "../../../assets/menu_6.png";
import category7 from "../../../assets/menu_7.png";
import category8 from "../../../assets/menu_8.png";

const Category = () => {
    const categories = [
        { id: 1, img: category1, name: "Category 1" },
        { id: 2, img: category2, name: "Category 2" },
        { id: 3, img: category3, name: "Category 3" },
        { id: 4, img: category4, name: "Category 4" },
        { id: 5, img: category5, name: "Category 5" },
        { id: 6, img: category6, name: "Category 6" },
        { id: 7, img: category7, name: "Category 7" },
        { id: 8, img: category8, name: "Category 8" }
    ];

    return (
        <div className="text-center pb-20">
            <h2 className="text-2xl font-bold">Shop by category</h2>
            <div className="flex justify-center gap-6 mt-6">
                {categories.map(category => (
                    <div key={category.id} className="text-center">
                        <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-md">
                            <img src={category.img} alt={category.name} className="w-20 h-20 object-contain rounded-full" />
                        </div>
                        <p className="mt-2 text-gray-600">22 Item</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Category;
