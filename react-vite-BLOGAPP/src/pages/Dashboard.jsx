import React, { useEffect, useState } from "react";
import BlogCardd from "./BlogCardd";
import { Container, Grid } from "@mui/material";

const Dashboard = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("https://38103.fullstack.clarusway.com/blogs/")
      .then((response) => response.json())
      .then((data) => setBlogs(data.data))
      .catch((error) => console.error("Error:", error));
  }, []);

  return (
    <Container maxWidth={"xl"}>
     <Grid container spacing={2} sx={{margin: 'auto'}}>
      {blogs.map((blog) => (
        <BlogCardd key={blog._id} blog={blog} /> // Her blogu bir Card bileşenine dönüştürün
      ))}
      </Grid>
    </Container>
  );
};

export default Dashboard;
