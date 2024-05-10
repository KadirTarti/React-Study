import React from "react";
import {
  DetailContainer,
  DetailPart,
  HeaderContainer,
  ImgContainer,
  IngredContainer,
  OtherPart,
} from "./DetailsStyles";
import detailsimg from "../../assets/details.webp";
import { useLocation, useNavigate } from "react-router-dom";

const Details = () => {
  const {
    state: { recipe },
  } = useLocation();

  const navigate = useNavigate();

  return (
    <DetailContainer>
      <HeaderContainer>
        <h1> {recipe.label} </h1>
        <img
          style={{ cursor: "pointer" }}
          src={detailsimg}
          alt=""
          onClick={() => navigate(-1)}
        />
      </HeaderContainer>

      <DetailPart>
        <ImgContainer>
          <img src={recipe.image} alt="" />
        </ImgContainer>

        <OtherPart>
          <div>
          <p>
            {recipe.totalNutrients.CA.label}:&nbsp;
            {Math.round(recipe.totalNutrients.CA.quantity)}
            {recipe.totalNutrients.CA.unit}{" "}
          </p>

          <p>
            {recipe.totalNutrients.CHOCDF.label}:&nbsp;
            {Math.round(recipe.totalNutrients.CHOCDF.quantity)}
            {recipe.totalNutrients.CHOCDF.unit}{" "}
          </p>

          <p>
            {recipe.totalNutrients.CHOLE.label}:&nbsp;
            {Math.round(recipe.totalNutrients.CHOLE.quantity)}
            {recipe.totalNutrients.CHOLE.unit}{" "}
          </p>

          <p>
            {recipe.totalNutrients.ENERC_KCAL.label}:&nbsp;
            {Math.round(recipe.totalNutrients.ENERC_KCAL.quantity)}
            {recipe.totalNutrients.ENERC_KCAL.unit}{" "}
          </p>

          <p>{Math.round(recipe.totalWeight)} </p>
          <p>Calories: {Math.round(recipe.calories)} </p>
          {/* digest key i ile bize 29 elemanlı bir dizi geliyor, biz onun 4 elemanını bastırmak için slice kullandık */}
          <p>
            {recipe.digest.slice(0, 4).map((item, index) => (
              <p key={index} style={{ color: "darkblue", fontWeight:'400', fontStyle:'italic' }}>
                {item.label} : {Math.round(item.total)}
              </p>
            ))}
          </p>
          </div>
        </OtherPart>

        <IngredContainer>
          {recipe.ingredientLines.map((item, index) => (
            <div>
              <p>
                {index + 1}-) {item}
              </p>
            </div>
          ))}
        </IngredContainer>
      </DetailPart>
    </DetailContainer>
  );
};

export default Details;
