import styled from 'styled-components';

const ButtonSSS = styled.button`
  
  background-color: #A62440;
  padding: 1rem;
  margin: 2rem 0.5rem;
  border: 1px solid #A62440;
  font-size: 1.2rem;
  cursor: pointer;
  border-radius: 5px;
  color: white;
  font-weight: 600;

  &:hover{
    opacity: 0.9;
    transform: scale(0.98);
  }

`;

export const DetayButon = styled(ButtonSSS)`
    color: tomato;
    border-left: 3px solid blue;
    border-radius: 20px 0;
    background-color: white;
`;

export default ButtonSSS;

