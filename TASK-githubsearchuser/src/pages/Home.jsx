import React from 'react'
import Container from 'react-bootstrap/Container'
import InputSearch from '../components/InputSearch'
import UserInfo from '../components/UserInfo'
import NotFound from "../assets/404.gif"
import { Image, Row } from 'react-bootstrap'

const Home = () => {
  
  return (
    <Container>
      <InputSearch />
      <UserInfo />
      <Row className="justify-content-center h-25 w-100"><Image src={NotFound} className="h-25 w-50" alt="User not found" /></Row>
    </Container>
  )
}

export default Home