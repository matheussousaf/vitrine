import React from "react";
import { useHistory } from "react-router-dom";
import { ArrowBack as GoBack } from "@styled-icons/evaicons-solid/ArrowBack";

import { Container, IconContainer, Content } from "./styles";

function ChatHeader() {
  const history = useHistory();

  function handleGoBack() {
    history.push("/");
  }

  return (
    <Container>
      <IconContainer onClick={handleGoBack}>
        <GoBack size={30} color="#ff6900" />
      </IconContainer>
      <Content />
    </Container>
  );
}

export default ChatHeader;
