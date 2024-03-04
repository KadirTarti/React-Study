import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';


import React from 'react'
import TodoList from './components/TodoList';
import Header from './components/Header';

const App = () => {
  return (
    <div>
    
    <Header/>
    <TodoList/>
    
    
    </div>
  )
}

export default App

