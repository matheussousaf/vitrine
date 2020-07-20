import styled from "styled-components";

export const Container = styled.div`
  padding-bottom: 70px;
`;

export const Content = styled.div``;

export const List = styled.ul`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  /* & a {
    width: 47%;
  } */
`;

export const Item = styled.li`
  width: 47%;
  margin-bottom: 20px;
  .image {
    width: 100%;
    height: 220px;
    background-image: url(${(props) => props.img});
    background-size: cover;
    border-radius: 8px;
    position: relative;
    &__heart {
      position: absolute;
      top: 15px;
      right: 15px;
    }
  }
  .description {
    display: flex;
    flex-direction: column;
    margin-top: 7px;
    color: #5c5c5c;
    &__price {
      font-weight: 600;
    }
    &__name {
    }
  }
`;
