import React from "react";
import AppRouter from "./router/AppRouter";
import Navbar from "./components/Navbar";
import AuthContextProvider from "./context/AuthContext";

const App = () => {
  return (
    <div>
    <AuthContextProvider>
      <AppRouter/>
      </AuthContextProvider>
    </div>
  );
};

export default App;
