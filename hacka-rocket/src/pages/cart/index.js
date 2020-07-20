import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { Container, Content, CartItems, Item, Table } from "./styles";

import SelectQuantity from "../../components/selectQuantity";
import Input from "../../components/input";

import Logo from "../../assets/images/logo.png";
import Roupa from "../../assets/images/roupa.jpg";

const Cart = () => {
  const history = useHistory();
  const [address, setAdress] = useState({
    name: "",
    whatsapp: "",
    street: "",
    number: "",
    neighborhood: "",
    city: "",
    reference: "",
  });

  const handleAddress = (event) => {
    setAdress({ ...address, [event.target.name]: event.target.value });
  };

  const sendInvoice = () => {
    window.location.href =
      "https://api.whatsapp.com/send?phone=5511964032829&text=Ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20pedido.%20Os%20itens%20escolhidos%20s%C3%A3o%3A%20%20%0A%20%20%0A%20Nome%3A%20WILLIAN%20EMBOAVA%20DE%20OLIVEIRA%20%0A%20%20%0A%20%20Telefone%3A%2011964032829%20%0A%20%20%0A%20%20%0A%20%20%0A%20Endere%C3%A7o%20para%20entrega%3A%20%0A%20Rua%20Afonso%20C%C3%A2ndido%20Lopes%2C%2023434%2C%20Bairro%3A%20Piracaia%2C%20Cidade%3A%20Piracaia%20%0A%20%20%0A%20%20Ponto%20de%20referencia%3A%20sadasd%20%0A%20%20%0A%20https://viitrine.netlify.app/";
  };

  return (
    <Container>
      <Content>
        <img className="logo" src={Logo} alt="logo" />
        <div className="header">
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
          <h2>Carrinho de compras</h2>
        </div>
        <h4>Produtos</h4>
        <CartItems>
          <Item>
            <img className="image" src={Roupa} alt="roupa" />
            <div className="info">
              <h4>Nome do Produto</h4>
              <div className="info__price">
                <strong>R$ 129,90</strong>
                <span> por unidade</span>
              </div>
              <SelectQuantity />
            </div>
          </Item>
        </CartItems>
        <div className="values">
          <Table>
            <thead>
              <tr>
                <th>Produto</th>
                <th>Qtd</th>
                <th>Valor</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Produto</td>
                <td>1</td>
                <td>R$ 35,00</td>
              </tr>
              <tr className="total">
                <td className="total__label">Total</td>
                <td />
                <td>R$ 35,00</td>
              </tr>
            </tbody>
          </Table>
        </div>
        <h4>Informações para entrega</h4>
        <form onSubmit={sendInvoice}>
          <Input
            hangleChange={handleAddress}
            label="Nome"
            name="name"
            value={address.name}
            required
          />
          <Input
            hangleChange={handleAddress}
            label="WhatsApp"
            name="whatsapp"
            value={address.whatsapp}
            required
          />

          <div className="input-group">
            <Input
              hangleChange={handleAddress}
              label="Endereço"
              isGroup
              name="address"
              value={address.address}
              required
            />
            <Input
              hangleChange={handleAddress}
              label="Numero"
              isGroup
              name="number"
              value={address.number}
              required
            />
          </div>
          <div className="input-group">
            <Input
              hangleChange={handleAddress}
              label="Bairro"
              isGroup
              name="neighborhood"
              value={address.neighborhood}
              required
            />
            <Input
              hangleChange={handleAddress}
              label="Cidade"
              isGroup
              name="city"
              value={address.city}
              required
            />
          </div>
          <Input
            hangleChange={handleAddress}
            label="Ponto de referencia"
            name="reference"
            value={address.reference}
          />
        </form>

        <button onClick={sendInvoice} className="send-invoice" type="button">
          Enviar pedido por WhatsApp
        </button>
      </Content>
    </Container>
  );
};
export default Cart;
