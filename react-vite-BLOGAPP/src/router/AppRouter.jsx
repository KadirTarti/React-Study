import {
    BrowserRouter, Routes, Route
} from "react-router-dom";
import App from "@/App";
import Register from "@/pages/Register";
import {Navbar} from "@/components/Navbar.jsx";
import {Footer} from "@/components/Footer.jsx";
import Login from "../pages/Login";

const AppRouter = () => (
    <BrowserRouter>
        <Navbar/>
        <main>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/register' element={<Register/>}/>
                <Route path='/login' element={<Login/>}/>
            </Routes>
        </main>
        <Footer/>
    </BrowserRouter>)

export default AppRouter;
