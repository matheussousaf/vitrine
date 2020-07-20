import React, { createContext, useState, useContext } from "react";

const AppContext = createContext({
  user: "Matheus",
});

export const AppContextProvider = ({ children }) => {
  const [name, setName] = useState("Matheus");

  return (
    <AppContext.Provider value={{ user: name }}>{children}</AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);
