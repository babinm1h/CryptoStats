import { ISingleCurrency } from "../currency.types";

export interface ISingleCurrencyState {
  currency: ISingleCurrency | null;
  isFetching: boolean;
  error: string;
}

export enum SingleCurrencyThunkTypes {
  fetch_one = "currency/fetch_one",
}
