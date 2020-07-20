import React, { useState } from "react";
import {
  Container,
  Content,
  InputContainer,
  ButtonOption,
  InputValue,
} from "./styles";

const SelectQuantity = () => {
  const [value, setValue] = useState(1);

  const decrement = () => {
    if (value > 1) {
      setValue(value - 1);
    }
  };

  const increment = () => {
    setValue(value + 1);
  };

  return (
    <Container>
      <Content>
        <InputContainer>
          <ButtonOption decrement onClick={() => decrement(value || 1)}>
            <svg
              width="14"
              height="2"
              viewBox="0 0 14 2"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 2H0V0H14V2Z" fill="#FFF" />
            </svg>
          </ButtonOption>

          <InputValue readOnly value={value || 1} />

          <ButtonOption white onClick={() => increment(value || 1)}>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M14 8H8V14H6V8H0V6H6V0H8V6H14V8Z" fill="#fff" />
            </svg>
          </ButtonOption>
        </InputContainer>
      </Content>
    </Container>
  );
};
export default SelectQuantity;
