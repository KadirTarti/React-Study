import './App.css';

import React from 'react';
import Button from './Button';
import { useState } from 'react';

function App () {

  
  const [userData, setUserData]=useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser]= useState(false);
  const [activeLink, setActiveLink]=useState(0); //display active link...

  const onClickHandler =()=>{
    setLoading(true);
    
      
  }



  return (
    <div className='App'>
    <h1> Random User Generator</h1>
    <Button isActive={activeUser} clicked={onClickHandler}/>
    </div>
  )
}

export default App

