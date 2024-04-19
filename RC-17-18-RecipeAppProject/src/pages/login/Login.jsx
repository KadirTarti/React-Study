
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";

import mealSvg from  '../../assets/logo1.webp'
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {

  const {name, setName, password, setPassword } = useContext(RecipeContext)

  const navigate = useNavigate() 

  const handleSubmit =(e)=>{
    e.preventDefault();
    
    localStorage.setItem('username', name)
    localStorage.setItem('password', password)
    
    //login'de bilgiler doğru girilirse home'a yönlendir: 
    navigate('/home')

  }

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg  src={mealSvg} />
        <Header>Healthy Recipes</Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="username"
            required
            onChange={(e)=> setName(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e)=> setPassword(e.target.value)}

          />

          <StyledButton type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
