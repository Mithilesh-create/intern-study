import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import FavProvider from "./pages/context/fav-context";

ReactDOM.render(
  <FavProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavProvider>,
  document.getElementById("root")
);
