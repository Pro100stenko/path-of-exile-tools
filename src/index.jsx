import React from "react";
import ReactDOM from "react-dom";

import Application from "./pages/application";

ReactDOM.render(
  (
    <Application>
      <div>
        <h1 className="title is-3">Oh snap, we're Reacting!</h1>
        <h4 className="subtitle is-5">Now with styles!</h4>
      </div>
    </Application>
  ),
  document.getElementById("app"),
);
