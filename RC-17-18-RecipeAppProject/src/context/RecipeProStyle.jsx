import styled from "styled-components";

export const StyledPar = styled.p`
background-color: #155263 ;
padding: 5rem;
margin: 8rem 10rem;
text-align: center;
color: gold;
text-shadow: 1px -2px 3px purple;
font-size: 2rem;
font-weight: 400;
`;

export const WrongButton = styled.button`
padding: 13px;
border-radius: 10px;
font-size: 1.2rem;
margin-top: 1rem;
font-weight: 600;
background-color: #620050;
color: gold;

&:hover{
    background-color: gold;
    color: #620050;;
    /* border: 2px solid white; */
    text-shadow: 2px 2px 10px white;
  }

`;