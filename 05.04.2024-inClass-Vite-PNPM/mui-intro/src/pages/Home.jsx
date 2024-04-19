import React from "react";
import Container from "@mui/material/Container";
import MuiElements from "../components/MuiElements";
import InputElement from "../components/InputElement";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <Container>
        {/* <MuiElements/> */}
        <InputElement/>
        <Navbar/>
    </Container>
       );
};

export default Home;
