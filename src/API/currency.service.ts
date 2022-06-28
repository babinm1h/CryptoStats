import { $currencyInstance } from ".";
import {
  IFetchCurrencies,
  IFetchSingleCurrency,
  IGetCurrencyHistory,
} from "../types/ResponseTypes/response.types";

export class CurrencyService {
  static async fetchAll(limit?: number | 20): Promise<IFetchCurrencies> {
    const { data } = await $currencyInstance.get<IFetchCurrencies>(`/coins?limit=${limit}`);
    return data;
  }

  static async fetchSingleCurrency(id: string): Promise<IFetchSingleCurrency> {
    const { data } = await $currencyInstance.get(`/coin/${id}`);
    return data;
  }

  static async fetchCurrencyHistory(id: string, period: string): Promise<IGetCurrencyHistory> {
    const { data } = await $currencyInstance.get(`coin/${id}/history?timePeriod=${period}`);
    return data;
  }

  static async fetchExchanges() {}
}
