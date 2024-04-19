import React from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../pages/Main";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MovieDetail from "../pages/MovieDetail";
import Navbar from "../components/Navbar";
import PrivateRouter from "./PrivateRouter";
import NotFound from "../pages/NotFound";

const AppRouter = () => {
  return( 
    <>
       <Navbar />
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/login" element={<Login/>} />
        {/* <Route path="/details/:id" element={<MovieDetail/>} /> */}
        <Route element={<PrivateRouter />}>
          <Route path="/details/:id" element={<MovieDetail />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
};

export default AppRouter;
