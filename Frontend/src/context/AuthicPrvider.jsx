import React, { createContext, useContext, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const AuthicProvider = ({ children }) => {
  const initialAuthUser = localStorage.getItem("users");

  const [authUser, setAuthUser]= useState(
    initialAuthUser ? JSON.parse(initialAuthUser) : undefined
  );

  return (
    <AuthContext.Provider value={{ authUser, setAuthUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthicProvider;

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = () => useContext(AuthContext);
