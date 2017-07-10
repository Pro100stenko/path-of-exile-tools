import React from "react";
import ReactDOM from "react-dom";
import { HashRouter as Router, Route } from "react-router-dom";
import Application from "./pages/application";
import Home from "./pages/home";
import Dps from "./pages/dps";

ReactDOM.render(
  (
    <Router>
      <Application>
        <Route exact path="/" component={Home} />
        <Route path="/dps" component={Dps} />
      </Application>
    </Router>
  ),
  document.getElementById("app"),
);
