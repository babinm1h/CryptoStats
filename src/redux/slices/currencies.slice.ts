import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFetchCurrencies } from "../../types/ResponseTypes/response.types";
import { ICurrenciesState } from "../../types/slices/currencies.slice.types";
import { fetchCurrencies, fetchTopCurrencies } from "../thunks/currencies.thunks";

const initialState: ICurrenciesState = {
  currencies: [],
  isFetching: true,
  stats: null,
  isTopFetching: true,
  topCurrencies: [],
};

const currenciesSlice = createSlice({
  initialState,
  name: "currencies",
  reducers: {},
  extraReducers: {
    [fetchCurrencies.fulfilled.type]: (state, action: PayloadAction<IFetchCurrencies>) => {
      state.isFetching = false;
      state.currencies = action.payload.data.coins;

    },
    [fetchCurrencies.pending.type]: (state, action) => {
      state.isFetching = false;
    },
    [fetchCurrencies.rejected.type]: (state, action) => {
      state.isFetching = false;
    },

    [fetchTopCurrencies.fulfilled.type]: (state, action: PayloadAction<IFetchCurrencies>) => {
      state.isTopFetching = false;
      state.topCurrencies = action.payload.data.coins;
      state.stats = action.payload.data.stats;
    },
    [fetchTopCurrencies.pending.type]: (state, action) => {
      state.isTopFetching = true;
    },
    [fetchTopCurrencies.rejected.type]: (state, action) => {
      state.isTopFetching = false;
    },
  },
});

export default currenciesSlice.reducer;
