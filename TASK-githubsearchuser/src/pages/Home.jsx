import React from 'react'
import Container from 'react-bootstrap/Container'
import InputSearch from '../components/InputSearch'
import UserInfo from '../components/UserInfo'
import { UserContextProvider } from '../components/UserContext'



const Home = () => {
  
  return (
    
    //UserContext üzerinden verilere erişim
    <UserContextProvider> 
    <Container>
      
      <InputSearch />
      <UserInfo />
    
    </Container>
    </UserContextProvider>
  )
}

export default Home