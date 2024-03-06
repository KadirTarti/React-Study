import React from 'react'
import HastaEkle from '../components/HastaEkle'
import HastaListe from '../components/HastaListe'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
  return (
    <div>
    <Header/>
    <HastaEkle/>
    <HastaListe/>
    <Footer/>
    </div>
  )
}

export default Home

// import React, { useState } from "react";
// import GorevEkle from "../components/GorevEkle";
// import GorevleriGoster from "../components/GorevleriGoster";

// import Data from '../helper/Data'
// import Footer from "../components/Footer";

// const Home = () => {

//   const [todos, setTodos] =useState(JSON.parse(localStorage.getItem('gorevler')) || Data)


 
//   return (
//     <div>
//       <GorevEkle todos={todos} setTodos={setTodos}/>
//       <GorevleriGoster todos={todos} setTodos={setTodos}/>
//       <Footer/>
//     </div>
//   );
// };

// export default Home;
