import React from "react";

import { ButtonContainer } from "./styles";

function Button({ title, onClick }) {
  return (
    <ButtonContainer onClick={onClick}>
      <p>{title}</p>
    </ButtonContainer>
  );
}

export default Button;
