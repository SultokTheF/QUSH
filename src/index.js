import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

const rootNode = document.getElementById( 'root' );
const root = ReactDOM.createRoot( rootNode );

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)