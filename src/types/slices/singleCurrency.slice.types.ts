import { ICurrencyHistory, ISingleCurrency } from "../currency.types";

export interface ISingleCurrencyState {
  currency: ISingleCurrency | null;
  isFetching: boolean;
  error: string;
  history: ICurrencyHistory[];
  isHistoryFetching: boolean;
}

export enum SingleCurrencyThunkTypes {
  fetch_one = "currency/fetch_one",
  fetch_history = "currency/fetch_history",
}
