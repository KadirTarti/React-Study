import React, { createContext, useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import GosterUsers from "../pages/GosterUsers";

// 1-Create Context

export const KullaniciContex = createContext()

//!Provider
const KullaniciProvider = ({children}) => {

  const [users,setUsers]=useState([])

useEffect(() => {
fetch("https://api.github.com/users")
  .then((res) => res.json())
  .then((data) => setUsers(data));
}, [])


const changeWidth=(id,size)=>{
setUsers(users.map((a)=>a.id===id ? {...a,width:size}:a))

}

  return (
   <KullaniciContex.Provider value={{users, changeWidth}}>
   <GosterUsers/>
    {children}
   </KullaniciContex.Provider>
  );
};


// consuming -- burada yaparsak ihtiyaç duyan child'larda bir daha çağırmıyoruz. TERCİHE BAĞLI.... useContex(sayfaIsmi) olarak import etmeye devam edilebilir. 
export const useKullaniciCntx =()=> {
  return useContext(KullaniciContex);
}



export default KullaniciProvider;
