import { useState, useEffect } from "react";

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [currentPage, setCurrentPage] = useState(1); // Track current page
    const blogsPerPage = 9; // Number of blogs to display per page

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
        setCurrentPage(1); // Reset to the first page when changing categories
    };

    // Get filtered blogs based on selected category
    const filteredBlogs = selectedCategory
        ? categorizedBlogs[selectedCategory]
        : Object.values(categorizedBlogs).flat();

    // Calculate the blogs to display for the current page
    const indexOfLastBlog = currentPage * blogsPerPage;
    const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
    const currentBlogs = filteredBlogs.slice(indexOfFirstBlog, indexOfLastBlog);

    // Pagination handlers
    const nextPage = () => {
        setCurrentPage((prev) => Math.min(prev + 1, Math.ceil(filteredBlogs.length / blogsPerPage)));
    };

    const prevPage = () => {
        setCurrentPage((prev) => Math.max(prev - 1, 1));
    };

    return (
        <div className="flex flex-col md:flex-row min-h-screen ">
            {/* Category Buttons on the left */}
            <div className="w-full md:w-1/5 p-6 bg-white shadow-lg rounded-lg">
                <h2 className="text-3xl font-bold text-gray-800 mb-6">Categories</h2>
                <div className="space-y-3">
                    {/* "All Categories" Button */}
                    <button
                        onClick={() => setSelectedCategory(null)} // Show all blogs
                        className={`w-full text-left px-4 py-3 rounded-md transition-all duration-300 ${
                            selectedCategory === null
                                ? "bg-blue-500 text-white"
                                : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                        }`}
                    >
                        All Categories
                    </button>
                    {Object.keys(categorizedBlogs).map((category) => (
                        <button
                            key={category}
                            onClick={() => handleCategoryClick(category)}
                            className={`w-full text-left px-4 py-3 rounded-md transition-all duration-300 ${
                                selectedCategory === category
                                    ? "bg-blue-500 text-white"
                                    : "bg-gray-100 hover:bg-gray-200 text-gray-700"
                            }`}
                        >
                            {category}
                        </button>
                    ))}
                </div>
            </div>

            {/* Blog Cards on the right */}
            <div className="w-full md:w-3/4 p-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {currentBlogs.map((blog) => (
                        <div
                            key={blog.id}
                            className="group bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 transform hover:-translate-y-1"
                        >
                            <img
                                src={blog.image}
                                alt={blog.title}
                                className="w-full h-56 object-cover transition-transform duration-300 group-hover:scale-105"
                            />
                            <div className="p-6">
                                <h4 className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors duration-300">
                                    {blog.title}
                                </h4>
                                <p className="mt-2 text-gray-600">By {blog.author}</p>
                                <div className="flex justify-between items-center mt-4">
                                    <p className="text-sm text-gray-500">{blog.date}</p>
                                    <a
                                        href="#"
                                        className="text-blue-500 hover:text-blue-700 font-medium transition-colors duration-300"
                                    >
                                        Read More
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Pagination Controls */}
                <div className="flex justify-center mt-10 space-x-4">
                    <button
                        onClick={prevPage}
                        disabled={currentPage === 1}
                        className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Previous
                    </button>
                    <span className="text-lg font-semibold text-gray-700">
                        Page {currentPage} of {Math.ceil(filteredBlogs.length / blogsPerPage)}
                    </span>
                    <button
                        onClick={nextPage}
                        disabled={currentPage === Math.ceil(filteredBlogs.length / blogsPerPage)}
                        className="px-6 py-3 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                        Next
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Blogs;