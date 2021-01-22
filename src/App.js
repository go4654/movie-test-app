import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./Router/About";
import Detail from "./Router/Detail";
import Home from "./Router/Home";

const App = () => {
  return (
    <HashRouter>
      <Navigation />
      <Route path="/" exact={true} component={Home} />
      <Route path="/about" component={About} />
      <Route path="/movie-detail:id" component={Detail} />
    </HashRouter>
  );
};

export default App;
