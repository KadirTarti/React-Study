import React from "react";
import "./Footer.css";
import logo from '../../assets/logo1.png'

const Footer = () => {
  return (
    <div className="footer-div">
      <a
        href="https://github.com/KadirTarti"
        target="_blank"
        rel="noopener noreferrer"
        style={{ textDecoration: "none" }}
      >Click here for my GitHub Profile
      </a>
    </div>
    
  );
};

export default Footer;
