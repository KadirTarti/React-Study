import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import ContainerSSS from "./components/styles/ContainerSSS";
import { ThemeProvider } from "styled-components";


const theme = {
  responsivlik: '724px',
  golgelendirme: '2px 2px 10px rgba(0,0,0,0.15)',
}






const App = () => {
  return (

<ThemeProvider theme={theme}>
    <ContainerSSS>
      <Header />
      <Card />
    </ContainerSSS>
</ThemeProvider>

  );
};

export default App;
