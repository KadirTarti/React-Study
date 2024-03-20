import React from "react";
import logo from '../assets/logo1.png'

const About = () => {
  return (
    <div className="container mt-5">
      <div className="row d-flex justify-content-center">
        <div className="col-md-7">
          <div className="card p-3 py-4">
            <div className="text-center">
              <img
                src={logo}
                width={300}
                className="rounded-2"
                alt="a"
              />
            </div>
            <div className="text-center mt-3">
              <h5 className="mt-2 mb-0">Abdulkadir TARTILACI</h5>
              <span>Fullstack Developer</span>
              <div className="px-4 mt-1">
                <p className="fonts fs-6 mt-4">
                  `Always improve yourself!`
                </p>
              </div>
              <ul className="social-list">
                <li>
                  <i className="fa-brands fa-facebook" />
                </li>
                <li>
                  <i className="fa-brands fa-dribbble" />
                </li>
                <li>
                  <i className="fa-brands fa-instagram" />
                </li>
                <li>
                  <i className="fa-brands fa-linkedin" />
                </li>
                <li>
                  <i className="fa-brands fa-google" />
                </li>
              </ul>
              <div className="buttons">
                <button className="btn btn-outline-primary px-4">
                  <a
                    className="text-decoration-none text-black "
                    href="https://github.com/KadirTarti"
                    target="true"
                  >
                    Message
                  </a>
                </button>
                <button className="btn btn-primary px-4 ms-3">
                  <a
                    className="text-decoration-none text-white"
                    href="https://github.com/KadirTarti"
                    target="true"
                  >
                    Contact
                  </a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
