import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import MyNavbar from './components/MyNavbar';
import Home from './pages/Home';
import Teacher from './pages/Teacher';
import Footer from './components/Footer';
import CourseCard from './pages/CourseCard';


const App = () => {
  return (
    <div>
    <MyNavbar/>
    <Home/>
    <Teacher/>
    <CourseCard/>
    <Footer/>
    </div>
  )
}

export default App