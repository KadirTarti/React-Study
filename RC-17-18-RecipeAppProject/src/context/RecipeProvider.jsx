import axios from "axios";
import { createContext } from "react";
import { useState } from "react";
import { StyledPar, WrongButton } from "./RecipeProStyle";
import { useNavigate } from "react-router-dom";

//context alanı create etme:
export const RecipeContext = createContext();

navigate = useNavigate();

//context'i yeni yolla -best2- app dışında bir sayfada açıyoruz. bu sayfa o işi görüyor.

const APP_ID = "80af08ad";
const APP_KEY = "55627273303e38024def38cb507c8986";

const RecipeProvider = ({ children }) => {
  //^*login ve privateRouter sayfaları için:
  const [name, setName] = useState(localStorage.getItem("username") || "");
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );

  //^*home header ve recipeCard sayfaları için:
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;
  
  const url2 = `https://api.edamam.com/search?q=${query}&app_id=80af08ad&app_key=55627273303e38024def38cb507c8986&mealType=breakfast`;

  const getData = async()=>{
    setLoading(true)
    try{
      const {data} = await axios.get(url)
      // console.log(data.hits);
      setRecipes(data.hits);
     
      } catch (error) {
      setError(true)
    
      } finally {
      setLoading(false)
    }
  }

  if (error) {
    return <StyledPar>
    Something went wrong... <br />
    <WrongButton onClick={() => navigate(-1)}>GO HOME</WrongButton>
    </StyledPar>;
  }
  if(loading)
  {return <p>loading...</p>}


  return (
    <RecipeContext.Provider
      value={{
        name,
        setName,
        password,
        setPassword,
        recipes,
        setQuery,
        setMealType,
        getData,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
