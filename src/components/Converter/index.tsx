import React, { useEffect, useState } from "react";
import MainLayout from "../layouts/MainLayout";
import s from "./Converter.module.scss";
import Select, { SingleValue } from "react-select";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { useAppSelector } from "../../hooks/useAppSelector";
import { fetchConverterCurrencies } from "../../redux/thunks/converter.thunks";
import { setValueFrom, setValueTo } from "../../redux/slices/converter.slice";
import { IConverterValue } from "../../types/converterValue.types";
import CustomOption, { CustomValue } from "./CustomOption";

const ConverterPage = () => {
  const [amount, setAmount] = useState<number>(1);

  const dispatch = useAppDispatch();
  const { currencies, error, isFetching, valueFrom, valueTo } = useAppSelector((state) => state.converter);

  const options: IConverterValue[] = currencies.map((c) => ({
    value: c.price,
    label: c.symbol,
    icon: c.iconUrl,
  }));

  const handleChangeFrom = (value: SingleValue<IConverterValue>) => {
    dispatch(setValueFrom(value));
  };

  const handleChangeTo = (value: SingleValue<IConverterValue>) => {
    dispatch(setValueTo(value));
  };

  const handeChangeAmount = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAmount(+e.target.value);
  };

  const result = valueFrom && valueTo && ((+valueFrom.value * amount) / +valueTo.value).toFixed(3);

  useEffect(() => {
    dispatch(fetchConverterCurrencies());
  }, []);

  return (
    <MainLayout>
      <div className={s.wrapper}>
        <div className={s.converter}>
          <div className={s.fromBlock}>
            <label htmlFor="amount" className={s.label}>
              Amount to convert:
            </label>
            <input
              id="amount"
              min={1}
              type="number"
              className={s.input}
              placeholder="Amount to convert"
              value={amount}
              onChange={handeChangeAmount}
            />
            <label className={s.label}>Convert From:</label>
            <Select
              options={options}
              onChange={handleChangeFrom}
              value={valueFrom}
              className={s.select}
              components={{ Option: CustomOption, SingleValue: CustomValue }}
            />
          </div>
          <label className={s.label}>Convert To:</label>
          <Select
            options={options}
            onChange={handleChangeTo}
            value={valueTo}
            className={s.select}
            components={{ Option: CustomOption, SingleValue: CustomValue }}
          />
          <div className={s.resultBlock}>
            <span className={s.resultLabel}>Result:</span>
            <span className={s.resultValue}>
              {result} {valueTo?.label}
            </span>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default ConverterPage;
