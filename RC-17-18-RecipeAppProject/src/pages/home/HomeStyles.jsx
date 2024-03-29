import styled from "styled-components";

export const MainContainer = styled.div`
  /* arama yapıldığında açılan yiyecek kartlarının kutusu RECİPECARD*/
  display: flex;
  flex-wrap: wrap;
  /* sığmayan taşsın düşsün */
  /* flex-direction: row; */
  justify-content: center;
  /* height: fit-content; */
`;

export const Cards = styled.div`
  /* search den sonra çıkan herbir yiyecek kart RECİPECARD*/
  height: 300px;
  background:#b5dff8;
  padding: 5px;
  border-radius: 3px;
  width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  margin: 10px;
  box-shadow: 2px 2px 10px black;
  &:hover {
    border-radius: 2px;
    box-shadow: 1px -3px 3px 4px #3A0088;
    /* box-shadow: none özelliğinin yavaşça uygulanmasını sağlar; */
  }
`;

export const RecipeHeader = styled.h1`
  /* kartlardaki yiyeceklerin adları */
  font-size: 1.2rem;
  text-align: center;
`;
export const RecipeImage = styled.img`
  /* kartların içindeki resimler RECİPECARD */
  height: 150px;
  width: 200px;
  border-radius: 10px;
  border:3px solid #3A0088;
`;

export const Button = styled.button`
  /* view more  buton */
  background-color: #930077;
  color:  rgb(255, 247, 232);
  font-weight: 600;
  padding: 10px;
  /* outline: none; */
  height: 2rem;
  border: none;
  margin: 10px;
  border-radius: 3px;
  cursor: pointer;
`;



export const ImgDiv = styled.div`
  /* anasayfadaki aşçı resminin en dış kutusu */

  display: flex;
  justify-content: center;

  /* background-color: #00adb5; */
  background-color: #3A0088;;
`;

export const HomeImg = styled.img`
  /* ana sayfadaki esas resim */
  width: 20%;
  max-width: 170px;
`;
