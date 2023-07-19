import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import 'mapbox-gl/dist/mapbox-gl.css';

import App from "./App";

const rootNode = document.getElementById( 'root' );
const root = ReactDOM.createRoot( rootNode );

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
)