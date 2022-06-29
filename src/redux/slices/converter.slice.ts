import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IFetchCurrencies } from "../../types/ResponseTypes/response.types";
import { IConverterState } from "../../types/slices/converter.slice.types";
import { fetchConverterCurrencies } from "../thunks/converter.thunks";

const initialState: IConverterState = {
  currencies: [],
  error: "",
  isFetching: true,
  valueFrom: null,
  valueTo: null,
};

const converterSlice = createSlice({
  initialState,
  name: "converter",
  reducers: {
    setValueFrom(state, action) {
      state.valueFrom = action.payload;
    },
    setValueTo(state, action) {
      state.valueTo = action.payload;
    },
  },
  extraReducers: {
    [fetchConverterCurrencies.fulfilled.type]: (state, action: PayloadAction<IFetchCurrencies>) => {
      state.isFetching = false;
      state.error = "";
      state.currencies = action.payload.data.coins;
      state.valueFrom = {
        label: action.payload.data.coins[0].symbol,
        value: action.payload.data.coins[0].price,
        icon: action.payload.data.coins[0].iconUrl,
      };
    },
    [fetchConverterCurrencies.pending.type]: (state, action) => {
      state.isFetching = true;
    },
    [fetchConverterCurrencies.rejected.type]: (state, action) => {
      state.isFetching = false;
      state.error = action.payload;
    },
  },
});

export default converterSlice.reducer;
export const { setValueFrom, setValueTo } = converterSlice.actions;
