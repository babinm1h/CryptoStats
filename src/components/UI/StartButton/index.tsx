import React, { FC } from "react";
import s from "./StartButton.module.scss";
import { useNavigate } from "react-router-dom";
import { AllRoutes } from "../../AppRoutes";

interface IStartButtonProps {
  className?: string;
}

const StartButton: FC<IStartButtonProps> = ({ className }) => {
  const nav = useNavigate();

  const handleClick = () => {
    nav(AllRoutes.TOP_CURRENCIES);
  };

  return (
    <button className={s.btn + ` ${className}`} onClick={handleClick}>
      Get started!
    </button>
  );
};

export default StartButton;
