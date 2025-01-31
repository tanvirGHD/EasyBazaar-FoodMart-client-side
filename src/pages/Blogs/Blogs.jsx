import { useState, useEffect } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        // Fetch data from the JSON file in the public folder
        fetch("/blogs.json")
            .then((response) => response.json())
            .then((data) => setBlogs(data));
    }, []);

    // Function to group blogs by category
    const groupByCategory = () => {
        return blogs.reduce((acc, blog) => {
            if (!acc[blog.category]) {
                acc[blog.category] = [];
            }
            acc[blog.category].push(blog);
            return acc;
        }, {});
    };

    const categorizedBlogs = groupByCategory();

    const handleCategoryClick = (category) => {
        setSelectedCategory(category === selectedCategory ? null : category); // Toggle category selection
    };

    return (
        <div className="flex flex-col md:flex-row">
            {/* Category Buttons on the left */}
            <div className="w-full md:w-1/4 p-4 bg-gray-100">
                <h2 className="text-2xl font-semibold mb-4">Categories</h2>
                <div className="space-y-2">
                    {/* "All Categories" Button */}
                    <button
                        onClick={() => setSelectedCategory(null)} // Show all blogs
                        className={`w-full text-left p-2 rounded-md hover:bg-gray-200 ${
                            selectedCategory === null ? "bg-gray-300" : ""
                        }`}
                    >
                        All Categories
                    </button>

                    {Object.keys(categorizedBlogs).map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`w-full text-left p-2 rounded-md hover:bg-gray-200 ${
                                selectedCategory === category ? "bg-gray-300" : ""
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Blog Cards on the right */}
            <div className="w-full md:w-3/4 p-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {Object.keys(categorizedBlogs)
                        .filter((category) =>
                            selectedCategory ? category === selectedCategory : true
                        )
                        .map((category) => (
                            <div key={category}>
                                <h3 className="text-2xl font-bold mb-4">{category}</h3>
                                {categorizedBlogs[category].map((blog) => (
                                    <div
                                        key={blog.id}
                                        className="border border-gray-300 p-5 rounded-lg shadow-lg transition-all duration-300 hover:shadow-xl transform hover:scale-105 h-96 overflow-hidden"
                                    >
                                        <img
                                            src={blog.image}
                                            alt={blog.title}
                                            className="w-full h-48 object-cover rounded-md mb-4"
                                        />
                                        <div className="flex flex-col justify-between h-full">
                                            <div>
                                                <h4 className="mt-4 text-xl font-semibold">{blog.title}</h4>
                                                <p className="mt-2 text-gray-600">By {blog.author}</p>
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="text-sm text-gray-500">{blog.date}</p>
                                                    </div>
                                                    <div>
                                                        <p className="text-green-500"><a href="">Details</a></p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default Blogs;
