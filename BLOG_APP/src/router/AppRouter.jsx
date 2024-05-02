import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Categories";
import Home from "../pages/Home";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="" element={<PrivateRouter />}>
          {/* <Route path="details" element={<Details />} /> */}
          {/* <Route path="myblog" element={<MyBlog />} /> */}
        <Route path="register" element={<Register />} />
        <Route path="login" element={<Login />} />


        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
