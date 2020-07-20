import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div``;

const InputContainer = styled.div`
  display: flex;
`;

const ButtonOption = styled.div`
  width: 25px;
  height: 25px;

  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 8px 0 9px 0; */
  border-radius: ${(props) =>
    props.decrement ? "5px 0 0 5px" : "0 5px 5px 0"};
  box-shadow: 0px 1px 10px rgba(255, 105, 0, 0.58);
  font-size: 17px;
  user-select: none;
  background-color: #ff6900;
  font-weight: 600;
  & svg {
    width: 8px;
    height: 10px;
  }
`;

const InputValue = styled.input`
  width: 25px;
  border: none;
  background-color: transparent;
  text-align: center;
  user-select: none;
  font-weight: 500;
`;

export { InputContainer, ButtonOption, InputValue };
