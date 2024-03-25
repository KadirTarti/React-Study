import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from "react-bootstrap";
import HomeStyle from "../home/HomeStyle";
import homeSvg from '../../assets/home.svg'

const Home = () => {
  return (
    <HomeStyle>
      <p className="text-center mt-4 fs-3">RECIPE APP</p>
      <div className="search-and-button">
        <div class="input-group">
          <input
            type="search"
            class="rounded me-2"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="search-addon"
          />
          <button
            type="button"
            class="btn btn-warning rounded me-2"
            data-mdb-ripple-init
          >
            search
          </button>

          <DropdownButton id="dropdown-basic-button" title="Choose Recipe">
            <Dropdown.Item href="#/action-1">Breakfast</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Lunch</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Dinner</Dropdown.Item>
            <Dropdown.Item href="#/action-4">Snack</Dropdown.Item>
            <Dropdown.Item href="#/action-5">Brunch</Dropdown.Item>
            <Dropdown.Item href="#/action-6">Tea Time</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <img src={homeSvg} alt="" />
      
      </HomeStyle>
  );
};

export default Home;
