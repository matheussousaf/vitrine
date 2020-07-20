import React, { createContext, useContext, useState } from "react";

const AuthContext = createContext({
  token: "",
  login: () => {},
});

export const AuthContextProvider = ({ children }) => {
  const [token, setToken] = useState(null);

  function login(email, password) {
    // login do usuário
    console.log(email, password);
    setToken("Token");
  }

  return (
    <AuthContext.Provider value={{ token, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuthContext = () => useContext(AuthContext);
