import { createContext, useContext, useState } from "react";

//! create context

const AuthContext = createContext();

//? context provider

const AuthContextProvider = ({children}) => {
    
    const [currentUser, setCurrentUser] = useState('')


    return <AuthContext.Provider value={{currentUser}}>{children}</AuthContext.Provider>
};

//* consume with costum hook

export const useAuthContext = () => {
    return useContext(AuthContext)
}

export default AuthContextProvider