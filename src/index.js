import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./App";

// React Router
import { BrowserRouter } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
