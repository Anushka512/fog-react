import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./style.scss";
import { BrowserRouter } from "react-router-dom";
import {Provider} from "react-redux"
import {store} from "./Redux/store.js"
import "./Assets/css/style.css"
import "./Assets/css/color.css"
import "./Assets/css/responsive.css"
import "./Assets/css/animate.min.css"

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store = {store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
