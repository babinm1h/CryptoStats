import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFetchSingleCurrency, IGetCurrencyHistory } from "../../types/ResponseTypes/response.types";
import { ISingleCurrencyState } from "../../types/slices/singleCurrency.slice.types";
import { fetchCurrencyHistory, fetchSingleCurrency } from "../thunks/singleCurrency.thunks";

const initialState: ISingleCurrencyState = {
  currency: null,
  error: "",
  isFetching: true,
  history: [],
  isHistoryFetching: true,
};

const singleCurrencySlice = createSlice({
  initialState,
  name: "singleCurrency",
  reducers: {},
  extraReducers: {
    [fetchSingleCurrency.fulfilled.type]: (state, action: PayloadAction<IFetchSingleCurrency>) => {
      state.isFetching = false;
      state.error = "";
      state.currency = action.payload.data.coin;
    },
    [fetchSingleCurrency.pending.type]: (state, action) => {
      state.isFetching = true;
    },
    [fetchSingleCurrency.rejected.type]: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },

    [fetchCurrencyHistory.fulfilled.type]: (state, action: PayloadAction<IGetCurrencyHistory>) => {
      state.isHistoryFetching = false;
      state.history = action.payload.data.history;
    },
    [fetchCurrencyHistory.pending.type]: (state, action) => {
      state.isHistoryFetching = true;
    },
    [fetchCurrencyHistory.rejected.type]: (state, action) => {
      state.error = action.payload;
      state.isHistoryFetching = false;
    },
  },
});

export default singleCurrencySlice.reducer;
