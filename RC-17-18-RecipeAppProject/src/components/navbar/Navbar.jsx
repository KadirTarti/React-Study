import React from 'react'
import {  Hamburger, Logo, Menu, MenuLink, Nav } from './NavbarStyles'
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from 'react';
const Navbar = () => {

  const [open, setOpen] = useState(false);



  return (
    <Nav>
      <Logo to="/home" onClick={()=>setOpen(false)}>
        <i>{"<Clarusway/>"} </i>
        <span>recipe</span>
      </Logo>

      <Hamburger onClick={()=>setOpen(!open)} >
        <GiHamburgerMenu />
      </Hamburger>

      <Menu showBurger={open} onClick={()=>setOpen(false)}>
        <MenuLink to="/about"> About</MenuLink>
        <a href="https://github.com/KadirTarti" target='blank'>GitHub</a>
        <MenuLink to="/">Logout</MenuLink>
      </Menu>
    </Nav>
  );
}

export default Navbar