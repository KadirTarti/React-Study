import './App.css';
//! burada kullanılacak tüm sayfalar üste import edilmek ZORUNDA!

import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import CardContainer from './components/CardContainer';

const App = () => {
  return (
    <div>
    
    
    <Header/>    
    <CardContainer/>
    
    </div>
  )
}

export default App

