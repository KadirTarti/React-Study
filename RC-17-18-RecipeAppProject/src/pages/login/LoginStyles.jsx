import styled from "styled-components";
import loginBG from '../../assets/loginBG.png'

export const LoginContainer = styled.div`
  /* resmin olduğu div */
  /* background-image: url("https://img.freepik.com/free-photo/3d-render-network-communications-background-with-low-poly-plexus-design_1048-15687.jpg"); */
  /* background-image: url({loginBG}); */
  background-repeat: no-repeat;
  height: calc(100vh - 93px);
  background-size: cover;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const FormContainer = styled.div`
  /* yuvarlak yer */
  width: 500px;
  min-width: 500px;
  height: 500px;
  background-color: #62005075;
  border-radius: 1rem;
  border: 2px solid #e1f1dd;
  box-shadow: 2px 2px 50px white;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.h1`
  /* clarusway başlığı yazan yer */
  color: gold;
  text-shadow: 1px -1px 5px #3A0088;
  font-family: "Girassol", sans-serif;
  font-size: 2rem;
`;

export const StyledInput = styled.input`
  /* username giriş inputları */
  height: 50px;
  font-size: 1.5rem;
  width: 250px;
  border-radius: 5px;
  font-family: "Girassol", sans-serif;
  /* inuta girilen yazıyı büyük harf yapar */
  background-color: rgba(0, 0, 0, 0.4);
  border: none;
  color: white;
  margin: 1rem;
  text-indent: 20px;

  &::placeholder{
    color: rgba(222, 222, 222, 0.7);
  }
`;

export const StyledForm = styled.form`
  /* 3 kutunun olduğu form */
  background: #ade0ffeb;
  display: flex;
  flex-direction: column;
  border-radius: 10px;
`;

export const StyledButton = styled.button`

/* login butonu */
  font-size: 1.5rem;
  padding: 10px;
  font-family: "Girassol", sans-serif;
  background-color: #620050;
  border-radius: 5px;
  color: white;
  border: none;
  cursor: pointer;
  margin: 1rem;

  &:hover{
    background-color: #3A0088;
    color: gold;
    /* border: 2px solid white; */
    text-shadow: 2px 2px 10px white;
    transition: all 1s ease;
  }
`;

export const StyledImg = styled.img`
  /* yuvarlağın içindeki üstteki küçük resim */
  width: 150px;
`;
