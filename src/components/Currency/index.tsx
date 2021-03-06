import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchCurrencyHistory, fetchSingleCurrency } from "../../redux/thunks/singleCurrency.thunks";
import MainLayout from "../layouts/MainLayout";
import s from "./Currency.module.scss";
import CurrencyStats from "./CurrencyStats";
import PriceChart from "./PriceChart";
import Select, { SingleValue } from "react-select";
import HtmlReactParser from "html-react-parser";
import Loader from "../Loader";

const CurrencyPage = () => {
  const { currency, error, isFetching, history } = useAppSelector((state) => state.singleCurrency);
  const dispatch = useAppDispatch();
  const { id } = useParams() as { id: string };

  const options = [
    { value: "3h", label: "3 hours" },
    { value: "24h", label: "24 hours" },
    { value: "7d", label: "7 days" },
    { value: "30d", label: "30 days" },
    { value: "1y", label: "1 year" },
  ];

  const [period, setPeriod] = useState<SingleValue<{ value: string; label: string }>>(options[2]);

  const handlePeriod = (value: SingleValue<{ value: string; label: string }>) => {
    setPeriod(value);
  };

  useEffect(() => {
    dispatch(fetchSingleCurrency(id));
  }, [id, dispatch]);

  useEffect(() => {
    dispatch(fetchCurrencyHistory({ id, period: period!.value }));
  }, [id, period, dispatch]);

  if (error) {
    alert(error);
  }

  if (!currency || isFetching) {
    return (
      <div className="loader-center">
        <Loader />
      </div>
    );
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
          <h3 className={s.chartTitle}>{currency.name} Price Chart</h3>
          <Select options={options} className={s.select} onChange={handlePeriod} value={period} />
          <PriceChart history={history} />
        </div>
        <div className={s.description}>
          <h2 className={s.descriptionTitle}>Information about {currency.name}</h2>
          <div className={s.descriptionText}>{HtmlReactParser(currency.description)}</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default CurrencyPage;
