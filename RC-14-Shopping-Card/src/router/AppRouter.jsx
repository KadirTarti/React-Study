import React from 'react'
import Navbar from '../components/Navbar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import UpdateProduct from '../pages/UpdateProduct';
import Main from '../pages/Main';
import About from '../pages/About';
import NewProduct from '../pages/NewProduct';
import ProductList from '../pages/ProductList';


const AppRouter = () => {
  return (
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>} />
      <Route path='/about' element={<About/>} />
      <Route path='/new-product' element={<NewProduct/>} />
      <Route path='/products' element={<ProductList/>} />
      <Route path='/update-product-' element={<UpdateProduct/>} /> {/* Corrected the missing closing tag */}
      <Route path='*' element={<Main/>} />
    </Routes>
  </BrowserRouter>
  )
}

export default AppRouter