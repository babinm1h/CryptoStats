import React, { FC } from "react";
import { NavLink } from "react-router-dom";
import { ICurrency } from "../../../types/currency.types";
import { roundNumber } from "../../../utils/roundNumbers";
import { AllRoutes } from "../../AppRoutes";
import s from "./CurrencyCard.module.scss";

interface ICurrencyCardProps {
  currency: ICurrency;
}

const CurrencyCard: FC<ICurrencyCardProps> = ({ currency }) => {
  return (
    <NavLink to={AllRoutes.CURRENCY + `/${currency.uuid}`}>
      <div
        className={s.card}
        style={{
          backgroundImage: `linear-gradient(to top, ${currency.color}, rgb(0, 0, 0, 0.2))`,
          boxShadow: `0 0px 5px ${currency.color}`,
        }}
      >
        <div className={s.header}>
          <div className={s.title}>
            <span className="">{currency.rank}.</span>
            <span className={s.name}>{currency.name}</span>
          </div>
          <img src={currency.iconUrl} alt="icon" className={s.icon} />
        </div>
        <ul className={s.info}>
          <li className={s.infoItem}>
            <span className={s.infoTitle}>Price:</span>
            <span className="">{roundNumber(currency.price)} $</span>
          </li>
          <li className={s.infoItem}>
            <span className={s.infoTitle}>Name:</span>
            <span className="">{currency.symbol}</span>
          </li>
          <li className={s.infoItem}>
            <span className={s.infoTitle}>24h Change:</span>
            <span className={currency.change.includes("-") ? s.changeNeg : s.changePos}>
              {currency.change}%
            </span>
          </li>
        </ul>
      </div>
    </NavLink>
  );
};

export default CurrencyCard;
