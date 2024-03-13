import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import Teacher from './pages/Teacher';
import Footer from './components/Footer';
import CourseCard from './pages/CourseCard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from './pages/ContactForm';


const App = () => {
  return (
    <div>
      <Router>
        <MyNavbar/>
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/teacher' element={<Teacher/>} />
            <Route path='/courses' element={<CourseCard/>} />
            <Route path='/contact' element={<ContactForm/>} />
            <Route path='/' element={<Home/>} />


          </Routes>

        <Footer/>
    {/* <MyNavbar/>
    
    <Teacher/>
    <CourseCard/>
    <Footer/> */}
      </Router>

    </div>
  )
}

export default App