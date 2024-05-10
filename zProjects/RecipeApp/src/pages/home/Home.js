import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Dropdown, DropdownButton } from "react-bootstrap";
import HomeStyle from "../home/HomeStyle";
import homeSvg from '../../assets/home.svg'
import axios from "axios";

const Home = () => {

  const [meals, setMeals] = useState([]);
  const [selectedMealType, setSelectedMealType] = useState("");
  const [query, setQuery] = useState([]);

  const handleSelect = (selectedKey) => {
    // Assuming the eventKey corresponds to the meal type
    const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Brunch", "Tea Time"];
    setSelectedMealType(mealTypes[selectedKey - 1]); // Adjust the index based on your eventKey values
 };

  const URL =`https://api.edamam.com/search?q=${query}&app_id=80af08ad&app_key=55627273303e38024def38cb507c8986&mealType=${handleSelect}`;

 
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
            Search
          </button>

          <DropdownButton id="dropdown-basic-button" title="Choose Recipe" onSelect={handleSelect}>
            <Dropdown.Item eventKey="1">Breakfast</Dropdown.Item>
            <Dropdown.Item eventKey="2">Lunch</Dropdown.Item>
            <Dropdown.Item eventKey="3">Dinner</Dropdown.Item>
            <Dropdown.Item eventKey="4">Snack</Dropdown.Item>
            <Dropdown.Item eventKey="5">Brunch</Dropdown.Item>
            <Dropdown.Item eventKey="6">Tea Time</Dropdown.Item>
          </DropdownButton>
        </div>
      </div>
      <p>Selected Meal Type: {selectedMealType}</p>
      <img src={homeSvg} alt="" />
      
      </HomeStyle>
  );
};

export default Home;
