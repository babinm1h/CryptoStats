import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchTopCurrencies } from "../../redux/thunks/currencies.thunks";
import MainLayout from "../layouts/MainLayout";
import s from "./Currencies.module.scss";
import TotalStats from "./TotalStats";
import CurrenciesList from "../CurrenciesList";
import Loader from "../Loader";

const CurrenciesPage = () => {
  const dispatch = useAppDispatch();
  const { topCurrencies, isTopFetching } = useAppSelector((state) => state.currencies);

  useEffect(() => {
    dispatch(fetchTopCurrencies());
  }, []);

  return (
    <MainLayout>
      {isTopFetching ? (
        <div className="loader-center">
          <Loader />
        </div>
      ) : (
        <div className={s.wrapper}>
          <TotalStats />
          <h2 className={s.topTitle}>Top 10 Crypto Currencies</h2>
          <CurrenciesList currencies={topCurrencies} />
        </div>
      )}
    </MainLayout>
  );
};

export default CurrenciesPage;
