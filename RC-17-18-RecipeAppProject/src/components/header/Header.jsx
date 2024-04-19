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
        <h1>Healthy Recipes</h1>
      <MainHeader>
        <img src={logo} width={'200px'} alt="" />
      </MainHeader>

      <FormContainer onSubmit={handleSubmit}>
        <FoodInput
          type="text"
          placeholder="Search for recipe"
          onChange={(e)=>setQuery(e.target.value)}
        />

        <Button type="submit">Search</Button>

        <Select
          name="ogunTypes"
          id="ogunTypes"
          onChange={(e)=>setMealType(e.target.value)}
          >
          <option value='breakfast'>Breakfast</option>
          <option value='lunch'>Lunch</option>
          <option value='teatime'>TeaTime</option>
        </Select>
      </FormContainer>
    </HeaderContainer>
  );
};

export default Header;
