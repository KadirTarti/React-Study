import axios from "axios";
import { createContext, useContext, useState } from "react";


export const UserContext = createContext()

export const UserContextProvider = ({ children }) => {

    const [userData, setUserData] = useState({});
    const [isUserExist, setUserExist] = useState(true)

    const fetchUserData = async (username) => {
        const url = `https://api.github.com/users/${username}`
        
        if (username.trim() === '') {
            alert ('Please enter an username')
        } else {
    
        try {
        const {data} = await axios(url);
        console.log(data);
        setUserData(data)
        setUserExist(true)
        } catch(error) {
            console.log(error);
            const {response} = error
            if (response.status === 404) {
                setUserExist(false)
            }
        }
    }
    
    } 

    return <UserContext.Provider value={{userData, fetchUserData, isUserExist}}>{children}</UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext)