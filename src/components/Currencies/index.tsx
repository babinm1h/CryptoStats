import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchTopCurrencies } from "../../redux/thunks/currencies.thunks";
import MainLayout from "../layouts/MainLayout";
import CurrencyCard from "./CurrencyCard";
import s from "./Currencies.module.scss";
import TotalStats from "./TotalStats";

const CurrenciesPage = () => {
  const dispatch = useAppDispatch();
  const { topCurrencies, isFetching } = useAppSelector((state) => state.currencies);

  useEffect(() => {
    dispatch(fetchTopCurrencies());
  }, []);

  return (
    <MainLayout>
      <div className="pageWrapper">
        <TotalStats />
        <h2 className={s.topTitle}>Top 10 Crypto Currencies</h2>
        <ul className={s.list}>
          {topCurrencies.map((c) => (
            <CurrencyCard currency={c} key={c.uuid} />
          ))}
        </ul>
      </div>
    </MainLayout>
  );
};

export default CurrenciesPage;
