import React from "react";
import * as ReactDOM from "react-dom/client";
import App from "./components/App";
import Login from "./components/pages/Login/LoginPage";
import Register from "./components/pages/Register/Register";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.createRoot(rootElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
