import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Provider from "./ContexApi/Contex";
import CounterContext, { MyCounter } from "./ContexApi/Counter";
import Counter from "./Counter/Counter";
ReactDOM.render(
  <CounterContext>
    <App />
  </CounterContext>,
  document.getElementById("root")
);
