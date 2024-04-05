import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

const Home = () => {
  return (
    <Container
      style={{ background: "gray", height: "100vh", maxWidth: "500px" }}
    >
      <Typography variant="h3" component="h1" align="center" color="primary">
        h1. Heading
      </Typography>

      <Typography
        variant="h3"
        component="h1"
        align="center"
        color="secondary"
        mt={5}
      >
        Mui Elements
      </Typography>

      <Typography
        variant="body1"
        align="justify"
        mt={5}
        sx={{ bgcolor: "red", border: "3px solid blue", color: "white" }}
      >
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium
        culpa consequatur cum voluptatem ipsum illum impedit possimus quam nihil
        saepe! Rem itaque deserunt odio repudiandae nulla. Praesentium non
        commodi tenetur cum porro exercitationem temporibus obcaecati laboriosam
        sed. Assumenda, in debitis.
      </Typography>
    </Container>
  );
};

export default Home;
