import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/Home'
import About from '../pages/about/About'
import Login from '../pages/login/Login'
import Register from '../pages/register/Register'
import Navbar from '../components/navbar/Navbar'

const AppRouter = () => {
  return (
     <BrowserRouter as Router>
     <Navbar/>
     <Routes>
     <Route path='/' element={<Home/>} />
     <Route path='/about' element={<About/>} />
     <Route path='/register' element={<Register/>} />
     <Route path='/login' element={<Login/>} />
     <Route path='*' element={<Home/>} />
     </Routes>
     </BrowserRouter>

  )
}

export default AppRouter