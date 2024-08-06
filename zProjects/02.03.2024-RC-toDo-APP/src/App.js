import './App.css';
//! burada kullanılacak tüm sayfalar üste import edilmek ZORUNDA!

import '../node_modules/bootstrap/dist/css/bootstrap.css'
import React from 'react'
import Header from './Components/Header';
import TodoList from './Components/TodoList';

const App = () => {
  return (
    <div>
    
    
    <Header/>
    <TodoList/>
    
    
    </div>
  )
}

export default App

