import React from 'react'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Container from "@mui/material/Container";


const MuiElements = () => {
  return (
    <Container
     style={{ background: "wheat", height: "100vh", maxWidth: "1500px" }}
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

      <Box 
      display='flex'
      justifyContent='center'
      alignItems='center'
      gap={3}
      m={7}
      >
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined">Outlined</Button>
      </Box>


 <Stack
        direction={{ xs: 'column', sm: 'row' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
        gap={3}
        m={5}
      >
      <Button variant="text">Text</Button>
        <Button variant="contained" color='error'>Contained</Button>
        <Button variant="outlined">Outlined</Button>

        </Stack>
    
    </Container>
  )
}

export default MuiElements