import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Categories";
import Home from "../pages/Home";
import Travel from "../pages/Travel";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />     
        <Route path="" element={<PrivateRouter />}>
          {/* <Route path="details" element={<Details />} /> */}
          {/* <Route path="myblog" element={<MyBlog />} /> */}
        <Route path="travel" element={<Travel />} />
        
        <Route path="login" element={<Login />} />
{/* 
username : user1       durmadanduran@gmail.com
pass : User1234?        Durmadan12? */}
        
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
