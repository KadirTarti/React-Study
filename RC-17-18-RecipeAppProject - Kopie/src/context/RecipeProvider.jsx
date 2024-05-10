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
  const [nameError, setNameError] = useState('')
  const [passwordError, setPasswordError] = useState('')


  const onButtonClick = () => {

    setNameError('')
    setPasswordError('')
    if ('' === name) {
      setNameError('Please enter your username')
      return
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(name)) {
      setNameError('Please enter a valid name')
      return
    }
    if ('' === password) {
      setPasswordError('Please enter a password')
      return
    }
      if (password.length < 7) {
    setPasswordError('The password must be 8 characters or longer')
    return
  }


    // You'll update this function later...
  }


  //^*home header ve recipeCard sayfaları için:
  const [recipes, setRecipes] = useState([]);
  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);


  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${mealType}`;
  

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
    return <p>Something went wrong.....</p>;
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
        nameError, 
        setNameError,
        passwordError, 
        setPasswordError,
        recipes,
        setQuery,
        setMealType,
        getData,
        onButtonClick
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
