
import styled from 'styled-components';

const DisplaySSS= styled.div`
  background-color: lightblue;
  display:flex;
  justify-content: space-between;
  align-items: center;


  //bazı yerlerde responsivliği aktif etmek için:

  @media screen and (max-width: ${({theme})=> theme.responsivlik}) {
    flex-direction: column;
  }
`;

export default DisplaySSS;
