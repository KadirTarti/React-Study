import styled from 'styled-components';

const CardStyle = styled.div`
  background-color: lightsalmon;
  border-radius: 15px;
  margin-bottom: 2rem;
  gap: 2rem;
  padding: 2rem;
  display: flex;
  flex-direction: ${({nida})=> nida};

  box-shadow: ${({theme})=>theme.golgelendirme};


  @media screen and (max-width: ${({theme})=>theme.responsivlik}){
    flex-direction: column;
    background-color: lightgoldenrodyellow;
  }

`;

export default CardStyle;




