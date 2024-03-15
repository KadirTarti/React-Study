import React from 'react'
import MyNavbar from '../components/MyNavbar';
import Home from '../pages/Home';
import Teacher from '../pages/Teacher';
import Footer from '../components/Footer';
import CourseCard from '../pages/CourseCard';
import CardDetails from '../pages/CardDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from '../pages/ContactForm';
import Login from '../pages/Login';
import TeacherDetails from '../pages/TeacherDetails';
import NotFound from '../pages/NotFound';

const AppRouter = () => {

  return (
    
        <Router>
        <MyNavbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/teacher' element={<Teacher/>} />
            <Route path='/teacher/:id' element={<TeacherDetails/>} />

            <Route path='/courses' element={<CourseCard/>} />
            <Route path='/courses/:nameee' element={<CardDetails/>} />
            <Route path='/contact' element={<ContactForm/>} />
            <Route path='/login' element={<Login/>} />
            
            <Route path='*' element={<NotFound/>} />

          </Routes>

        <Footer/>
      </Router> 
  )

}
export default 
