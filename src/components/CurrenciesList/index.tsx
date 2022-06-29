import React, { FC } from "react";
import { ICurrency } from "../../types/currency.types";
import s from "./CurrenciesList.module.scss";
import CurrencyCard from "./CurrencyCard";

interface ICurrencciesListProps {
  currencies: ICurrency[];
}

const CurrenciesList: FC<ICurrencciesListProps> = ({ currencies }) => {
  return (
    <ul className={s.list}>
      {currencies.map((c) => (
        <CurrencyCard currency={c} key={c.uuid} />
      ))}
    </ul>
  );
};

export default CurrenciesList;
