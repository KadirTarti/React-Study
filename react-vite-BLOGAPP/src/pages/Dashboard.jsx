import React, { useEffect, useState } from "react";
import BlogCardd from "./BlogCardd";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://38103.fullstack.clarusway.com/blogs/")
      .then((response) => response.json())
      .then((data) => setBlogs(data.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <div>
      {blogs.map((blog) => (
        <BlogCardd key={blog._id} blog={blog} /> // Her blogu bir Card bileşenine dönüştürün
      ))}
    </div>
  );
};

export default Dashboard;
