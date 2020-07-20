import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  min-height: 100%;
`;

export const TextbarContainer = styled.div`
  width: 95%;
  align-self: center;
  left: 50%;
  position: fixed;
  bottom: 10px;
  max-height: 9vh;
  background: white;
  border-radius: 10px;
  display: flex;
  padding: 15px;
  transform: translateX(-50%);

  textarea {
    padding: 10px 5px;
    overflow: hidden;
    border: 0;
    flex: 1;
    font-size: 1em;
    resize: none;
    color: gray;
    font-family: "Montserrat", sans-serif;

    &::placeholder {
      color: lightgray;
    }
  }
`;

export const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
