import React from "react";
import { BrowserRouter } from "react-router-dom";

import Routes from "./routes";
import GlobalStyles from "./styles/global";
import { AppContextProvider } from "./contexts/app";
import { AuthContextProvider, useAuthContext } from "./contexts/auth";
import AuthRoutes from "./routes/auth";

function App() {
  return (
    <AuthContextProvider>
      <AppContextProvider>
        <Main />
      </AppContextProvider>
    </AuthContextProvider>
  );
}

function Main() {
  const { token } = useAuthContext();

  return (
    <BrowserRouter>
      <GlobalStyles />
      {token ? <Routes /> : <AuthRoutes />}
    </BrowserRouter>
  );
}

export default App;
