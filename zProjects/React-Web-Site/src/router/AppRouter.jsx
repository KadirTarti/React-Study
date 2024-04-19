import React from 'react'
import MyNavbar from '../components/MyNavbar';
import Home from '../pages/Home';
import Teacher from '../pages/Teacher';
import TeacherDetails from '../pages/TeacherDetails';
import Footer from '../components/Footer';
import CourseCard from '../pages/CourseCard';
import CardDetails from '../pages/CardDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ContactForm from '../pages/ContactForm';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import PrivateRouter from './PrivateRouter';

const AppRouter = () => {

  return (
    
        <Router>
        <MyNavbar/>
          <Routes>
            <Route exact path='/' element={<Home/>} />
    {/*     exact ... path de yer alan / veya /home ifadesinin anasayfa olduğunu daha ziyade developer'lara ifade etmek için kullanılıyor.          "/" (ana yol) tüm yollara dahil edilmiştir, bu nedenle onu "/" ile başlayan diğer yollardan ayırt etmek için exact anahtar kelimesine sahip olması gerekir .
    "/courses/:name" böyle bir yolda yani  :name belirtilen kısım bir değişkendir, mesela name=HTML gibi. bunun için : kullanılır.        */}
            
            <Route path='/teacher' element={<Teacher/>} />
            <Route path='/teacher/:id' element={<TeacherDetails/>} />

            <Route path='/courses' element={<CourseCard/>} />
            <Route path='/courses/:nameee' element={<CardDetails/>} />
            
            {/* courses PrivateRouter ile hali :  */}



            {/* <Route path="/courses" element={<PrivateRouter />}>
          <Route path="" element={<CourseCard />} />
          <Route path="/courses/:namee" element={<CardDetails />} />
        </Route> */}

            
            {/* x form'a, giriş bilgisi girilmeden direk girilemesin istiyorsak burada ŞİFRE KONTROLÜ devreye giriyor. Kullanıcı adı, şifre olmadan olmasın. */}
            
            <Route path='/contact' element={<PrivateRouter/>}>
                <Route path='' element={<ContactForm/>}/>
            </Route>
            {/* <Route path='/contact' element={<ContactForm/>} /> */}


            <Route path='/login' element={<Login/>} />
            
            <Route path='*' element={<NotFound/>} />

          </Routes>

        <Footer/>
      </Router> 
  )

}
export default AppRouter
