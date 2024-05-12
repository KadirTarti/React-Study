import React from 'react'
import {  Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
const Navbar = () => {

  const [open, setOpen] = useState(false);



  return (
    <Nav>
      <Logo  data-test='homeLogo' to="/home" onClick={()=>setOpen(false)}>
        <i>{" AKT"} </i>
        <span>product</span>
      </Logo>

      <Hamburger onClick={()=>setOpen(!open)}>
        <GiHamburgerMenu />
      </Hamburger>

      <Menu showBurger={open} onClick={()=>setOpen(false)}>
        <MenuLink data-test='homeAbout' to="/about"> About</MenuLink>
        <a href="https://github.com/KadirTarti" target='blank'>GitHub</a>
        <MenuLink to="/">Login</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar