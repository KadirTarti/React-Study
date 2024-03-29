import styled from "styled-components";

export const HeaderContainer = styled.div`
  /* başlık ve 3 arama kutusunu taşıyan kutu TURUNCU */

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  /* background: #00adb5; */
  background:#930077;

  h1{
   color: #3A0088; 
  }
  

`;

export const MainHeader = styled.h2`
  /* food app başlık */
`;

export const FormContainer = styled.form`
  /* 3 arama kutusunun toplandığı kutu  MAVİ*/
  display: flex;
  /* flex-direction: row; */
  flex-wrap: wrap;
  /* ekran küçülünce sıkışmasınlar,alta geçsinler */
  justify-content: center;
  border-radius: 5px;
  padding: 0.5rem;
  margin-bottom: 20px;
  background-color:#3A0088;
`;

export const FoodInput = styled.input`
  /* arama yapılacak ürünün yazıldığı input AÇIK MAVİ İNPUT*/
  height: 3rem;
  width: 15rem;
  border: none;
  border-radius: 3px;
  text-indent: 10px;
  /* yazı 10px içten başlasın */
  margin: 4px;
  font-size: 1.5rem;
  background-color: rgb(255, 247, 232);;
`;

export const Button = styled.button`
  /* search butonu GRİ*/
  /* background-color: #e1f1dd; */
  background-color: orange;

  padding: 0 1rem;
  /* outline: none; */
  height: 3.1rem;
  border: 3px solid #930077;
  margin: 5px;
  border-radius: 3px;
  color: #3A0088;
  font-weight: 600;
  text-shadow: 1px 2px 5px #930077;
  cursor: pointer;
  font-size: 2rem;
  &:hover {
    background-color: darkblue;
    color: orange;
    transition: all 0.4s ease-in;
    border: 3px solid #930077;
    text-shadow: 1px 2px 5px gold;
    box-shadow: 1px -1px 30px white;

  }
`;

export const Select = styled.select`
  /* breakfast yazan select */
  background-color: rgb(255, 247, 232);
  font-style: italic;
  border-radius: 3px;
  margin: 5px;
  padding: 5px;
  height: 3rem;
  border: none;
  font-size: 1.5rem;

  
  
`;
