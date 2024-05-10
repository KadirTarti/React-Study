import {
  FormContainer,
  Header,
  LoginContainer,
  StyledButton,
  StyledForm,
  StyledImg,
  StyledInput,
} from "./LoginStyles";

import mealSvg from "../../assets/logo1.webp";
import { useContext } from "react";
import { RecipeContext } from "../../context/RecipeProvider";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const {
    name,
    setName,
    password,
    setPassword,
    nameError,
    setNameError,
    passwordError,
    setPasswordError,
    onButtonClick,
  } = useContext(RecipeContext);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("username", name);
    localStorage.setItem("password", password);

    //login'de bilgiler doğru girilirse home'a yönlendir:
    navigate("/home");
  };

  return (
    <LoginContainer>
      <FormContainer>
        <StyledImg src={mealSvg} />
        <Header>Healthy Recipes</Header>

        <StyledForm onSubmit={handleSubmit}>
          <StyledInput
            type="text"
            placeholder="username"
            required
            onChange={(e) => setName(e.target.value)}
          />

          <StyledInput
            type="password"
            placeholder="password"
            required
            onChange={(e) => setPassword(e.target.value)}
          />
          <label className="errorLabel">{passwordError}</label>

          <StyledButton type="submit">Login</StyledButton>
          <div className={"inputContainer"}>
            <input
              className={"inputButton"}
              type="button"
              onClick={onButtonClick}
              value={"Log in"}
            />
          </div>
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
