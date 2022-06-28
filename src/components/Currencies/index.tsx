import React, { useEffect } from "react";
import Chart from "react-apexcharts";
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

  const options = {
    chart: {
      type: "area",
      height: "auto",
    },

    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },

    fill: {
      colors: ["orange"],
      type: "gradient",
      gradient: {
        shade: "dark",
        type: "horizontal",
        shadeIntensity: 0.5,
        gradientToColors: undefined,
        inverseColors: true,
        opacityFrom: 0.7,
        opacityTo: 0.7,
        stops: [0, 50, 100],
        colorStops: [],
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["white"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2018-09-19T00:00:00.000Z",
        "2018-09-19T01:30:00.000Z",
        "2018-09-19T02:30:00.000Z",
        "2018-09-19T03:30:00.000Z",
        "2018-09-19T04:30:00.000Z",
        "2018-09-19T05:30:00.000Z",
        "2018-09-19T06:30:00.000Z",
      ],
    },
  } as any;

  const series = [
    {
      name: "Height in feet",
      data: [2722, 2080, 2063, 1972, 1516, 777, 111],
    },
  ];

  useEffect(() => {
    dispatch(fetchTopCurrencies());
  }, []);

  return (
    <MainLayout>
      <TotalStats />
      <h2 className={s.topTitle}>Top 10 Crypto Currencies</h2>
      <ul className={s.list}>
        {topCurrencies.map((c) => (
          <CurrencyCard currency={c} key={c.uuid} />
        ))}
      </ul>
    </MainLayout>
  );
};

export default CurrenciesPage;
