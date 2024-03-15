import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import logo from '../img/logo.png'
import { Link, NavLink } from 'react-router-dom'


//!!!React ta 3 türlü link kullanılabilir. NavLink Link ve a etiketi.hangisini ne zaman kullanmalısınız? 
//! React uygulamanız içinde, 
  //& etkinken stil gerektirmeyen bir bağlantı oluşturmak istiyorsanız, Link bileşenini kullanın.
  //& etkin durumdayken stil gerektiren bir bağlantı oluşturmak istiyorsanız, NavLink bileşenini kullanın. 
  //& harici bir sayfaya veya rota olmayan bir sayfaya bağlantı oluşturmak istiyorsanız, <a></a>  etiketini kullanın.

const MyNavbar = () => {
  return (
    <Navbar expand="lg" bg='light'>
      <Container>
        <Link to="/">
          <img src={logo} alt="" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink style={({isActive})=> ({color: isActive && 'red'})} className='nav-link' to='/'>Home</NavLink>
            <NavLink style={({isActive})=> ({fontSize: isActive && '20px'})} className='nav-link' to='/teacher'>Teacher</NavLink>
            <NavLink style={({isActive})=> ({border: isActive && '2px solid blue'})} className='nav-link' to='/courses'>Courses</NavLink>
            <NavLink style={({isActive})=> ({backgroundColor: isActive ? 'lightGreen' : 'lightGray'})} className='nav-link' to='/contact'>Contact</NavLink>
            <a href='https://github.com/KadirTarti' className='nav-link' target= 'blank'>GitHub</a>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default MyNavbar