import React, { useContext } from "react";
import {
  Button,
  Cards,
  MainContainer,
  RecipeHeader,
  RecipeImage,
} from "./HomeStyles";
import { RecipeContext } from "../../context/RecipeProvider";


const RecipeCard = () => {
  const {recipes} = useContext(RecipeContext)
  console.log(recipes[0].recipe);

  return (
    <MainContainer>
    
      {recipes.map((a) => (
        <Cards key={a.recipe.id}>
          <RecipeHeader> {a.recipe.label} </RecipeHeader>

          <RecipeImage src={a.recipe.image} />
          <Button >
            Details
          </Button>
        </Cards>
      ))}
    </MainContainer>
  );
};

export default RecipeCard;
