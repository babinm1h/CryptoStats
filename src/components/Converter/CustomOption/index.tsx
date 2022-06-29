import React, { ComponentType } from "react";
import { components, GroupBase, OptionProps, SingleValueProps } from "react-select";
import { IConverterValue } from "../../../types/converterValue.types";
import s from "./CustomOption.module.scss";

const CustomOption:
  | ComponentType<OptionProps<IConverterValue, false, GroupBase<IConverterValue>>>
  | undefined = (props) => {
  const { Option } = components;

  return (
    <Option {...props} className={s.option}>
      <img src={props.data.icon} alt="icon" />
      <span>{props.data.label}</span>
    </Option>
  );
};

export default CustomOption;

export const CustomValue:
  | ComponentType<SingleValueProps<IConverterValue, false, GroupBase<IConverterValue>>>
  | undefined = (props) => {
  const { SingleValue } = components;

  return (
    <SingleValue {...props} className={s.option}>
      <img src={props.data.icon} alt="icon" />
      <span>{props.data.label}</span>
    </SingleValue>
  );
};
