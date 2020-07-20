import React from "react";
import { Route, Switch } from "react-router-dom";
import Login from "../pages/login";
import Home from "../pages/home";
import Register from "../pages/register";

// import { Container } from './styles';

function AuthRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/register" component={Register} />
    </Switch>
  );
}

export default AuthRoutes;
