import React from "react";
import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import Page404 from "../pages/Page404";

export default function Router() {
  return (
    <Routes>
      {/* Define suas rotas dentro do Switch usando o componente Route */}
      <Route path="/" element={<Login />} />
      <Route path="*" element={<Page404 />} />
      {/* Outras rotas podem ser definidas aqui */}
    </Routes>
  );
}
