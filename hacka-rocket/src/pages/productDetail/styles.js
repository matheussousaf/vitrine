import styled from "styled-components";

export const Container = styled.div``;

export const Content = styled.div`
  .add-to-cart {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px 0;
    border: none;
    background: #ff6900;
    box-shadow: 0px 0px 15px rgba(248, 128, 101, 0.17);
    border-radius: 20px 20px 0px 0px;
    color: #fff;
    font-weight: 600;
    font-size: 1.2em;
    position: fixed;
    bottom: 0;
    z-index: 9;
  }
  .image {
    width: 100%;
    height: 400px;
    background-image: url(${(props) => props.image});
    background-size: cover;
    position: relative;

    &__actions {
      width: 100%;
      padding: 20px 20px 0 20px;
      display: flex;
      justify-content: space-between;
      & button {
        width: 30px;
        height: 30px;

        display: flex;
        justify-content: center;
        align-items: center;

        border: none;
        background: #f9f9f9;
        box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
        border-radius: 6px;
      }
    }
  }
`;

export const Detail = styled.div`
  width: 100%;
  height: auto;
  min-height: 400px;
  background-color: #fff;
  border-radius: 30px 30px 0 0;
  margin-top: -25px;
  padding: 30px 20px 20px 20px;
  position: relative;
  z-index: 7;

  .row-one {
    width: 100%;
    display: flex;
    justify-content: space-between;
    &__price {
      &__value {
        font-size: 1.4em;
      }
      &__label {
        font-size: 0.9em;
      }
    }
  }
  .row-two {
    margin-top: 20px;
    h2 {
      font-size: 1.8em;
      font-weight: 600;
      margin-bottom: 7px;
    }
  }
  .row-three {
    margin: 30px 0;
  }
`;
