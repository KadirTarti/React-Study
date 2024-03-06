import React, { useState } from "react";
import {Data} from '../helper/Data'
import Footer from "../components/Footer";
import Doctors from "../components/Doctors";

const Home = () => {

  const [todos, setTodos] =useState(JSON.parse(localStorage.getItem('gorevler')) || Data)
 
  return (
    <div>
      <Doctors doctorArray={[]}/>
      <Footer/>
    </div>
  );
};

export default Home;
