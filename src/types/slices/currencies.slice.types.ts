import { ICurrency } from "../currency.types";
import { ITotalStats } from "../ResponseTypes/totalStats.types";

export interface ICurrenciesState {
  currencies: ICurrency[];
  isFetching: boolean;
  stats: ITotalStats | null;
  topCurrencies: ICurrency[];
  isTopFetching: boolean;
  currentPage: number;
  totalCount: number;
}

export enum CurrenciesThunkTypes {
  fetch_all = "currencies/fetch_all",
  fetch_top = "currencies/fetch_top",
  fetch_single = "currencies/fetch_single",
}
