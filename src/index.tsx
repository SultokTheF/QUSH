import React from "react";
import ReactDOM from "react-dom/client";

//Third-party libraries
import { BrowserRouter } from "react-router-dom";

//modules
import App from './App';

//styles
import './assets/global.css';

const rootNode = document.getElementById( "root" ) as HTMLElement;
const root = ReactDOM.createRoot( rootNode );

root.render(
  <BrowserRouter>
    <App/>
  </BrowserRouter>
);
