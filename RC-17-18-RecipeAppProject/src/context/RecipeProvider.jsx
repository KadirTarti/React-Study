import axios from "axios";
import { createContext } from "react";
import { useState } from "react";

//context alanı create etme:
export const RecipeContext = createContext();

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

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;


  const getData = async()=>{
    const data = await axios.get(url)
    console.log(data);
  }

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
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
