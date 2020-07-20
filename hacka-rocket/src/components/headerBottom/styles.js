import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding: 0 30px 0 30px;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #fff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.2);
`;

export const Content = styled.nav`
  ul {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
`;

export const Option = styled.li`
  padding: 9px 20px 7px 20px;
  border-top: 2px solid ${(props) => (props.isActivity ? "#ff6900" : "#fff")};
`;
