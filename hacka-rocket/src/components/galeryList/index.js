import React from "react";
import Zoom from "react-reveal/Zoom";
import { useHistory } from "react-router-dom";

import HeartButton from "../heartButton";
import { Container, Content, List, Item } from "./styles";

import Img from "../../assets/images/roupa.jpg";

const GaleryList = ({
  products,
  favoriteProductsInLocalStore,
  saveFavorite,
}) => {
  const history = useHistory();

  const handleFavorite = (e, product) => {
    e.stopPropagation();

    const alreadyExists = favoriteProductsInLocalStore.find(
      (item) => item.id === product.id
    );

    let newFavoriteProducts = [];

    if (alreadyExists) {
      newFavoriteProducts = favoriteProductsInLocalStore.filter(
        (item) => item.id !== alreadyExists.id
      );
    } else {
      newFavoriteProducts = [
        ...favoriteProductsInLocalStore,
        { ...product, isFavorite: true },
      ];
    }
    saveFavorite(newFavoriteProducts);
    localStorage.setItem(
      "@vitrine/favorites",
      JSON.stringify(newFavoriteProducts)
    );
  };

  return (
    <Container>
      <Content>
        <List>
          {products.map((product) => (
            <Item
              onClick={() => history.push(`/detalhe/${product.id}`)}
              img={Img}
            >
              <Zoom>
                <div className="image">
                  <div
                    onClick={(e) => e.stopPropagation()}
                    className="image__heart"
                  >
                    <HeartButton
                      isFavorite={product.isFavorite}
                      handleClick={(e) => handleFavorite(e, product)}
                    />
                  </div>
                </div>
                <div className="description">
                  <span className="description__name">{product.name}</span>
                  <span className="description__price">
                    R$ {product.price},00
                  </span>
                </div>
              </Zoom>
            </Item>
          ))}
        </List>
      </Content>
    </Container>
  );
};
export default GaleryList;
