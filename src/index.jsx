import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <h1>Oh snap, we're Reacting!</h1>,
  document.getElementById("app"),
);

const overengineeredHello = async () => {
  const promise = new Promise((resolve) => {
    setTimeout(() =>
      resolve("Hey we can use cool stuff!"),
    1000);
  });
  const message = await promise;
  console.log(message);
}

overengineeredHello();
