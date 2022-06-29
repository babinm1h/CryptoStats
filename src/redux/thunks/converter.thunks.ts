import { createAsyncThunk } from "@reduxjs/toolkit";
import { CurrencyService } from "../../API/currency.service";
import { ConverterThunkTypes } from "../../types/slices/converter.slice.types";

export const fetchConverterCurrencies = createAsyncThunk(
  ConverterThunkTypes.fetch_currencies,
  async (_, thunk) => {
    try {
      const data = await CurrencyService.fetchAll(45);
      return data;
    } catch (err) {
      return thunk.rejectWithValue(err);
    }
  }
);
