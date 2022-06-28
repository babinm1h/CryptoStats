import React, { FC } from "react";
import { DollarIcon, HashIcon, ChartIcon, ExchangeIcon, HoursIcon } from "../../../assets/icons";
import { ISingleCurrency } from "../../../types/currency.types";
import { roundNumber } from "../../../utils/roundNumbers";
import s from "./CurrencyStats.module.scss";

interface ICurrencyStatsProps {
  currency: ISingleCurrency;
}

const CurrencyStats: FC<ICurrencyStatsProps> = ({ currency }) => {
  return (
    <ul className={s.stats}>
      <li className={s.statItem}>
        <div className={s.statInfo}>
          <DollarIcon className={s.statIcon} />
          <span className={s.statName}>Price USD</span>
        </div>
        <span className={s.statValue}>{roundNumber(currency?.price)} $</span>
      </li>
      <li className={s.statItem}>
        <div className={s.statInfo}>
          <HashIcon className={s.statIcon} />
          <span className={s.statName}>Rank</span>
        </div>
        <span className={s.statValue}>{currency?.rank}</span>
      </li>
      <li className={s.statItem}>
        <div className={s.statInfo}>
          <ChartIcon className={s.statIcon} />
          <span className={s.statName}>Change</span>
        </div>
        <span className={s.statValue} style={{ color: currency.change.includes("-") ? "red" : "lime" }}>
          {roundNumber(currency?.change)} %
        </span>
      </li>
      <li className={s.statItem}>
        <div className={s.statInfo}>
          <ExchangeIcon className={s.statIcon} />
          <span className={s.statName}>Market Cap</span>
        </div>
        <span className={s.statValue}>{roundNumber(currency?.marketCap)} $</span>
      </li>
      <li className={s.statItem}>
        <div className={s.statInfo}>
          <HoursIcon className={s.statIcon} />
          <span className={s.statName}>24h Volume</span>
        </div>
        <span className={s.statValue}>{roundNumber(currency?.["24hVolume"])} $</span>
      </li>
    </ul>
  );
};

export default CurrencyStats;
