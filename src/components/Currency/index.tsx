import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchSingleCurrency } from "../../redux/thunks/singleCurrency.thunks";
import MainLayout from "../layouts/MainLayout";
import s from "./Currency.module.scss";
import CurrencyStats from "./CurrencyStats";

const CurrencyPage = () => {
  const { currency, error, isFetching } = useAppSelector((state) => state.singleCurrency);
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };

  useEffect(() => {
    dispatch(fetchSingleCurrency(id));
  }, [id]);

  if (!currency || isFetching) {
    return <div></div>;
  }

  return (
    <MainLayout>
      <div className={s.wrapper}>
        <div className={s.header}>
          <img src={currency?.iconUrl} alt="icon" />
          <h1 className={s.name}>
            {currency?.name} ({currency?.symbol})
          </h1>
        </div>
        <CurrencyStats currency={currency} />
        <div className={s.chartBlock}>
          <h2 className={s.chartTitle}>{currency.name} Price Chart</h2>
        </div>
      </div>
    </MainLayout>
  );
};

export default CurrencyPage;
