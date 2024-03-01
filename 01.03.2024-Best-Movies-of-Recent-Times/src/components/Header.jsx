import React from 'react'
import { Container, Image, } from 'react-bootstrap'
import logo from '../assets/movieLogo-modified.png'

const Header = () => {
  return (
    <Container>

        <Image className='logo' src={logo}/>
        <h1 className='my-2 h3 text-warning font-monospace fw-bold'>The Best Movies of Recent Times </h1>
            
    </Container>
  )
}

export default Header