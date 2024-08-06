import React, { useEffect, useState } from 'react';
import { Card } from '@material-tailwind/react';
import BlogCard from './BlogCard';

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('https://38103.fullstack.clarusway.com/blogs/')
     .then(res => res.json())
     .then(data => setBlogs(data.data))
     .catch(error => console.error('Error:', error));
    }, []);
    
  return (
    <div className="dashboard">
    
        {blogs.map(blog => (

          <BlogCard key={blog._id} blog={blog} /> // Her blogu bir Card bileşenine dönüştürün
        ))}
      </div>)

};

export default Dashboard;