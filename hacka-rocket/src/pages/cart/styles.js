import styled from "styled-components";

export const Container = styled.div`
  padding: 20px;
`;

export const Content = styled.div`
  .logo {
    width: 90px;
    margin-bottom: -5px;
  }
  .header {
    display: flex;
    align-items: baseline;
    margin: 15px 0 20px 0;
    button {
      border: none;
      background-color: #fff;
      margin-right: 20px;
    }
    h2 {
      font-size: 1.5em;
    }
  }
  .values {
    padding: 20px 0;
  }
  form {
    margin: 20px 0 70px 0;
  }

  .send-invoice {
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
    left: 0;
    z-index: 9;
  }
`;

export const CartItems = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 5px 0 0 0;
`;

export const Item = styled.li`
  display: flex;
  margin: 10px 0;
  .image {
    width: 80px;
    height: 80px;
    object-fit: cover;
    border-radius: 10px;
    margin-right: 15px;
  }
  .info {
    h4 {
      font-size: 1.2em;
    }
    &__price {
      margin: 4px 0 7px 0;
      font-size: 0.8em;
      strong {
        font-size: 1.2em;
        font-weight: 600;
      }
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  padding: 20px 0 10px 0;
  border-top: 0.5px dashed rgba(1, 1, 1, 0.5);
  border-bottom: 0.5px dashed rgba(1, 1, 1, 0.5);
  thead {
    tr {
      th {
        height: 30px;
        text-align: start;
        &:last-child {
          text-align: end;
        }
      }
    }
  }
  tbody {
    .total {
      height: 40px;
      padding: 10px;
      &__label {
        font-weight: 700;
      }
    }
    tr {
      td {
        &:last-child {
          text-align: end;
        }
      }
    }
  }
`;
