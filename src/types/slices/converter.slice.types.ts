import { IConverterValue } from "../converterValue.types";
import { ICurrency } from "../currency.types";

export interface IConverterState {
  isFetching: boolean;
  valueTo: IConverterValue | null;
  valueFrom: IConverterValue | null;
  currencies: ICurrency[];
  error: string;
}

export enum ConverterThunkTypes {
  fetch_currencies = "converter/fetch_currencies",
}
