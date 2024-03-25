import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from "react-bootstrap";
import HomeStyle from "../home/HomeStyle";
import homeSvg from '../../assets/home.svg'
import axios from "axios";

const Home = () => {

  const [meals, setMeals] = useState([]);

  const URL ='https://api.edamam.com/api/recipes/v2/1234?type=public&app_id=430984321&app_key=userappkey';

 
  const handleSearch =async(e)=>{
    e.preventDefault();

    const searchData = {
      
    }
    try {
      const response = await axios.post(URL, searchData)
    setMeals(response.data.meals);
    } catch (error) {
      console.error("Error fetching data", error);
    }

  }

  
  
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
            onChange={handleSearch}
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
