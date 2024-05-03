import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Redoc from 'redoc';


function Categories() {
  
  const specUrl = 'https://38103.fullstack.clarusway.com/Categories';

  return (
    <Box sx={{ display: "flex" }}>
      
          <Redoc specUrl={specUrl} />

          <Button color="inherit">Logout</Button>
      </Box>
  );
}

export default Categories;
