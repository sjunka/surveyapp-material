import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";

//Imports from External UI things

import "typeface-roboto";

//Wrapping App component into BrowserRouter for routing the aplication
const app = (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

//Render app variable as Root component
ReactDOM.render(app, document.getElementById("root"));
