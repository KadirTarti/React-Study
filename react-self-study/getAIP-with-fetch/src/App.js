import './App.css';
//! burada kullanılacak tüm sayfalar üste import edilmek ZORUNDA!


import React from 'react';
import Msg from './msg/Msg';
import Footer from './footer/Footer';
import Fetch from './fetch/Fetch';

function App () {
  return (
    <div>
    
    {/* <Msg/>
    <Footer/> */}
    <Fetch/>


    </div>
  )
}

export default App

