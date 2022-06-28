import React, { FC } from "react";
import Chart from "react-apexcharts";
import { ICurrencyHistory } from "../../../types/currency.types";
import { roundNumber } from "../../../utils/roundNumbers";
import s from "./PriceChart.module.scss";

interface IPriceChartProps {
  history: ICurrencyHistory[];
}

const PriceChart: FC<IPriceChartProps> = ({ history }) => {
  const options = {
    chart: {
      type: "area",
      height: 350,
      background: "black",
      zoom: {
        enabled: true,
      },
    },
    legeng: {
      show: true,
    },
    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#fff",
      opacity: 1,
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
        format: "dd/MM/yyyy",
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "string",
      categories: history.map((i) => new Date(i.timestamp * 1000).toLocaleDateString()),
    },
    theme: {
      mode: "dark",
      palette: "palette1",
      monochrome: {
        enabled: false,
        color: "#33B2DF",
        shadeTo: "dark",
        shadeIntensity: 0.65,
      },
    },
  } as any;

  const series = [
    {
      name: "Price $",
      data: history.map((h) => Math.round(+h.price)),
    },
  ];

  return (
    <div className={s.container}>
      <Chart options={options} series={series} type="area" height={400} />
    </div>
  );
};

export default PriceChart;
