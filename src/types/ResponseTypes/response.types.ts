import { ICurrency, ICurrencyHistory, ISingleCurrency } from "../currency.types";
import { ITotalStats } from "./totalStats.types";

export interface IFetchCurrencies {
  data: {
    coins: ICurrency[];
    stats: ITotalStats;
  };
}

export interface IFetchSingleCurrency {
  data: {
    coin: ISingleCurrency;
  };
}

export interface IGetCurrencyHistory {
  data: {
    change: string;
    history: ICurrencyHistory[];
  };
}

export interface IGetExchanges {
  data: {
    coins: ICurrency[];
  };
}
