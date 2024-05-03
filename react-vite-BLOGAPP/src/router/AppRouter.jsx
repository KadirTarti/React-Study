import {
    BrowserRouter, Routes, Route
} from "react-router-dom";
import App from "@/App";
import Register from "@/pages/Register";
import {Navbar} from "@/components/Navbar.jsx";
import {Footer} from "@/components/Footer.jsx";

const AppRouter = () => (
    <BrowserRouter>
        <Navbar/>
        <main>
            <Routes>
                <Route path='/' element={<App/>}/>
                <Route path='/register' element={<Register/>}/>
            </Routes>
        </main>
        <Footer/>
    </BrowserRouter>)

export default AppRouter;
