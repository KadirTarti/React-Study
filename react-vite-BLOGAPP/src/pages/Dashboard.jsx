import React, { useEffect, useState } from 'react';
import BlogCard from './BlogCard';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://38103.fullstack.clarusway.com/blogs/')
     .then(response => response.json())
     .then(data => setBlogs(data))
     .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="dashboard">
      {blogs.map(blog => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default Dashboard;