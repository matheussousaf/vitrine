import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Content = styled.div`
  .logo {
    width: 90px;
    margin-bottom: -5px;
  }
`;

export const CategoriesList = styled.ul`
  display: flex;
  overflow-x: auto;
  position: sticky;
  top: 0;
  background-color: #fff;
  z-index: 9;
  padding: 15px 0;
  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Category = styled.li`
  min-width: max-content;
  margin-right: 15px;
  border-bottom: 1px solid ${(props) => (props.isActivity ? "#ff6900" : "#fff")};
  transition: border-bottom 0.4s ease-in-out;
`;
