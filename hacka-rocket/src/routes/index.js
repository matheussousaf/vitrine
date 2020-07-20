import React from "react";
import { Route, Switch } from "react-router-dom";

import Dashboard from "../pages/dashboard";
import ProductDetail from "../pages/productDetail";
import Cart from "../pages/cart";

const Routes = () => (
  <Switch>
    <Route path="/" component={Dashboard} exact />
    <Route path="/favorites" component={Dashboard} exact />
    <Route path="/detalhe/:productId" component={ProductDetail} exact />
    <Route path="/cart" component={Cart} exact />
  </Switch>
);

export default Routes;
