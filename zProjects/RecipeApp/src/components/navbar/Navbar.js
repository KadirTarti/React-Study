import React from "react";
import bootstrap from '../../../node_modules/bootstrap/dist/css/bootstrap.min.css'

const Navbar = () => {
  return (
    <div>
      <nav class="navbar nvbr navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand ms-5" href="#">
          <img src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/kitchen-logo-design-template-0e0551e7992a5fb76cdf01e670e55320_screen.jpg?ts=1694746861" 
          alt=""
          width={'120px'} />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto me-5">
            <li class="nav-item me-4">
              <a class="nav-link" href="#">
                Home 
              </a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="#">
                About
              </a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link" href="#">
                Register
              </a>
            </li>
            <li class="nav-item me-4">
              <a class="nav-link " href="#">
                Login
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
