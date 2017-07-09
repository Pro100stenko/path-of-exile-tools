import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  (
    <div>
      <h1>Oh snap, we're Reacting!</h1>
      <h4>Now with styles!</h4>
      <div className="flex-row">
        {
          [1, 2, 3, 4, 5].map((number) => <div className="demo-item">{number}</div>)
        }
      </div>
    </div>
  ),
  document.getElementById("app"),
);
