import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PrivateRouter from "./PrivateRouter";
import Dashboard from "../pages/Dashboard";
import Home from "../pages/Home";
import Firms from "../pages/Firms";
import Brands from "../pages/Brands";
import Sales from "../pages/Sales";
import Purchases from "../pages/Purchases";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="register" element={<Register/>} />        
        <Route path="stock" element={<PrivateRouter/>}>
          <Route path="" element={<Dashboard/>}>
          {/* <Route path="" element={<Home/>}/> */} 
          {/* normalde path='' parent'ı kasteder. ama onun farklı bir yazılışı da aşağıdaki gibi path yerine index yazmaktır */}
          <Route index element={<Home/>}/>
          
          <Route path='/stock/brands' element={<Brands/>}/>
          {/* üstteki gibi path'i absolute path olarak kullanırsak mutlaka parent'ı ile birlikte yazmamız gerekiyor. */}
                    
          <Route path='firms' element={<Firms/>}/>
          {/* üstteki relative path oluyor. /'sız yazınca doğrudean üstündeki parent'ı ile birlikte algılıyor             */}
          
          <Route path='sales' element={<Sales/>}/>
          <Route path='purchases' element={<Purchases/>}/>


          </Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default AppRouter;
