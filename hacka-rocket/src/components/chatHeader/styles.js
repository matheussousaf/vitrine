import styled from "styled-components";

export const Container = styled.div`
  position: absolute;
  top: 0;
  height: 8vh;
  background: white;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const IconContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0 10px;
`;

export const Content = styled.div`
  margin-right: 20px;
  height: 100%;
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  h3 {
    position: relative;
    color: white;
  }
`;
