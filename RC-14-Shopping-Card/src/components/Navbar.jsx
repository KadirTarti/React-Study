import React from 'react'
import {NavLink} from "react-router-dom"
const Navbar = () => {
  return (

          <nav className="navbar navbar-expand-lg bg-secondary">
            <div className="container-fluid">
              <span className=''></span>
              {/* <NavLink className="navbar-brand" href="#">Navbar</NavLink> */}
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                  <li className="nav-item">
                    <NavLink className="nav-link" aria-current="page" href="#">Home</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to='/new-product'>New Product</NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink className="nav-link" to='/products'>Product List</NavLink>
                  </li><li className="nav-item">
                    <NavLink className="nav-link" to='/about'>About</NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

    
  );
}

export default Navbar