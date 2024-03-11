import './App.css';
import React, { Fragment } from 'react';
import Button from './Button';
import { useState } from 'react';
import axios from 'axios';
import '@fortawesome/fontawesome-free/css/all.css';


function App () {

  
  const [userData, setUserData]=useState([]);
  const [loading, setLoading] = useState(false);
  const [activeUser, setActiveUser]= useState(false);
  const [activeLink, setActiveLink]=useState(0); //display active link...

  const onClickHandler =()=>{
    setActiveLink(0)
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

  const icons = [
    'fas fa-user fa-4x',
    'fas fa-envelope fa-4x',
    'fas fa-calendar-alt fa-4x',
    'fas fa-map-marker fa-4x',
    'fas fa-phone fa-4x',
    'fas fa-lock fa-4x',
  ]


  const PhraseGenerator =({user})=>{
    const phrases = [
      `Hi, my name is ${user.name.first} ${user.name.last}`,
      `My email adress is ${user.email}`,
      `I was born on ${user.dob.date.slice(0,10)}`,
      `My country is ${user.location.country}`,
      `My phone number is "${user.phone}"`,
      `My password is "${user.login.password}"`,
    ]
    return <h1>{phrases[activeLink]}
    
    </h1>
  }

  const activeLinkHandler =(index)=> {
    setActiveLink(index);
  }

  const style = {
    color: 'darkred',
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
            <PhraseGenerator user={user}/>
            <div className='app-icons'>
            {icons.map((icon, index)=>{
              return <i 
              className={index === 0 ? (userData.length > 0 && userData[0].gender === 'male' ? 'fas fa-user fa-4x' : 'fas fa-star fa-4x') : icon}
             key={index} onMouseEnter={()=> activeLinkHandler(index)}
              style={activeLink === index ? style : null}>

              </i>
            })}


            </div>
            </Fragment>
          )})}
      </div> 
    </div>
  )

}

export default App

