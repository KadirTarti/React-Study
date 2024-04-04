import axios from "axios";
import { createContext, useContext, useState } from "react";


export const UserContext = createContext()


export const UserContextProvider = ({ children }) => {

    const [userData, setUserData] = useState([]);
    const fetchUserData = (username) => {
        const url = `https://api.github.com/users/${username}`
        axios(url).then((res) =>{
            // console.log(res);
            setUserData(res.data)
        })
    } 

    return <UserContext.Provider value={{userData, fetchUserData}}>{children}</UserContext.Provider>
}




export const useUserContext = () => useContext(UserContext)