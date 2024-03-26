import React from "react";
import Navbar from "../components/navbar/Navbar";
import Login from "../pages/login/Login";
import Home from "../pages/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>

      <Route path='/' element={<Login />} />
      <Route path='/home' element={<Home/>} />
      <Route path='/' element={<Login />} />


      </Routes>
        
    </BrowserRouter>
  );
};

export default AppRouter;
