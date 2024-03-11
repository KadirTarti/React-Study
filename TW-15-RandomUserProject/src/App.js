import './App.css';

import React, { Fragment } from 'react';
import Button from './Button';
import { useState } from 'react';
import axios from 'axios';

function App () {

  
  const [userData, setUserData]=useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser]= useState(false);
  const [activeLink, setActiveLink]=useState(0); //display active link...

  const onClickHandler =()=>{
    setLoading(true);

    axios.get('https://randomuser.me/api/')
    .then((response) => {
          console.log(response.data.results);
    setUserData(response.data.results)})
    .catch((error) => {
      console.log(error);
      setLoading(true);
    }).finally(()=>{
      setLoading(false)
      setActiveUser(true)
    })
  }



  return (
    <div className='App'>
    <h1> Random User Generator</h1>
    <Button activeUser={activeUser} onClickHandler={onClickHandler}/>
    
      <div className='app-user'>
        {userData.map((user, index) =>{
          return (
            <Fragment key={user.cell}>
            <img src={user.picture.large} alt="#"/>
            </Fragment>
          )})}
      </div> 
    </div>
  )

}

export default App

