
import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
  StyledText,
} from "./LoginStyles";

import mealSvg from  '../../assets/RecipeAppLogo.png'
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
        <StyledImg  src={mealSvg} style={{width:'300px'}}/>
        <StyledText>
        To log in, enter "abdulkadir" as username and "1234" as password
        </StyledText>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
          data-test='loginName'
            type="text"
            placeholder="username"
            required
            onChange={(e)=> setName(e.target.value)}
          />

          <StyledInput
          data-test='loginPassword'
            type="password"
            placeholder="password"
            required
            onChange={(e)=> setPassword(e.target.value)}

          />

          <StyledButton data-test='loginSbmt'  type="submit">Login</StyledButton>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
