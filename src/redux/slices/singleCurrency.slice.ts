import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFetchSingleCurrency } from "../../types/ResponseTypes/response.types";
import { ISingleCurrencyState } from "../../types/slices/singleCurrency.slice.types";
import { fetchSingleCurrency } from "../thunks/singleCurrency.thunks";

const initialState: ISingleCurrencyState = {
  currency: null,
  error: "",
  isFetching: true,
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
  },
});

export default singleCurrencySlice.reducer;
