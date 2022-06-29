import { Route, Routes } from "react-router-dom";
import AllCurencies from "../../pages/AllCurencies";
import Converter from "../../pages/Converter";
import Currencies from "../../pages/Currencies";
import Currency from "../../pages/Currency";
import Home from "../../pages/Home";

export enum AllRoutes {
  HOME = "/",
  TOP_CURRENCIES = "/top",
  CURRENCY = "/currency",
  ALL_CURRENCIES = "/currencies",
  CONVERTER = "/converter",
}

const AppRoutes = () => {
  return (
    <Routes>
      <Route path={AllRoutes.HOME} element={<Home />} />
      <Route path={AllRoutes.TOP_CURRENCIES} element={<Currencies />} />
      <Route path={AllRoutes.CURRENCY + "/:id"} element={<Currency />} />
      <Route path={AllRoutes.CONVERTER} element={<Converter />} />
      <Route path={AllRoutes.ALL_CURRENCIES} element={<AllCurencies />} />
    </Routes>
  );
};

export default AppRoutes;
