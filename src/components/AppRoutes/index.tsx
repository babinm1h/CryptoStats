import React from "react";
import { Route, Routes } from "react-router-dom";
import Currencies from "../../pages/Currencies";
import Currency from "../../pages/Currency";
import Home from "../../pages/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/curr" element={<Currencies />} />
      <Route path="/curr/:id" element={<Currency />} />
    </Routes>
  );
};

export default AppRoutes;
