import React, { FC } from "react";
import { DollarIcon, HashIcon, ChartIcon, ExchangeIcon, HoursIcon, BtcIcon } from "../../../assets/icons";
import { ISingleCurrency } from "../../../types/currency.types";
import { roundNumber } from "../../../utils/roundNumbers";
import s from "./CurrencyStats.module.scss";

interface ICurrencyStatsProps {
  currency: ISingleCurrency;
}

const CurrencyStats: FC<ICurrencyStatsProps> = ({ currency }) => {
  const statItems = [
    { icon: <DollarIcon className={s.statIcon} />, name: `Price USD`, value: roundNumber(currency?.price) },
    { icon: <HashIcon className={s.statIcon} />, name: `Rank`, value: currency?.rank },
    {
      icon: <ExchangeIcon className={s.statIcon} />,
      name: `Market Cap`,
      value: `${roundNumber(currency?.marketCap)} $`,
    },
    {
      icon: <HoursIcon className={s.statIcon} />,
      name: `24h Volume`,
      value: roundNumber(currency?.["24hVolume"]),
    },
    { icon: <BtcIcon className={s.statIcon} />, name: `BTC Price`, value: roundNumber(currency?.btcPrice) },
    {
      icon: <DollarIcon className={s.statIcon} />,
      name: `Highest Price`,
      value: roundNumber(currency?.allTimeHigh.price),
    },
  ];

  return (
    <ul className={s.stats}>
      {statItems.map((i) => (
        <li className={s.statItem} key={i.name}>
          <div className={s.statInfo}>
            {i.icon}
            <span className={s.statName}>{i.name}</span>
          </div>
          <span className={s.statValue}>{i.value} $</span>
        </li>
      ))}
      <li className={s.statItem}>
        <div className={s.statInfo}>
          <ChartIcon className={s.statIcon} />
          <span className={s.statName}>Change</span>
        </div>
        <span className={s.statValue} style={{ color: currency.change.includes("-") ? "red" : "lime" }}>
          {roundNumber(currency?.change)} %
        </span>
      </li>
    </ul>
  );
};

export default CurrencyStats;
