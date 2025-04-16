// routes/Routes.js
import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "@/pages/services";
import About from "@/pages/about";

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </Switch>
  );
};

export default Routes;
