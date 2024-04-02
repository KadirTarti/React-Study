import React from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";

const AppRouter = () => {
  return( 
    <BrowserRouter>
    <Routes>
    <Route path='/' element={<Main/>} />
    <Route path='/register' element={<Register/>} />
    <Route path='/login' element={<Login/>} />
    <Route path='/details:id' element={<MovieDetail/>} />

    </Routes>
    </BrowserRouter>
  )
};

export default AppRouter;
