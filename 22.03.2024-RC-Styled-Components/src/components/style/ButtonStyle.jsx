import styled from 'styled-components';

const ButtonStyle = styled.button`

  color:${({saban})=> saban ? 'blue' : 'darkred'} ;
  
  background-color: ${({saban, elif})=> saban?'lightblue' : 'yellow'};
  font-weight: 600;
  padding: 1rem;
  font-size: 1.5rem;
  &:hover{
    cursor: pointer;
    transform: scale(0.9)
  }
`;

export const TomButton=styled(ButtonStyle)`
    color: green;
    background-color: lightgoldenrodyellow;
    width: 200px;
    font-weight: 400;
    `

export default ButtonStyle;
