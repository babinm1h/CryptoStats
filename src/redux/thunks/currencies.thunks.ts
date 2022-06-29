import { createAsyncThunk } from "@reduxjs/toolkit";
import { CurrencyService } from "../../API/currency.service";
import { CurrenciesThunkTypes } from "../../types/slices/currencies.slice.types";

export const fetchCurrencies = createAsyncThunk(
  CurrenciesThunkTypes.fetch_all,
  async (page: number, thunk) => {
    try {
      const limit = 40;
      const offset = limit * page - limit;
      const data = await CurrencyService.fetchAll(limit, offset);
      return data;
    } catch (err) {
      return thunk.rejectWithValue(err);
    }
  }
);

export const fetchTopCurrencies = createAsyncThunk(CurrenciesThunkTypes.fetch_top, async (_, thunk) => {
  try {
    const data = await CurrencyService.fetchAll(10);
    return data;
  } catch (err) {
    return thunk.rejectWithValue(err);
  }
});
