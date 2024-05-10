import styled from "styled-components";

export const AboutContainer = styled.div`
  /* bütün about */
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ade0ffeb;
  height: calc(100vh - 93px);
  /*  Ekran yüksekliğiniz mesela 1000 piksel ise, öğenizin yüksekliği 900 piksele  eşit olacaktır.(1000 pikselin %100'ü ve eksi 100 piksel) */
  line-height: 2;
  span {
    color: #930077;
    font-family: "Pacifico", cursive;
    letter-spacing: 10px;
    font-size: 2rem;
    
  }
`;
export const StyledImage = styled.img`
  width: 200px;
  border-radius: 10%;
`;

export const HeaderContainer = styled.div`

 
`;

export const InfoContainer = styled.div`
  text-align: justify;
  max-width: 1000px;
  background-color: #BBCEE1;
  border: 2px solid #3A0088;
  padding: 25px;
  border-radius: 5px;
  a {
    color: #930077;;
    text-decoration: none;
    &:hover{
      text-shadow: 1px -1px 5px white;
    }
  }
`;
