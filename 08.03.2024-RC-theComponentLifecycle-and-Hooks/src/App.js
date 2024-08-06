import './App.css';
//! burada kullanılacak tüm sayfalar üste import edilmek ZORUNDA!


import React, { useState } from 'react';
// import LifeCycleMethods from './components/LifeCycleMethods';
import "bootstrap/dist/css/bootstrap.min.css";
import Clock from './components/Clock';
import UseEffectAxiosFetch from './components/UseEffectAxiosFetch';

function App () {

  const [show, setShow] = useState(true)
  return (
    <div className='container text-center mt-4'>
    <button className='btn btn-danger' onClick={()=>setShow(!show)}>SHOW</button>

    {/* {show && <LifeCycleMethods/>} */}
    
    {/* {show && <Clock />} */}

    <UseEffectAxiosFetch/>


    </div>
  )
}

export default App

