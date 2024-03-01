import React from 'react'
import { Container, Image, } from 'react-bootstrap'
import logo from '../assets/movie-bg2.png'

const Header = () => {
  return (
    <Container>

        <Image className='logo' src={logo} width='200px'/>
        <h1 className='my-2 font-monospace fw-bold'>The Best Movies of Recent Times </h1>
            
    </Container>
  )
}

export default Header