import React, { useState } from "react";
import GorevEkle from "../components/GorevEkle";
import GorevleriGoster from "../components/GorevleriGoster";

import Data from '../helper/Data'

const Home = () => {

  const [todos, setTodos] =useState(Data)


 
  return (
    <div>
      {/* <GorevEkle/> */}
      <GorevleriGoster todos={todos} setTodos={setTodos}/>
    </div>
  );
};

export default Home;
