import React, { useState, useEffect } from "react";
import { useRouteMatch } from "react-router-dom";

import GaleryList from "../../components/galeryList";
import HeaderBottom from "../../components/headerBottom";

import { Container, Content, CategoriesList, Category } from "./styles";

import Logo from "../../assets/images/logo.png";

const Dashboard = () => {
  const router = useRouteMatch();
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Todos",
      isActivity: true,
    },
    {
      id: 2,
      name: "Bolos",
      isActivity: false,
    },
    {
      id: 3,
      name: "Tortas",
      isActivity: false,
    },
    {
      id: 4,
      name: "Pães doces",
      isActivity: false,
    },
    {
      id: 5,
      name: "Doces",
      isActivity: false,
    },
    {
      id: 6,
      name: "Cup Cakes",
      isActivity: false,
    },
  ]);

  const [
    favoriteProductsInLocalStore,
    setFavoriteProductsInLocalStore,
  ] = useState(() => {
    return JSON.parse(localStorage.getItem("@vitrine/favorites")) || [];
  });

  useEffect(() => {
    const { url } = router;
    setProducts(
      url === "/favorites"
        ? JSON.parse(localStorage.getItem("@vitrine/favorites")) || []
        : [
            {
              id: 1,
              name: "Bolo tradicional",
              description:
                "1kg rende 20 porções.  Entrega sob encomenda (2 a 3 dias)",
              price: 35,
              category: "Bolos",
            },
            {
              id: 2,
              name: "Bolo tradicional",
              description:
                "1kg rende 20 porções.  Entrega sob encomenda (2 a 3 dias)",
              price: 35,
              category: "Bolos",
            },
            {
              id: 3,
              name: "Bolo tradicional",
              description:
                "1kg rende 20 porções.  Entrega sob encomenda (2 a 3 dias)",
              price: 35,
              category: "Bolos",
            },
            {
              id: 4,
              name: "Bolo tradicional",
              description:
                "1kg rende 20 porções.  Entrega sob encomenda (2 a 3 dias)",
              price: 35,
              category: "Bolos",
            },
            {
              id: 5,
              name: "Bolo tradicional",
              description:
                "1kg rende 20 porções.  Entrega sob encomenda (2 a 3 dias)",
              price: 35,
              category: "Bolos",
            },
            {
              id: 6,
              name: "Bolo tradicional",
              description:
                "1kg rende 20 porções.  Entrega sob encomenda (2 a 3 dias)",
              price: 35,
              category: "Bolos",
            },
            {
              id: 7,
              name: "Bolo tradicional",
              description:
                "1kg rende 20 porções.  Entrega sob encomenda (2 a 3 dias)",
              price: 35,
              category: "Bolos",
            },
            {
              id: 8,
              name: "Bolo tradicional",
              description:
                "1kg rende 20 porções.  Entrega sob encomenda (2 a 3 dias)",
              price: 35,
              category: "Bolos",
            },
            {
              id: 9,
              name: "Bolo tradicional",
              description:
                "1kg rende 20 porções.  Entrega sob encomenda (2 a 3 dias)",
              price: 35,
              category: "Bolos",
            },
            {
              id: 10,
              name: "Bolo tradicional",
              description:
                "1kg rende 20 porções.  Entrega sob encomenda (2 a 3 dias)",
              price: 35,
              category: "Bolos",
            },
            {
              id: 1,
              name: "Bolo tradicional",
              description:
                "1kg rende 20 porções.  Entrega sob encomenda (2 a 3 dias)",
              price: 35,
              category: "Bolos",
            },
          ]
    );
  }, [router]);

  const handleActivityCategory = (categoryId) => {
    setCategories(
      categories.map((categ) => ({
        ...categ,
        isActivity: categ.id === categoryId,
      }))
    );
  };

  return (
    <Container>
      <Content>
        <img className="logo" src={Logo} alt="logo" />
        <CategoriesList>
          {categories.map((category) => (
            <Category
              onClick={() => handleActivityCategory(category.id)}
              isActivity={category.isActivity}
              key={category.id}
            >
              {category.name}
            </Category>
          ))}
        </CategoriesList>
        <GaleryList
          products={products}
          favoriteProductsInLocalStore={favoriteProductsInLocalStore}
          saveFavorite={setFavoriteProductsInLocalStore}
        />
        {!products.length && <h2>Não encontramos nenhum produto! :/</h2>}
        <HeaderBottom />
      </Content>
    </Container>
  );
};
export default Dashboard;
