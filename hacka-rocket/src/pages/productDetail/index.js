import React from "react";
import { useHistory } from "react-router-dom";
import ReactSiema from "sns-react-siema";
import HeartButton from "../../components/heartButton";
import Ratings from "../../components/starRatings";
import { Container, Content, Detail } from "./styles";

import Img from "../../assets/images/roupa.jpg";

const ProductDetail = () => {
  const history = useHistory();
  const product = {
    id: 9,
    name: "Bolo tradicional",
    description: "1kg rende 20 porções.  Entrega sob encomenda (2 a 3 dias)",
    price: 35,
    category: "Bolos",
  };
  return (
    <Container>
      <Content image={Img}>
        <ReactSiema>
          <div className="image">
            <div className="image__actions">
              <button type="button" onClick={() => history.goBack()}>
                <svg
                  width="11"
                  height="17"
                  viewBox="0 0 11 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.12 1.62L8.5 0L0 8.5L8.5 17L10.12 15.38L3.24 8.5L10.12 1.62Z"
                    fill="#9E9E9E"
                  />
                </svg>
              </button>
              <button type="button">
                <svg
                  width="15"
                  height="17"
                  viewBox="0 0 15 17"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 12.0161C11.8667 12.0161 11.3 12.2721 10.8667 12.6732L4.925 9.13153C4.96667 8.93524 5 8.73896 5 8.53414C5 8.32932 4.96667 8.13303 4.925 7.93675L10.8 4.42922C11.25 4.85592 11.8417 5.12048 12.5 5.12048C13.8833 5.12048 15 3.97691 15 2.56024C15 1.14357 13.8833 0 12.5 0C11.1167 0 10 1.14357 10 2.56024C10 2.76506 10.0333 2.96135 10.075 3.15763L4.2 6.66516C3.75 6.23845 3.15833 5.9739 2.5 5.9739C1.11667 5.9739 0 7.11747 0 8.53414C0 9.9508 1.11667 11.0944 2.5 11.0944C3.15833 11.0944 3.75 10.8298 4.2 10.4031L10.1333 13.9533C10.0917 14.1325 10.0667 14.3203 10.0667 14.508C10.0667 15.882 11.1583 17 12.5 17C13.8417 17 14.9333 15.882 14.9333 14.508C14.9333 13.134 13.8417 12.0161 12.5 12.0161Z"
                    fill="#9E9E9E"
                  />
                </svg>
              </button>
            </div>
          </div>
        </ReactSiema>
        <Detail>
          <div className="row-one">
            <div className="row-one__price">
              <span className="row-one__price__value">
                R$ {product.price},00{" "}
              </span>
              <span className="row-one__price__label"> por unidade</span>
            </div>
            <HeartButton />
          </div>
          <div className="row-two">
            <h2>{product.name}</h2>
            <Ratings onlyReading rate={4} starSize="18px" reviews={18} />
          </div>
          <div className="row-three">
            <p>{product.description}</p>
          </div>
        </Detail>
        <button
          onClick={() => history.push("/cart")}
          className="add-to-cart"
          type="button"
        >
          Adicionar no carrinho
        </button>
      </Content>
    </Container>
  );
};
export default ProductDetail;
