import React from 'react'
import Container from 'react-bootstrap/Container'
import InputSearch from '../components/InputSearch'
import UserInfo from '../components/UserInfo'
import NotFound from "../assets/404.gif"
import { Image, Row } from 'react-bootstrap'
import { UserContextProvider } from '../components/UserContext'



const Home = () => {
  
  return (
    
    <UserContextProvider>
    <Container>
      <InputSearch />
      <UserInfo />
    
    </Container>
    </UserContextProvider>
  )
}

export default Home