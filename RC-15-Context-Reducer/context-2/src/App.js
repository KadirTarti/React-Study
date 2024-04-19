import { useEffect, useState } from "react"

import GosterUsers from "./pages/GosterUsers"
import { KullaniciContext } from "./context/KullaniciContext";


const App = () => {

  const [users, setUsers] = useState([])

  useEffect(() => {
  
    fetch ('https://api.github.com/users')
    .then((res)=>res.json())
    .then((data)=> setUsers(data));
  }, [])

  const changeWidth =(id, newWidth)=>{
    setUsers(users.map((a)=> a.id ===id ? {...a, parametreWidth:newWidth}:a ))

  }
  




  return (
    <KullaniciContext.Provider value={{users, changeWidth}}>
      <GosterUsers />
    </KullaniciContext.Provider>
  );
}

export default App
