import React from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../assets/images/logo.png";

import { Container } from "./styles";
import Button from "../../components/button";

function Home() {
  const history = useHistory();

  function redirect(route) {
    history.push(route);
  }

  return (
    <Container>
      <img
        className="logo"
        src={Logo}
        alt="logo"
        style={{ marginBottom: 30 }}
      />
      <Button title="Preview do meu site" onClick={() => redirect("/login")} />
      <Button title="Registre-se" onClick={() => redirect("/register")} />
    </Container>
  );
}

export default Home;
