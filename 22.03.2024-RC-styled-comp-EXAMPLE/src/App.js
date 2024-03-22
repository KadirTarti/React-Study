import React from "react";
import Header from "./components/Header";
import Card from "./components/Card";
import ContainerSSS from "./components/styles/ContainerSSS";
import { ThemeProvider } from "styled-components";


const theme = {
  responsive: '724px',
  golgelendirme: '0 0 10px rgba(0,0,0,0.15)'
}






const App = () => {
  return (

<ThemeProvider>
    <ContainerSSS>
      <Header />
      <Card />
    </ContainerSSS>
</ThemeProvider>

  );
};

export default App;
