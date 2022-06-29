import React, { useEffect } from "react";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchCurrencies } from "../../redux/thunks/currencies.thunks";
import CurrenciesList from "../CurrenciesList";
import MainLayout from "../layouts/MainLayout";
import Loader from "../Loader";
import Pagination from "../Pagination";
import s from "./AllCurrencies.module.scss";

const AllCurenciesPage = () => {
  const dispatch = useAppDispatch();
  const { currencies, isFetching, currentPage, totalCount } = useAppSelector((state) => state.currencies);

  useEffect(() => {
    dispatch(fetchCurrencies(currentPage));
  }, [dispatch, currentPage]);

  if (isFetching || !currencies) {
    return (
      <div className="loader-center">
        <Loader />
      </div>
    );
  }

  return (
    <MainLayout>
      <div className={s.wrapper}>
        <CurrenciesList currencies={currencies} />
        <Pagination totalCount={totalCount} currentPage={currentPage} />
      </div>
    </MainLayout>
  );
};

export default AllCurenciesPage;
