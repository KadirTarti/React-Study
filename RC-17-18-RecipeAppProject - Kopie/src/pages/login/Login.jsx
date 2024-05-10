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

    if (name && password) {
      localStorage.setItem("username", name);
      localStorage.setItem("password", password);
      navigate("/home");
    } else {
      // Kullanıcı girişi başarısızsa, hata mesajı göster
      console.error("Giriş bilgileri yanlış.");
    }
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
        </StyledForm>
      </FormContainer>
    </LoginContainer>
  );
};

export default Login;
