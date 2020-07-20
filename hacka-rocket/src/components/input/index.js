import React from "react";
import { Container, Content } from "./styles";

const Input = ({
  hangleChange,
  label,
  value,
  name,
  type = "text",
  placeholder,
  isGroup,
  required,
}) => {
  return (
    <Container isGroup={isGroup}>
      <Content>
        <label>
          {label}
          {required && <span>*</span>}
        </label>
        <input
          required={required}
          value={value}
          name={name}
          type={type}
          placeholder={placeholder}
          onChange={hangleChange}
        />
      </Content>
    </Container>
  );
};
export default Input;
