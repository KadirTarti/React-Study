import React, { useEffect, useState } from "react";
import { Card } from "@material-tailwind/react";
import BlogCard from "./BlogCard";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("https://38103.fullstack.clarusway.com/blogs/")
      .then((res) => res.json())
      .then((data) => setBlogs(data.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  const handleBlogClick = (blog) => {
    // Seçilen blog verisini state olarak aktar
    navigate("/BlogDetails", { state: { selectedBlog: blog } });
  };

  return (
    <div className="dashboard container mx-auto px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {blogs.map((blog) => (
          <BlogCard
            key={blog._id}
            blog={blog}
            onClick={() => handleBlogClick(blog)}
          /> // Her blogu bir Card bileşenine dönüştürün
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
