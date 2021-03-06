import { createAsyncThunk } from "@reduxjs/toolkit";
import { CurrencyService } from "../../API/currency.service";
import { SingleCurrencyThunkTypes } from "../../types/slices/singleCurrency.slice.types";

export const fetchSingleCurrency = createAsyncThunk(
  SingleCurrencyThunkTypes.fetch_one,
  async (id: string, thunk) => {
    try {
      const data = await CurrencyService.fetchSingleCurrency(id);
      return data;
    } catch (err) {
      return thunk.rejectWithValue(err);
    }
  }
);

export const fetchCurrencyHistory = createAsyncThunk(
  SingleCurrencyThunkTypes.fetch_history,
  async (payload: { id: string; period: string }, thunk) => {
    try {
      const data = await CurrencyService.fetchCurrencyHistory(payload.id, payload.period);
      return data;
    } catch (err) {
      return thunk.rejectWithValue(err);
    }
  }
);
