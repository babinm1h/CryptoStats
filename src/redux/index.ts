import { AnyAction, combineReducers, configureStore, ThunkDispatch } from "@reduxjs/toolkit";
import converterSlice from "./slices/converter.slice";
import currenciesSlice from "./slices/currencies.slice";
import singleCurrencySlice from "./slices/singleCurrency.slice";

const rootReducer = combineReducers({
  currencies: currenciesSlice,
  singleCurrency: singleCurrencySlice,
  converter: converterSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
});

export type RootState = ReturnType<typeof rootReducer>;
export type AppDispatch = ThunkDispatch<RootState, any, AnyAction>;
