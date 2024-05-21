import React, { useContext } from "react";
import {
  Button,
  FoodInput,
  FormContainer,
  HeaderContainer,
  MainHeader,
  Select,
} from "./HeaderStyles";
import { RecipeContext } from "../../context/RecipeProvider";
import logo from '../../assets/logo1.webp'

const Header = () => {

  const {setQuery, setMealType, getData, setOpen} = useContext(RecipeContext)

  const handleSubmit=(e)=>{
    e.preventDefault()
    getData()
  }


  return (
    <HeaderContainer>
        <h1 data-test='recipeHeader'>Healthy Recipes</h1>
      <MainHeader>
        <img src={logo} width={'200px'} alt="" />
      </MainHeader>

      <FormContainer onSubmit={handleSubmit}>
        <FoodInput data-test='homeSearch'
          type="text"
          placeholder="Search for recipe"
          onChange={(e)=>setQuery(e.target.value)}
        />

        <Button data-test='homeSearchBtn' type="submit">Search</Button>

        <Select data-test='menuOpenButton'
          name="ogunTypes"
          id="ogunTypes"
          onChange={(e)=>setMealType(e.target.value)}
          >
          <option value='teatime'>TeaTime</option>
          <option data-test='selectType' value='lunch'>Lunch</option>
          <option value='breakfast'>Breakfast</option>
        </Select>

      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
