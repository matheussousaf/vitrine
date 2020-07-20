import styled from "styled-components";

export const Container = styled.div`
  width: ${(props) => (props.isGroup ? "47%" : "100%")};
  margin-bottom: 10px;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  label {
    margin-bottom: 3px;
    font-size: 0.8em;
    & > span {
      color: red;
    }
  }
  input {
    background-color: #f2f2f2;
    box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.04);
    border-radius: 6px;
    border: none;
    height: 35px;
    padding: 5px 10px;
  }
`;
