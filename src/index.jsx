import React from "react";
import ReactDOM from "react-dom";

import Application from "./pages/application";

ReactDOM.render(
  (
    <Application>
      <div>
        <section className="hero is-primary">
          <div className="hero-body">
            <div className="container">
              <h1 className="title is-3">Oh snap, React!</h1>
              <h4 className="subtitle is-5">Now with styles!</h4>
            </div>
          </div>
        </section>
      </div>
    </Application>
  ),
  document.getElementById("app"),
);
