import React from "react";
import { useAppSelector } from "../../../hooks/useAppSelector";
import { roundNumber } from "../../../utils/roundNumbers";
import s from "./TotalStats.module.scss";

const TotalStats = () => {
  const { stats } = useAppSelector((state) => state.currencies);

  if (!stats) {
    return <div>fax</div>;
  }

  return (
    <div className={s.stats}>
      <h1 className={s.title}>Currencies Statistic:</h1>
      <div className={s.statItems}>
        <div className={s.statItem}>
          <div className={s.statName}>Total Currencies:</div>
          <div className={s.statValue}>{roundNumber(stats?.totalCoins)}</div>
        </div>

        <div className={s.statItem}>
          <div className={s.statName}>Total Market Cap:</div>
          <div className={s.statValue}>{roundNumber(stats.totalMarketCap)} $</div>
        </div>

        <div className={s.statItem}>
          <div className={s.statName}>Total 24h Volume:</div>
          <div className={s.statValue}>{roundNumber(stats?.total24hVolume)} $</div>
        </div>

        <div className={s.statItem}>
          <div className={s.statName}>Total Markets:</div>
          <div className={s.statValue}>{roundNumber(stats?.totalMarkets)}</div>
        </div>
      </div>
    </div>
  );
};

export default TotalStats;
