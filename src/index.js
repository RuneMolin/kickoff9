import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "bootswatch/dist/superhero/bootstrap.min.css";

let root = document.getElementById("root");

ReactDOM.render(
  <div className="ui container">
    <App />
  </div>,
  root
);
